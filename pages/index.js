import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/src/Components/Header";
import WeWork from "@/src/Components/WeWork";
import Brands from "@/src/Components/Brands";
import Ourservice from "@/src/Components/Ourservice";
import Casestudies from "@/src/Components/Casestudies";
import Orgnisation from "@/src/Components/Orgnisation";
import Industries from "@/src/Components/Industries";
import NavBar from "@/src/Components/MyNav";
import ArticleSec from "@/src/Components/ArticleSec";
import ConsultationCard from "@/src/Components/ConsultationCard";
import StrategiesCard from "@/src/Components/StrategiesCard";
import Footer from "@/src/Components/Footer";
import BackToTop from "@/src/Components/BackToTop";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <NavBar />
        <Header />
        <WeWork />
        <Brands />
        <Ourservice />
        <Casestudies />
        <Orgnisation />
        <Industries />
        <ArticleSec />
        <ConsultationCard />
        <StrategiesCard />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
