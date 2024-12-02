import Gallery from '@/app/components/Gallery';
import Layout from '@/app/components/Layout';
import Title from '@/app/components/Title';
import { getImages } from '@/app/utils/imageUtils';
import Link from 'next/link';

const CostaRica: React.FC = () => {
    const images = getImages("images/Travel/CostaRica");

    return (
        <Layout>
            <div className="mb-16">
                <Title text="Costa Rica" />

                {/* Back Button */}
                <div className="max-w-[1920px] mx-auto px-20 mb-6">
                    <Link
                        href="/portfolio/travel"
                        className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors inline-block"
                    >
                        ← Zurück zu Travel
                    </Link>
                </div>

                {/* Gallery */}
                <div className="max-w-[1920px] mx-auto px-20">
                    <Gallery images={images} />
                </div>
            </div>
        </Layout>
    );
};

export default CostaRica;
