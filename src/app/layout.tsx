import Header from "./components/header";
import Footer from "./components/footer";
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
      <body style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
        {/* <Header /> */}
        <main style={{ minHeight: "calc(100vh - 100px)", padding: "20px" }}>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
