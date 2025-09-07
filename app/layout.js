// app/layout.js
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = { title: "Robin’s Touch Senior Care" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f7fbfa] text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer compact /> {/* 👈 slimmer footer */}
      </body>
    </html>
  );
}
