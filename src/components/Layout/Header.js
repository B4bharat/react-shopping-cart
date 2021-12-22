// -------------- Libraries ----------------
import React from 'react';

// ---------------- components ----------------
import HeaderCartButton from './HeaderCartButton';

// -------------- Assets --------------------
import mealsImage from '../../assets/meals.jpg';

// ---------------- Styles ----------------
import classes from './Header.module.css';

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='meals' />
      </div>
    </React.Fragment>
  );
}

export default Header;
