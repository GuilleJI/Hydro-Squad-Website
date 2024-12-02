import React from "react";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

// Metadata for the page
export const metadata: Metadata = {
  title: "Hydro Squad Kitchen Exhaust Cleaning",
  description: "Hydro Squad provides certified kitchen exhaust services in Toronto, Ontario & surrounding areas."
};

// Root layout for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
