import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSelectedCitiesList,
  removeFromSelectedCitiesList,
  selectSelectedCitiesList,
} from "../../redux/slices/tripSlice";
import { getPhoto } from "../../services/photoService";
import { City, PexelPhotoResult } from "../../types/tripTypes";
import { get } from "../../utils/httpHelper";
import "./style.scss";

interface CityCardProps {
  city: City;
}

const CityCard = ({ city }: CityCardProps) => {
  const dispatch = useDispatch();
  const selectedCities = useSelector(selectSelectedCitiesList);
  const [isSelected, setIsSelected] = useState(false);
  const [photo, setPhoto] = useState("");

  const handleClick = () => {
    if (!isSelected) {
      setIsSelected(true);
      dispatch(addToSelectedCitiesList(city));
    } else {
      setIsSelected(false);
      dispatch(removeFromSelectedCitiesList(city));
    }
  };

  useEffect(() => {
    const getPhotoFunc = async () => {
      let photoResult = await getPhoto(city.name, 1);
      setPhoto(city.name == "paris" ? photoResult[3].src.medium : photoResult[0].src.medium);
    };

    getPhotoFunc();
  }, []);

  useEffect(() => {
    if(selectedCities.filter(c => c.id == city.id)[0]) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedCities]);

  return (
    <div
      className={`cityCard ${isSelected && "cityCard-selected"}`}
      onClick={() => handleClick()}
    >
      <div className="cityCard--img">
        <img src={photo} />
      </div>
      <div className="cityCard--footer">
        <span>{city.name}</span>
        <span>{`${city.cost} ₺`}</span>
      </div>
    </div>
  );
};

export default CityCard;
