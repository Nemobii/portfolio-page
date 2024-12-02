"use client";
import Layout from "./components/Layout";
import FloatingImage from "./components/FloatingImage";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <Layout>
      <section
        id="section-1"
        className="flex flex-col justify-center text-center h-screen bg-home bg-top-right"
      >
        <div className="pr-96">
          <h1 className="font-dancing-script text-white text-[128px] leading-normal">
            Hi, ich bin Nico!
          </h1>
          <p className="text-white text-[32px]">
            Ein Fotograf und Abenteurer, der die Welt durch die Linse entdeckt.
          </p>
        </div>
      </section>

      <section
        id="section-2"
        className="h-[70vh] bg-parallax bg-cover bg-no-repeat bg-fixed bg-center"
      ></section>

      <section
        id="section-3"
        className="h-[calc(100vh-180px)] py-40 bg-grey-light flex items-center justify-center relative"
      >
        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-6">
              Entdecke die Welt durch meine Linse
            </h2>
            <p className="text-lg leading-7 text-gray-700 mb-6">
              Auf meiner Homepage erwartet dich eine vielfältige Reise in die Welt
              der Fotografie und Abenteuer. Hier findest du atemberaubende Bilder
              von meinen Reisen, spannende Einblicke in besondere Projekte und
              inspirierende Geschichten, die ich mit der Kamera festgehalten
              habe. Ob du dich für faszinierende Landschaften, die Lebendigkeit
              der Tierwelt oder die Ausdruckskraft von Portraits interessierst –
              ich lade dich ein, meine Perspektive auf die Welt zu entdecken.
              Begleite mich auf meinen Abenteuern, erfahre mehr über meine
              Leidenschaft für Fotografie und lass dich von Momenten verzaubern,
              die einzigartig und unvergesslich sind.
            </p>

            <Link
              href="/blog"
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Zum Blog
            </Link>
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
