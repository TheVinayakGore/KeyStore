import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "KeyStore - Secure Password Manager | Store Passwords in Cloud | MongoDB",
    template: "%s | KeyStore",
  },
  description:
    "KeyStore is a secure, cloud-based password manager that helps you store, organize, and access your passwords safely. Built with Next.js and MongoDB for maximum security and reliability.",
  keywords: [
    "password manager",
    "secure passwords",
    "cloud storage",
    "MongoDB",
    "Next.js",
    "cybersecurity",
    "password security",
    "digital vault",
    "password generator",
    "secure storage",
  ],
  authors: [{ name: "KeyStore Team" }],
  creator: "KeyStore",
  publisher: "KeyStore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://keystore.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keystore.vercel.app",
    siteName: "KeyStore",
    title: "KeyStore - Secure Password Manager | Store Passwords in Cloud",
    description:
      "Secure your digital life with KeyStore. Store passwords safely in the cloud with enterprise-grade encryption. Built with Next.js and MongoDB.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KeyStore - Secure Password Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KeyStore - Secure Password Manager | Store Passwords in Cloud",
    description:
      "Secure your digital life with KeyStore. Store passwords safely in the cloud with enterprise-grade encryption.",
    images: ["/og-image.png"],
    creator: "@keystore",
    site: "@keystore",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "password manager",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "KeyStore",
    "application-name": "KeyStore",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
