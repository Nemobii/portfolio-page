"use client";
import Layout from "./components/Layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import FloatingImage from "./components/FloatingImage";

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (event: { deltaY: number }) => {
    if (event.deltaY > 0) {
      setCurrentSection((prev) => Math.min(prev + 1, 1));
    } else {
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }
  };

  const scrollToSection = (sectionIndex: React.SetStateAction<number>) => {
    setCurrentSection(sectionIndex);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById(`section-${currentSection + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection]);

  return (
    <Layout>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Roboto:wght@400;700&display=swap");

        #section-1 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }

        h1 {
          font-family: "Dancing Script", cursive;
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        p {
          font-family: "Roboto", sans-serif;
          font-size: 1.5rem;
          max-width: 600px;
        }
      `}</style>
      <section id="section-1">
        <h1>Hi, ich bin Nico!</h1>
        <p>Ein Fotograf und Abenteurer, der die Welt durch die Linse entdeckt.</p>
        <button className="mt-6" onClick={() => scrollToSection(1)}>
          Go to Section 2
        </button>
      </section>
      <section id="section-2" className="h-screen py-40 relative">
        <div className="flex flex-col">
          <h2 className="self-center mb-6">Letzte Reise</h2>
          <div className="text-center mx-auto max-w-[860px] mb-6">
            Auf meiner letzten Reise erkundete ich die faszinierenden
            Landschaften Tansanias und Sansibars. Auf einer Safari durch die
            Nationalparks Serengeti, Ngorogoro, Tarangire und Lake Manyara
            erlebte ich beeindruckende Tierbeobachtungen und konnte zahlreiche
            Arten, darunter auch Jungtiere, fotografieren. Nach den
            abenteuerlichen Jeepfahrten erholten wir uns zum Abschluss auf den
            traumhaften Stränden von Sansibar, wo das blaue Meer und die warmen
            Temperaturen für pure Entspannung sorgten.
          </div>
          <div className="flex justify-center">
            <Link href="/portfolio/travel">Tansania</Link>
          </div>
        </div>
        <div>
          <div className="absolute left-10 bottom-40">
            <FloatingImage
              src="/portfolio-page/images/Travel/Tansania/DSC_0613-min.JPG"
              alt="Floating Image"
              delay="6000"
            />
          </div>
          <div className="absolute right-10 bottom-40">
            <FloatingImage
              src="/portfolio-page/images/Travel/Tansania/DSC_0600-min.JPG"
              alt="Floating Image"
              delay="13000"
            />
          </div>
          <div className="absolute left-1/2 bottom-80">
            <FloatingImage
              src="/portfolio-page/images/Travel/Tansania/DSC_0704-min.JPG"
              alt="Floating Image"
              delay="11000"
            />
          </div>
          <div className="absolute left-60 top-40">
            <FloatingImage
              src="/portfolio-page/images/Travel/Tansania/DSC_0819.JPG"
              alt="Floating Image"
              delay="8000"
            />
          </div>
          <div className="absolute right-60 top-120">
            <FloatingImage
              src="/portfolio-page/images/Travel/Tansania/DSC_1104.JPG"
              alt="Floating Image"
              delay="9500"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
