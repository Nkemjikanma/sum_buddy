import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ModalProvider } from "@/lib/utils/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "sumBuddy_ai",
    description: "Summary generation tool for meetings",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <html lang="en" suppressHydrationWarning>
                <body className={inter.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <ModalProvider> {children}</ModalProvider>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
