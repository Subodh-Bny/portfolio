import type { Metadata } from "next";
import { Inter, Fira_Code, Roboto, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/layouts/TopNav";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });
// const FiraCode = Fira_Code({
//   subsets: ["latin"],
// });

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Subodh Adhikari",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} bg-gray-200`}>
        <TopNav />
        <main className="p-6 px-20">{children}</main>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
