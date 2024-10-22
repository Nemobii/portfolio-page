import Link from "next/link";
import Layout from "../components/Layout";
import Image from 'next/image'
import Title from "../components/Title";

export default function Page() {
    return (
      <Layout>
        <Title text="Portfolio" />
        <div className="px-20 max-w-[1920px] mx-auto grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/animals/">
            <Image alt="animal" src="/portfolio-page/images/Animals/DSC_0763.jpg" width={820} height={820} className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100" />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">Animals</h2>
            </Link>
          </div>
          <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/travel/">
            <Image alt="travel" src="/portfolio-page/images/Travel/Portugal/DSC_5400.jpg" width={820} height={820} className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100" />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">Travel</h2>
            </Link>
          </div>
          <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
          <Link href="/portfolio/portrait/">
            <Image alt="animal" src="/portfolio-page/images/Portrait/DSC_6552-min.JPG" width={820} height={820} className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100" />
            <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">Portrait</h2>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }