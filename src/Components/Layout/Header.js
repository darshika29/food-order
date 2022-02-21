import React, { Fragment } from "react";
import coverimg from '../../assets/Zomato.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header=()=>{
    return(
    <Fragment>
        <header className={classes.header}>
            <h1>Zomato</h1>
            <HeaderCartButton>Cart</HeaderCartButton>

        </header>
        {/* we can't use dot notation here in accessing css class because it has - in name */}
        <div className={classes['main-image']}>
            <img src={coverimg} alt='Zomato food at your door step!' />


        </div>

    </Fragment>)
};
export default Header