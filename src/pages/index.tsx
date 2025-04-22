import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MobileLayout from "@/components/Layout/MobileLayout";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <MobileLayout maxWidth={500}>
      <Navbar />
      {/* <div
        className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      ></div> */}
      <div
        className="bg-pink-100"
        style={{
          fontFamily: "Neue Haas Grotesk Display Pro",
        }}
      >
        hi
      </div>
      <div className="bg-pink-100">hi2</div>
      <div className=" w-full h-full font-haas">TEST</div>
      <div className="bg-pink-100">hi3</div>
    </MobileLayout>
  );
}
