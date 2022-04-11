import React, { useEffect, useState } from "react";
import { getPhoto } from "../../services/photoService";
import { PexelPhotoResult } from "../../types/tripTypes";
import "./style.scss";

interface CityPhotosProps {
  name: string;
}

const CityPhotos = ({ name }: CityPhotosProps) => {

    const [photos, setPhotos] = useState<PexelPhotoResult[]>([]);

  useEffect(() => {
    const getCitiesPhotoes = async () => {
      let res = await getPhoto(name, 3);
      setPhotos(res)
    };

    getCitiesPhotoes()
  }, []);

  return (
    <div className="citiesPhotos">
        <span className="citiesPhotos--title">{name}</span>
        <div className="citiesPhotos--images">
            <img src={photos[0]?.src?.medium} />
            <img src={photos[1]?.src?.medium} />
            <img src={photos[2]?.src?.medium} />
        </div>
      </div>
  );
};

export default CityPhotos;
