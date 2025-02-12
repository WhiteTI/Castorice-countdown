import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "Castorice Countdown",
    description: "Countdown to Castorice and Honkai Star Rail 3.2 release",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
