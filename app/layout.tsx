import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata: Metadata = {
  title: "Hydro Squad Kitchen Exhaust Cleaning",
  description: "Hydro Squad provides certified kitchen exhaust services in Toronto, Ontario & surrounding areas."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
