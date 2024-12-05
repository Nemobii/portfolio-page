import Layout from "@/app/components/Layout";
import Title from "@/app/components/Title";
import Link from "next/link";
import Image from "next/image";

const Travel: React.FC = () => {
  return (
    <Layout>
      <Title text="Travel" />

      {/* Back Button */}
      <div className="px-4 sm:px-10 lg:px-20 max-w-[1920px] mx-auto mb-6">
        <Link
          href="/portfolio"
          className="bg-gray-500 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-gray-600 transition-colors inline-block text-sm sm:text-base"
        >
          ← Zurück zu Portfolio
        </Link>
      </div>

      {/* Grid Gallery */}
      <div className="px-4 sm:px-10 lg:px-20 max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
        {/* Costa Rica */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/travel/costarica/">
            <Image
              alt="Costa Rica"
              src="/portfolio-page/images/Travel/CostaRica/DSC_3714-min.JPG"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-2xl">
              Costa Rica
            </h2>
          </Link>
        </div>

        {/* London */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/travel/london/">
            <Image
              alt="London"
              src="/portfolio-page/images/Travel/London/IMG_1168-min.JPG"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-2xl">
              London
            </h2>
          </Link>
        </div>

        {/* Maledives */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/travel/maledives/">
            <Image
              alt="Maledives"
              src="/portfolio-page/images/Travel/Maledives/DSC_8400-min.JPG"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-2xl">
              Maledives
            </h2>
          </Link>
        </div>

        {/* Portugal */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/travel/portugal/">
            <Image
              alt="Portugal"
              src="/portfolio-page/images/Travel/Portugal/DSC_2216.jpg"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-2xl">
              Portugal
            </h2>
          </Link>
        </div>

        {/* Schweiz */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/travel/schweiz/">
            <Image
              alt="Schweiz"
              src="/portfolio-page/images/Travel/Schweiz/85e08d53-fc02-4e53-b7bf-8cf8b44c4d42-min.jpg"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-2xl">
              Schweiz
            </h2>
          </Link>
        </div>

        {/* Tansania */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/travel/tansania/">
            <Image
              alt="Tansania"
              src="/portfolio-page/images/Travel/Tansania/DSC_0586-min.JPG"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-2xl">
              Tansania
            </h2>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Travel;
