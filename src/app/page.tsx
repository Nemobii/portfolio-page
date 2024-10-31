"use client";
import Layout from "./components/Layout";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import FloatingImage from "./components/FloatingImage";


const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (event: { deltaY: number; }) => {
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
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById(`section-${currentSection + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <Layout>
      <section id="section-1" className="h-screen py-40">
        <div className="flex justify-center mb-12">
          <h1 className="mb-2">Nico&apos;s Blog, hier findest du Bilder meiner Projekte und Reisen</h1>
        </div>
        <div className="flex gap-x-6">
          <div>
            <p className="text-center mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              itaque consequuntur odit ea. Illum sunt ducimus odio omnis sit
              quaerat, voluptas impedit? Voluptate quae sapiente corrupti
              similique molestias ab voluptatibus. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Porro reprehenderit placeat adipisci
              esse at impedit nobis, aspernatur error, cupiditate doloribus in
              assumenda, repellat sit itaque id molestiae iure aut ullam. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
              atque aspernatur dicta beatae quia incidunt repellat ratione,
              perferendis ducimus minus, veniam iusto dolorum commodi iste
              cumque? Quaerat facilis eos labore.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <button onClick={() => scrollToSection(1)}>Go to Section 2</button>
        </div>
      </section>
      <section id="section-2" className="h-screen py-40 relative">
        <div className="flex flex-col">
          <h2 className="self-center mb-6">Letzte Reise</h2>
          <div className="text-center mx-auto max-w-[860px] mb-6">
          Auf meiner letzten Reise erkundete ich die faszinierenden Landschaften Tansanias und Sansibars. Auf einer Safari durch die Nationalparks Serengeti, Ngorogoro, Tarangire und Lake Manyara erlebte ich beeindruckende 
          Tierbeobachtungen und konnte zahlreiche Arten, darunter auch Jungtiere, fotografieren. 
          Nach den abenteuerlichen Jeepfahrten erholten wir uns zum Abschluss auf den traumhaften Stränden von Sansibar, wo das blaue Meer und die warmen Temperaturen für pure Entspannung sorgten.
          </div>
          <div className="flex justify-center">
            <Link href="/portfolio/travel">Tansania</Link>
          </div>
        </div>
        <div>
          <div className="absolute -left-10 bottom-40">
            <FloatingImage
              src="/portfolio-page/images/Animals/DSC_5847.JPG"
              alt="Floating Image"
              delay="6000"
            />
          </div>
          <div className="absolute -right-10 bottom-40">
            <FloatingImage
              src="/portfolio-page/images/Animals/DSC_6030.JPG"
              alt="Floating Image"
              delay="13000"
            />
          </div>
          <div className="absolute left-1/2 bottom-80">
            <FloatingImage
              src="/portfolio-page/images/Animals/DSC_5930.JPG"
              alt="Floating Image"
              delay="11000"
            />
          </div>
          <div className="absolute -left-60 top-40">
            <FloatingImage
              src="/portfolio-page/images/Animals/DSC_5994.JPG"
              alt="Floating Image"
              delay="8000"
            />
          </div>
          <div className="absolute -right-60 top-120">
            <FloatingImage
              src="/portfolio-page/images/Animals/DSC_5997.JPG"
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
