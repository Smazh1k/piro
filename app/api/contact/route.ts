import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const contactEmail = "technika@sceniczna.pl";
const maxRequestSize = 10_000;

type ContactMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

async function readRequestBody(
  request: NextRequest,
): Promise<{ body: unknown } | { status: 400 | 413 }> {
  if (!request.body) {
    return { status: 400 };
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      size += value.byteLength;

      if (size > maxRequestSize) {
        await reader.cancel();
        return { status: 413 };
      }

      chunks.push(value);
    }
  } catch {
    return { status: 400 };
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(size);
  let offset = 0;

  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return { body: JSON.parse(new TextDecoder().decode(bytes)) };
  } catch {
    return { status: 400 };
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getSmtpConfig() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, SMTP_FROM } =
    process.env;
  const port = Number(SMTP_PORT);

  if (
    !SMTP_HOST?.trim() ||
    !SMTP_PORT ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    (SMTP_SECURE !== "true" && SMTP_SECURE !== "false") ||
    !SMTP_USER?.trim() ||
    !SMTP_PASSWORD ||
    !SMTP_FROM?.trim() ||
    /[\r\n]/.test(SMTP_FROM)
  ) {
    return null;
  }

  return {
    host: SMTP_HOST.trim(),
    port,
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER.trim(),
      pass: SMTP_PASSWORD,
    },
    from: SMTP_FROM.trim(),
  };
}

function parseContactMessage(value: unknown): ContactMessage | null {
  if (!isRecord(value)) {
    return null;
  }

  const { name, email, phone, message, website } = value;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof message !== "string" ||
    typeof website !== "string"
  ) {
    return null;
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanPhone = phone.trim();
  const cleanMessage = message.trim();

  if (
    cleanName.length < 2 ||
    cleanName.length > 100 ||
    /[\r\n\0]/.test(cleanName) ||
    cleanEmail.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
    cleanPhone.length > 40 ||
    cleanMessage.length < 10 ||
    cleanMessage.length > 5000 ||
    website.length > 0
  ) {
    return null;
  }

  return {
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone,
    message: cleanMessage,
    website,
  };
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(contentLength) && contentLength > maxRequestSize) {
    return NextResponse.json(
      { error: "Wiadomość jest za duża." },
      { status: 413 },
    );
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "Nieprawidłowy format żądania." },
      { status: 415 },
    );
  }

  const parsedBody = await readRequestBody(request);

  if ("status" in parsedBody) {
    if (parsedBody.status === 413) {
      return NextResponse.json(
        { error: "Wiadomość jest za duża." },
        { status: 413 },
      );
    }

    return NextResponse.json(
      { error: "Nieprawidłowa treść żądania." },
      { status: 400 },
    );
  }

  const contactMessage = parseContactMessage(parsedBody.body);

  if (!contactMessage) {
    return NextResponse.json(
      { error: "Sprawdź dane formularza i spróbuj ponownie." },
      { status: 400 },
    );
  }

  const smtp = getSmtpConfig();

  if (!smtp) {
    console.error("Contact API unavailable: SMTP environment is incomplete.");
    return NextResponse.json(
      {
        error:
          "Formularz jest chwilowo niedostępny. Napisz bezpośrednio na technika@sceniczna.pl.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    await transporter.sendMail({
      from: smtp.from,
      to: contactEmail,
      replyTo: {
        name: contactMessage.name,
        address: contactMessage.email,
      },
      subject: "Nowe zapytanie ze strony Sceniczna.pl",
      text: [
        `Imię i nazwisko: ${contactMessage.name}`,
        `E-mail: ${contactMessage.email}`,
        `Telefon: ${contactMessage.phone || "Nie podano"}`,
        "",
        "Wiadomość:",
        contactMessage.message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Wiadomość została wysłana." });
  } catch (error) {
    console.error("Contact API failed to send email:", error);
    return NextResponse.json(
      {
        error:
          "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na technika@sceniczna.pl.",
      },
      { status: 502 },
    );
  } finally {
    transporter.close();
  }
}
