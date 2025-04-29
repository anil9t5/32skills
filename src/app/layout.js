import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
import { DynaPuff, Poppins } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dynaPuff = DynaPuff({
  subsets: ['latin'],    // or ['latin-ext'] if you need more languages
  weight: ['400', '500', '600', '700'], // DynaPuff supports multiple weights
  variable: '--font-dynapuff',          // optional CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${dynaPuff.variable}`}>
       <Navbar />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
