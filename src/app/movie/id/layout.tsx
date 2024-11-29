import "./globals.css";

export const metadata = {
  title: "Movie Catalog",
  description: "A simple movie catalog using the TMDB API.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
