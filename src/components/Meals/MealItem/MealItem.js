import React from 'react';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
