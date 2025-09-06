import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Senior Care Website",
  description: "Compassionate senior care in Denver Metro.",
  robots: { index: false, follow: false }, // ← add this line
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col bg-[#f7faf9] text-slate-900">
        <Header />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
