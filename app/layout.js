import { Poppins } from "next/font/google";
import BettingNavbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";



export const metadata = {
  title: "Adani Book",
  description: "Best betting site in India",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${poppins.className} antialiased`}>
        <BettingNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
