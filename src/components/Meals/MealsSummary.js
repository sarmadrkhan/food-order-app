import React from "react";
import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Shitty Food, Thrown At You</h2>
      <p>
        Grab the worst meal of your life from our extensive collection of exotic
        and local crap
      </p>
      <p>
        We put no effort in making our food; thus, we guarantee the absolute
        worst quality possible.
      </p>
      <p>
        <strong>P.S:</strong> You must pay in advance and we dont care about
        what happens to you afterwards
      </p>
    </section>
  );
};

export default MealsSummary;
