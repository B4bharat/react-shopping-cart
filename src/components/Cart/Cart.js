import React from 'react';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-item']}>
      {[
        { id: 'c1', name: 'Coffee', price: 2.5 },
        { id: 'c2', name: 'Tea', price: 2.5 },
      ].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$5.00</span>
      </div>
      <div className={classes.acttions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
