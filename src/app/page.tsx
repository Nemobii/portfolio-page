// app/page.tsx
import React from "react";
import Gallery from "./components/Gallery";
import Layout from "./components/Layout";
import { getImages } from "@/app/utils/imageUtils";

const Home: React.FC = () => {
  const images = getImages("images/gallery");

  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto">
        <Gallery images={images} />
      </div>
    </Layout>
  );
};

export default Home;
