import { Plan } from "../types/tripTypes";

export const createPlanDayAndCostString = (resultingCities: Plan[]) => {
    let planStr = "";
    let totalCost = 0;
    for (let i = 0; i < resultingCities.length; i++) {
        planStr += resultingCities[i].days;
        resultingCities[i].days === 1 ? planStr += " gün " : planStr += " gün ";
        planStr += resultingCities[i].name + " (" + resultingCities[i].cost + " ₺)";
        totalCost += resultingCities[i].cost;
        if (i !== resultingCities.length - 1) planStr += " + ";
    }
    planStr += " = " + totalCost + " ₺";
    return planStr;
}

export const createPlanPlanAndCostString = (resultingCities: Plan[]) => {
    let totalCost = 0;
    let totalDays = 0;
    for (let i = 0; i < resultingCities.length; i++) {
        totalCost += resultingCities[i].cost;
        totalDays += resultingCities[i].days;
    }
    return totalDays + " gün, " + totalCost + " ₺";
}