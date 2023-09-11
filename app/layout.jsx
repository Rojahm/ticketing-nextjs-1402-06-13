import "./globals.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { Noto_Sans_Arabic } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";

const noto = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata = {
  title: "LSSI | IT Dep",
  description: "Portal for IT management of LSSI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <div className="rainbow h-2"></div>

        <div className="container">
          <Header />
          <div className="container mt-5 pt-3" dir="rtl">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
