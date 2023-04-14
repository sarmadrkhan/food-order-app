import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import img from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="Food on table" />
      </div>
    </Fragment>
  );
};

export default Header;
