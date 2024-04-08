import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <BackgroundGradientAnimation>
                    {/* 88px offset for the navbar height */}
                    <main className="absolute z-50 inset-0 flex flex-col gap-20 items-center justify-center text-center pointer-events-none pt-[88px] px-10">
                        {children}
                    </main>
                </BackgroundGradientAnimation>
            </body>
        </html>
    );
}
