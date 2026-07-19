import { Playfair_Display, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ScrollTop from "@/components/modules/ScrollTop";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const myFont = localFont({
  src: [
    {
      path: "../fonts/CormorantGaramond-Bold.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-myfont",
});

export const metadata = {
  title: "Royal Taste Restaurant",
  description: "Exceptional food , unforgettable experience",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${playfair.variable} ${montserrat.variable} ${myFont.variable} font-sans
    bg-black text-white h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-semibold!`}>
        <CartProvider>
          <ScrollTop />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
