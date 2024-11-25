import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // Con este useEffect solo se llama al inicio de creación del componente
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
