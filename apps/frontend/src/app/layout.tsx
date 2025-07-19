import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unified Store Manager Dashboard",
  description: "Manage all your stores from one dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}> 
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-6 gap-4 min-h-screen">
            <div className="text-2xl font-bold mb-8 tracking-tight text-blue-600">Unified Store Manager</div>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="py-2 px-3 rounded hover:bg-blue-50 font-medium text-gray-800">Dashboard</Link>
              <Link href="/stores" className="py-2 px-3 rounded hover:bg-blue-50 font-medium text-gray-800">Stores</Link>
              <Link href="/products" className="py-2 px-3 rounded hover:bg-blue-50 font-medium text-gray-800">Products</Link>
              <Link href="/orders" className="py-2 px-3 rounded hover:bg-blue-50 font-medium text-gray-800">Orders</Link>
              <Link href="/settings" className="py-2 px-3 rounded hover:bg-blue-50 font-medium text-gray-800">Settings</Link>
            </nav>
            <div className="mt-auto text-xs text-gray-400">© StoreSyncer</div>
          </aside>
          {/* Main Content */}
          <main className="flex-1 flex flex-col">
            {/* Header */}
            <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 justify-between">
              <div className="text-lg font-semibold text-gray-700">Dashboard</div>
              {/* Placeholder for user/account menu */}
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">U</div>
            </header>
            <section className="flex-1 p-8 bg-gray-50">{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}
