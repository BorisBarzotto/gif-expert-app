import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/getGifs.js";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category) => {
    const newImg = await getGifs(category);
    setImages(newImg);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading
  };
};
