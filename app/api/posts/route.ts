import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase, DatabaseConnectionError } from "@/lib/mongodb";
import Post from "@/models/Post";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  if (slug !== null && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return NextResponse.json({ error: "Nieprawidłowy adres wpisu." }, { status: 400 });
  }

  try {
    await connectToDatabase();

    if (slug) {
      const post = await Post.findOne({
        slug,
        publishedAt: { $lte: new Date() },
      })
        .select("title slug excerpt content publishedAt createdAt")
        .lean();

      if (!post) {
        return NextResponse.json({ error: "Nie znaleziono wpisu." }, { status: 404 });
      }

      return NextResponse.json({
        ...post,
        id: String(post._id),
        publishedAt: post.publishedAt.toISOString(),
        createdAt: post.createdAt.toISOString(),
      });
    }

    const posts = await Post.find({ publishedAt: { $lte: new Date() } })
      .sort({ publishedAt: -1 })
      .select("title slug excerpt publishedAt createdAt")
      .lean();

    return NextResponse.json(
      posts.map((post) => ({
        ...post,
        id: String(post._id),
        publishedAt: post.publishedAt.toISOString(),
        createdAt: post.createdAt.toISOString(),
      })),
    );
  } catch (error) {
    if (error instanceof DatabaseConnectionError) {
      console.error("Posts API database unavailable:", error.message);
      return NextResponse.json(
        { error: "Blog jest chwilowo niedostępny. Sprawdź konfigurację bazy danych." },
        { status: 503 },
      );
    }

    throw error;
  }
}