# Sceniczna

Strona Sceniczna oparta na Next.js, React, TypeScript i MongoDB.

## Uruchomienie lokalne

Wymagany jest Node.js.

1. Zainstaluj zależności: `npm install`
2. Utwórz plik `.env.local` w katalogu projektu i dodaj connection string MongoDB:

   ```env
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<database>
   ```

   Zastąp wartości w nawiasach danymi z własnego klastra. Nie publikuj pliku
   `.env.local` ani nie umieszczaj connection stringa w kodzie.
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

Formularz kontaktowy przygotowuje wiadomość w domyślnej aplikacji pocztowej
użytkownika. Użytkownik musi samodzielnie wysłać przygotowaną wiadomość z tej
aplikacji.
