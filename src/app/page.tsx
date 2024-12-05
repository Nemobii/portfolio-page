"use client";

import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import FloatingImage from "./components/FloatingImage";
import Link from "next/link";

const imageFolders: {
  animals: string[];
  travel: { [key: string]: string[] };
  portraits: string[];
} = {
  animals: [
    "/portfolio-page/images/Animals/DSC_0763.jpg",
    "/portfolio-page/images/Animals/DSC_0819.JPG",
    "/portfolio-page/images/Animals/DSC_0704.jpg",
    "/portfolio-page/images/Animals/DSC_0109.jpg",
    "/portfolio-page/images/Animals/DSC_1152.jpg",
    "/portfolio-page/images/Animals/DSC_2717.jpg",
  ],
  travel: {
    CostaRica: [
      "/portfolio-page/images/Travel/CostaRica/DSC_4156-min.JPG",
      "/portfolio-page/images/Travel/CostaRica/DSC_4466-min.JPG",
      "/portfolio-page/images/Travel/CostaRica/DSC_4111-min.JPG",
    ],
    London: [
      "/portfolio-page/images/Travel/London/IMG_1166-min.jpg",
      "/portfolio-page/images/Travel/London/IMG_1186-min.jpg",
      "/portfolio-page/images/Travel/London/IMG_1212-min.jpg",
      "/portfolio-page/images/Travel/London/IMG_9470-min.jpg",
    ],
    Maledives: [
      "/portfolio-page/images/Travel/Maledives/IMG_5584-min.JPEG",
      "/portfolio-page/images/Travel/Maledives/DSC_0047-min.JPG",
      "/portfolio-page/images/Travel/Maledives/DSC_0040-min.JPG",
      "/portfolio-page/images/Travel/Maledives/DSC_8286-min.JPG",
    ],
    Portugal: [
      "/portfolio-page/images/Travel/Portugal/DSC_5400.jpg",
      "/portfolio-page/images/Travel/Portugal/DSC_2131.jpg",
      "/portfolio-page/images/Travel/Portugal/DSC_3775.jpg",
      "/portfolio-page/images/Travel/Portugal/DSC_2228.jpg",
  
    ],
    Schweiz: [
      "/portfolio-page/images/Travel/Schweiz/C9EC6A88-2E09-446C-82C9-AB0ABFEFF7BD-min.jpg",
    ],
    Tansania: [
      "/portfolio-page/images/Travel/Tansania/DSC_0600-min.JPG",
      "/portfolio-page/images/Travel/Tansania/DSC_1338.jpg",
      "/portfolio-page/images/Travel/Tansania/DSC_1472.jpg",
      "/portfolio-page/images/Travel/Tansania/DSC_2033.jpg",
      "/portfolio-page/images/Travel/Tansania/DSC_5064.jpg",
      "/portfolio-page/images/Travel/Tansania/DSC_4195.jpg",

    ],
  },
  portraits: [
    "/portfolio-page/images/Portrait/DSC_6552-min.JPG",
    "/portfolio-page/images/Portrait/image00034-min.jpeg",
    "/portfolio-page/images/Portrait/DSC_6674-min.JPG",
    "/portfolio-page/images/Portrait/DSC_8530-min.JPG",
    "/portfolio-page/images/Portrait/image00102-min.jpeg",
 
  ],
};

const getRandomImages = (
  folders: typeof imageFolders,
  count: number
): string[] => {
  const allImages: string[] = [];
  allImages.push(...folders.animals);
  allImages.push(...folders.portraits);
  Object.values(folders.travel).forEach((subFolder) => {
    allImages.push(...subFolder);
  });

  const selectedImages: string[] = [];
  while (selectedImages.length < count && allImages.length > 0) {
    const randomIndex = Math.floor(Math.random() * allImages.length);
    selectedImages.push(allImages.splice(randomIndex, 1)[0]);
  }

  return selectedImages;
};

const Home: React.FC = () => {
  const [randomImages, setRandomImages] = useState<string[]>([]);

  useEffect(() => {
    const selectedImages = getRandomImages(imageFolders, 4);
    setRandomImages(selectedImages);
  }, []);

  return (
    <Layout>
      {/* Section 1 */}
      <section
        id="section-1"
        className="flex flex-col justify-center text-center h-screen bg-home bg-top-right px-4 sm:px-6 lg:px-20"
      >
        <div className="pr-0 lg:pr-96">
          <h1 className="font-dancing-script text-white text-[48px] sm:text-[64px] lg:text-[128px] leading-normal">
            Hi, ich bin Nico!
          </h1>
          <p className="text-white text-[16px] sm:text-[20px] lg:text-[32px]">
            Ein Fotograf und Abenteurer, der die Welt durch die Linse entdeckt.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="section-2"
        className="h-[50vh] sm:h-[70vh] bg-parallax bg-cover bg-no-repeat bg-fixed bg-center"
      ></section>

      {/* Section 3 */}
      <section
        id="section-3"
        className="h-auto min-h-[calc(100vh-180px)] py-20 sm:py-40 bg-grey-light flex items-center justify-center relative"
      >
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 max-w-3xl w-full z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
              Entdecke die Welt durch meine Linse
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-7 text-gray-700 mb-6">
              Auf meiner Homepage erwartet dich eine vielfältige Reise in die
              Welt der Fotografie und Abenteuer. Hier findest du atemberaubende
              Bilder von meinen Reisen, spannende Einblicke in besondere
              Projekte und inspirierende Geschichten, die ich mit der Kamera
              festgehalten habe. Ob du dich für faszinierende Landschaften, die
              Lebendigkeit der Tierwelt oder die Ausdruckskraft von Portraits
              interessierst – ich lade dich ein, meine Perspektive auf die Welt
              zu entdecken. Begleite mich auf meinen Abenteuern, erfahre mehr
              über meine Leidenschaft für Fotografie und lass dich von Momenten
              verzaubern, die einzigartig und unvergesslich sind.
            </p>

            <Link
              href="/blog"
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Zum Blog
            </Link>
          </div>
        </div>

        {/* Floating Images */}
        <div className="hidden lg:block">
          {randomImages.map((src, index) => {
            const positions = [
              { top: "10%", left: "10%" },
              { top: "10%", right: "10%" },
              { bottom: "15%", left: "15%" },
              { bottom: "15%", right: "15%" },
            ];
            return (
              <div
                key={index}
                style={positions[index]}
                className="absolute z-0"
              >
                <FloatingImage
                  src={src}
                  alt={`Floating Image ${index + 1}`}
                  delay={`${(index + 1) * 3000}`}
                />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
