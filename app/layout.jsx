import "./globals.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { Noto_Sans_Arabic } from "next/font/google";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "LSSI | IT Dep",
  description: "Portal for IT management of LSSI",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body lang="en">
        <div className="rainbow h-2"></div>
        <div className="container" dir="rtl">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
