"use client";
import Layout from "./components/Layout";
import Link from "next/link";
import FloatingImage from "./components/FloatingImage";

const Home: React.FC = () => {
  return (
    <Layout>
      <section id="section-1" className="flex flex-col justify-center text-center h-screen bg-home bg-top-right">
        <div className="pr-96">
          <h1 className="font-dancing-script text-white text-[128px] leading-normal">Hi, ich bin Nico!</h1>
          <p className="text-white text-[32px]">Ein Fotograf und Abenteurer, der die Welt durch die Linse entdeckt.</p>
        </div>
      </section>
      <section id="section-2" className="h-[70vh] bg-parallax bg-cover bg-no-repeat bg-fixed bg-center"></section>
      <section id="section-3" className="h-[calc(100vh-180px)] py-40 relative bg-grey-light">
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
