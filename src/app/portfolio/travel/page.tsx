import Layout from '@/app/components/Layout';
import Title from '@/app/components/Title';
import Link from 'next/link';
import Image from 'next/image';

const Travel: React.FC = () => {
    return (
        <Layout>
            <Title text="Travel" />

            <div className="px-20 max-w-[1920px] mx-auto mb-6">
                <Link
                    href="/portfolio"
                    className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors inline-block"
                >
                    ← Zurück zu Portfolio
                </Link>
            </div>

            <div className="px-20 max-w-[1920px] mx-auto grid grid-cols-12 gap-8 mb-16">
                <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
                    <Link href="/portfolio/travel/costarica/">
                        <Image
                            alt="animal"
                            src="/portfolio-page/images/Travel/CostaRica/DSC_3714-min.JPG"
                            width={820}
                            height={820}
                            className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
                        />
                        <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">
                            Costa Rica
                        </h2>
                    </Link>
                </div>
                <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
                    <Link href="/portfolio/travel/london/">
                        <Image
                            alt="travel"
                            src="/portfolio-page/images/Travel/London/IMG_1168-min.JPG"
                            width={820}
                            height={820}
                            className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
                        />
                        <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">
                            London
                        </h2>
                    </Link>
                </div>
                <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
                    <Link href="/portfolio/travel/maledives/">
                        <Image
                            alt="travel"
                            src="/portfolio-page/images/Travel/Maledives/DSC_8400-min.JPG"
                            width={820}
                            height={820}
                            className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
                        />
                        <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">
                            Maledives
                        </h2>
                    </Link>
                </div>
                <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
                    <Link href="/portfolio/travel/portugal/">
                        <Image
                            alt="travel"
                            src="/portfolio-page/images/Travel/Portugal/DSC_2216.jpg"
                            width={820}
                            height={820}
                            className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
                        />
                        <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">
                            Portugal
                        </h2>
                    </Link>
                </div>
                <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
                    <Link href="/portfolio/travel/schweiz/">
                        <Image
                            alt="travel"
                            src="/portfolio-page/images/Travel/Schweiz/85e08d53-fc02-4e53-b7bf-8cf8b44c4d42-min.jpg"
                            width={820}
                            height={820}
                            className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
                        />
                        <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">
                            Schweiz
                        </h2>
                    </Link>
                </div>
                <div className="col-span-4 bg-violet-100 aspect-square relative overflow-hidden rounded-lg">
                    <Link href="/portfolio/travel/tansania/">
                        <Image
                            alt="travel"
                            src="/portfolio-page/images/Travel/Tansania/DSC_0586-min.JPG"
                            width={820}
                            height={820}
                            className="aspect-square object-cover hover:scale-110 transition-all duration-1000 opacity-50 hover:opacity-100"
                        />
                        <h2 className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white drop-shadow-lg">
                            Tansania
                        </h2>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Travel;
