import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Title from "../components/Title";

export default function Page() {
  return (
    <Layout>
      <Title text="Portfolio" />
      <div className="px-4 sm:px-10 lg:px-20 max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
        {/* Animals */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/animals/">
            <Image
              alt="animal"
              src="/portfolio-page/images/Animals/DSC_0763.jpg"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-4xl">
              Animals
            </h2>
          </Link>
        </div>

        {/* Travel */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/travel/">
            <Image
              alt="travel"
              src="/portfolio-page/images/Travel/Portugal/DSC_5400.jpg"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-4xl">
              Travel
            </h2>
          </Link>
        </div>

        {/* Portrait */}
        <div className="bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/portrait/">
            <Image
              alt="portrait"
              src="/portfolio-page/images/Portrait/DSC_6552-min.JPG"
              width={820}
              height={820}
              className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
            />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg text-lg sm:text-xl lg:text-4xl">
              Portrait
            </h2>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
