import { Plan } from '../types/tripTypes';
import { City } from "../types/tripTypes";

var sumArr: Plan[] = [];

const backtrackHelper = (i: number, sum: number, target: number, plan: Plan[]): number => {
    let clonedPlan = JSON.parse(JSON.stringify(plan))
    const planCities = clonedPlan.filter((c: Plan) => c.days > 0);
    sumArr[sum] = planCities;

    if (sum > target) {
        return 0;
    }
    if (i === plan.length) {
        return sum;
    }
    plan[i].days++;
    const pick: number = backtrackHelper(i + 1, sum + plan[i].cost, target, plan);

    plan[i].days--;
    const leave: number = backtrackHelper(i + 1, sum, target, plan);

    if (pick > leave) {
        return pick;
    }

    return leave;
}

const editCityObjArray = (cityArr: Plan[]) => {
    return Array.from(cityArr.reduce((acc, { cost, days, ...r }) => {
        const key = JSON.stringify(r);
        const current = acc.get(key) || { ...r, cost: 0, days: 0 };
        return acc.set(key, { ...current, cost: current.cost + cost, days: current.days + days });
    }, new Map()).values());
}

const getTotalCostOf = (selectedCities: City[]) => {
    let totalCost = 0;
    for (let i = 0; i < selectedCities.length; i++) {
        totalCost += selectedCities[i].cost;
    }
    return totalCost;
}

export const generatePlans = (budget: number, selectedCities: City[]) => {
    let firstPlan: Plan[] = selectedCities.map(obj => ({ ...obj, days: 0 }));
    let minCityCost = Math.min(...selectedCities.map(c => c.cost));
    let maxCityCost = Math.max(...selectedCities.map(c => c.cost));

    let secondPlan = firstPlan.filter((city) => city.cost !== maxCityCost).map(obj => ({ ...obj, days: 0 }));

    let firstPlanCities = generatePlanHelper(budget, firstPlan, minCityCost);

    let totalCost = getTotalCostOf(selectedCities);
    let secondPlanCities1 = generatePlanHelper(budget - totalCost, secondPlan, minCityCost);
    let secondPlanCities2 = generatePlanHelper(totalCost, firstPlan, minCityCost);
    let secondPlanCities = editCityObjArray([...secondPlanCities1, ...secondPlanCities2]);

    let thirdPlanCities = generatePlanHelper(budget, secondPlan, minCityCost);

    return [[...firstPlanCities], [...secondPlanCities], [...thirdPlanCities]];
}

const generatePlanHelper = (budget: number, plan: Plan[], minCityCost: number) => {
    let spentSoFar = 0;
    let resultingCities: Plan[] = [];

    while (true) {
        let spent = backtrackHelper(0, 0, budget - spentSoFar, plan);
        //@ts-ignore
        resultingCities = [...resultingCities, ...sumArr[spent]];
        spentSoFar += spent;

        if ((budget - minCityCost < spentSoFar) && (spentSoFar <= budget))
            break;
    }

    return editCityObjArray(resultingCities);
}