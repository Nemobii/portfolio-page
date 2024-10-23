import Gallery from '@/app/components/Gallery';
import Layout from '@/app/components/Layout';
import Title from '@/app/components/Title';
import { getImages } from '@/app/utils/imageUtils';


const Animals: React.FC = () => {
    const images = getImages("images/Animals");

    return (
        <Layout>
            <div className='mb-16'>
                <Title text="Animals" />
                <div className='max-w-[1920px] mx-auto px-20'>
                    <Gallery images={images} />
                </div>
            </div>    
        </Layout>
    );
};

export default Animals;
