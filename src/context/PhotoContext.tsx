import { createContext, useState } from "react";
import { apiKey } from "../api/config";

// @ts-ignore
export const PhotoContext = createContext();

const PhotoContextProvider = (props: React.PropsWithChildren<{}>) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = (query: string) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then((response: any) => {
        console.log('fotos -> ',response)
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log("Encountered an error with fetching and parsing data", error);
      });
  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
