import MealsSummary from "./MealSummary";
import AvailableMeal from "./AvailableMeal";
import { Fragment } from "react";

const Meals=()=>{
    return(
        <Fragment>
            <MealsSummary/>
            <AvailableMeal/>
        </Fragment>
    )

}
export default Meals