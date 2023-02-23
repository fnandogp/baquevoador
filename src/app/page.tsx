import Image from "next/image";
//import { Inter } from "@next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Image
        src="/logo.png"
        width={250}
        height={250}
        alt="Baque Voador"
        className="hover:animate-pulse"
      />
    </div>
  );
}
