// utils/imageUtils.ts
import fs from 'fs';
import path from 'path';

export const getImages = (subDirectory: string): string[] => {
    const imagesDirectory = path.join(process.cwd(), 'public', subDirectory);
    const imageFiles = fs.readdirSync(imagesDirectory);
    
    // Return the full path for each image
    return imageFiles.map(file => `portfolio-page/${subDirectory}/${file}`);
};
