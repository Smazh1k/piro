# Sceniczna

Strona Sceniczna oparta na Next.js, React, TypeScript i MongoDB.

## Uruchomienie lokalne

Wymagany jest Node.js.

1. Zainstaluj zależności: `npm install`
2. Utwórz plik `.env.local` w katalogu projektu:

   ```env
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<database>
   SMTP_HOST=<adres-serwera-smtp>
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=<login-do-poczty>
   SMTP_PASSWORD=<haslo-aplikacji>
   SMTP_FROM=<zweryfikowany-adres-nadawcy>
   ```

   Zastąp wartości przykładowe danymi dostawcy poczty i własnego klastra.
   Dla połączeń TLS na porcie 465 ustaw `SMTP_SECURE=true`; dla portu 587
   zazwyczaj używa się `SMTP_SECURE=false`. Formularz wysyła wiadomości do
   `technika@sceniczna.pl`, a odpowiedź na otrzymane pismo trafi do adresu
   podanego przez nadawcę formularza. Nie używaj głównego hasła do poczty,
   jeśli dostawca oferuje hasło aplikacji. Nie publikuj `.env.local` ani nie
   umieszczaj danych logowania w kodzie.
3. Uruchom serwer developerski: `npm run dev`
4. Otwórz `http://localhost:3000`.

Bez skonfigurowanego `MONGODB_URI` strony i build nadal działają, ale API bloga
zwraca status `503`, a interfejs pokazuje informację o niedostępności bazy.

## Blog

Wpisy przechowywane są w kolekcji MongoDB `posts`. Każdy opublikowany wpis
powinien zawierać `title`, unikalny `slug` (małe litery i cyfry rozdzielone
myślnikami), `excerpt`, `content` oraz `publishedAt` jako datę MongoDB.
Wpisy z datą publikacji w przyszłości nie są wyświetlane.

`GET /api/posts` zwraca opublikowane wpisy, a
`GET /api/posts?slug=adres-wpisu` zwraca pojedynczy wpis. Publicznego API do
dodawania wpisów ani panelu administracyjnego nie ma — zarządzaj treścią
bezpośrednio przez zaufane narzędzia MongoDB.

## Dostępne polecenia

- `npm run dev` — serwer developerski
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm run start` — uruchomienie production build

Formularz kontaktowy wysyła wiadomości przez SMTP z serwerowego API. Gdy
ustawienia SMTP nie są skonfigurowane, API zwraca `503`, a formularz wyświetla
informację o możliwości napisania bezpośrednio na adres kontaktowy.
