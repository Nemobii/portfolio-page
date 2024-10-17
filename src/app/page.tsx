import Gallery from "./components/Gallery";
import Layout from "./components/Layout";
import { getImages } from "@/app/utils/imageUtils";
import React from 'react';
import Quote from "./components/Quote";

const Home: React.FC = () => {
  const images = getImages("images/Animals");

  return (
    <Layout>
      <Quote />
      <div className="max-w-[1200px] mx-auto">
        <Gallery images={images} />
      </div>
    </Layout>
  );
};

export default Home;
