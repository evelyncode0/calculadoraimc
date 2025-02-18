import localFont from "next/font/local";
import "./globals.css";

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

export const metadata = {
  title: "Calculadora IMC",
  description: "Generated by create CALCULADORA IMC BY EVELYN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className='h-screen w-screen flex items-center justify-center  overflow-hidden bg-black'
      >
        {children}
      </body>
    </html>
  );
}
