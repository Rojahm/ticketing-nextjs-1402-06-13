import "./globals.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { Noto_Sans_Arabic } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const noto = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata = {
  title: "LSSI | IT Dep",
  description: "Portal for IT management of LSSI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2"></div>
        <div className="rainbow h-20"></div>
        <div className="container">
          <Header />
          <div className="container mt-5" dir="rtl">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
