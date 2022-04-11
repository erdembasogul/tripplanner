import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CityCard from "../../components/CityCard";
import Button from "../../components/commons/CustomButton/Button";
import {
  selectBudget,
  selectCitiesAndPrices,
  selectSelectedCitiesList,
  setBudget,
  addToSelectedCitiesList,
  removeFromSelectedCitiesList,
  emptySelectedCitiesList,
} from "../../redux/slices/tripSlice";
import { City } from "../../types/tripTypes";

//Style Imports
import "./style.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBudget(0));
    dispatch(emptySelectedCitiesList())
  },[])

  //Selectors
  const budget = useSelector(selectBudget);
  const selectedCities = useSelector(selectSelectedCitiesList);
  const citiesAndPrices = useSelector(selectCitiesAndPrices);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBudget(e.target.value.replace(/[^0-9]+/, "")));
  };

  const handleRemoveCity = (city: City) => {
    dispatch(removeFromSelectedCitiesList(city));
  };

  return (
    <Container>
      <div className="homePage">
        <div className="homePage--top">
          <span>Bütçeniz</span>
          <input type={"text"} onChange={handleBudgetChange} value={budget} />
          <Link to="/test">
            <Button title="Seyahat Planla" color={"white"} disabled={selectedCities.length < 3 || budget == 0}/>
          </Link>
        </div>

        <div className="selectedCityWrapper">
          {selectedCities?.map((city) => (
            <div className="selectedCityWrapper--selectedCity" key={city.id}>
              {city.name}
              <span onClick={() => handleRemoveCity(city)}>X</span>
            </div>
          ))}
        </div>

        <div className="homePage--cityWrapper">
          {citiesAndPrices.map((cityNPrice) => (
            <CityCard city={cityNPrice} key={cityNPrice.id}/>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
