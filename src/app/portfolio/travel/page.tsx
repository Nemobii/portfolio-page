import Gallery from '@/app/components/Gallery';
import Layout from '@/app/components/Layout';
import { getImages } from '@/app/utils/imageUtils';


const Travel: React.FC = () => {
    const images = getImages("images/projects/project-01");

    return (
        <Layout>
            <div className='max-w-[1200px] mx-auto'>
            <Gallery images={images} />
            </div>    
        </Layout>
    );
};

export default Travel;
