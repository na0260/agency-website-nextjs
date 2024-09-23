import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export async function generateMetadata() {
    return {
        title: "Agency Website | Home",
        description: "Agency Website by Next.js",
        keywords: "Agency, Website, Next.js",
    };
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader
        color="#269669"
        height={3}
        speed={200}
      />

      <Navbar />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
