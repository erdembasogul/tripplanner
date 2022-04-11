import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import CityPhotos from "../../components/CityPhotos";
import TripBox from "../../components/TripBox";
import {
  selectBudget,
  selectSelectedCitiesList,
} from "../../redux/slices/tripSlice";
import { Plan } from "../../types/tripTypes";
import {
  createPlanDayAndCostString,
  createPlanPlanAndCostString,
} from "../../utils/generatePlanString";
import { generatePlans } from "../../utils/generateRoute";
import "./style.scss";

const TripPage = () => {
  //Selectors
  const budget = useSelector(selectBudget);
  const selectedCities = useSelector(selectSelectedCitiesList);

  const generatedPlans: Array<Plan[]> = generatePlans(budget, selectedCities);

  return (
    <>
      <Container>
        <div className="tripboxWrapper">
          <TripBox
            header={"Plan 1"}
            content={createPlanDayAndCostString(generatedPlans[0])}
            footer={createPlanPlanAndCostString(generatedPlans[0])}
          />
          <TripBox
            header={"Plan 2"}
            content={createPlanDayAndCostString(generatedPlans[1])}
            footer={createPlanPlanAndCostString(generatedPlans[1])}
          />
          <TripBox
            header={"Plan 3"}
            content={createPlanDayAndCostString(generatedPlans[2])}
            footer={createPlanPlanAndCostString(generatedPlans[2])}
          />
        </div>
        <div className="citiesPhotosWrapper">
          {generatedPlans[0].map((plan) => (
            <CityPhotos name={plan.name} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default TripPage;
