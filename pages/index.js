import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/src/Components/Header";
import WeWork from "@/src/Components/WeWork";
import Brands from "@/src/Components/Brands";
import Ourservice from "@/src/Components/Ourservice";
import Casestudies from "@/src/Components/Casestudies";
import Orgnisation from "@/src/Components/Orgnisation";
import Industries from "@/src/Components/Industries";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <WeWork />
        <Brands />
        <Ourservice />
        <Casestudies />
        <Orgnisation />
        <Industries />
        
      </div>
    </>
  );
}
