import Gallery from '@/app/components/Gallery';
import Layout from '@/app/components/Layout';
import Title from '@/app/components/Title';
import { getImages } from '@/app/utils/imageUtils';


const Tansania: React.FC = () => {
    const images = getImages("images/Travel/Tansania");

    return (
        <Layout>
            <div className='mb-16'>
                <Title text="Tansania" />
                <div className='max-w-[1920px] mx-auto px-20'>
                    <Gallery images={images} />
                </div>
            </div>    
        </Layout>
    );
};

export default Tansania;
