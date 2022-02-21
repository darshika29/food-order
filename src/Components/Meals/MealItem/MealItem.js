import classes from '../MealItem/MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem=(props)=>{
    const cost = `${props.price.toFixed(2)}`
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.discription}>{props.discription}</div>
                <div className={classes.price}>{cost}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    )

};
export default MealItem