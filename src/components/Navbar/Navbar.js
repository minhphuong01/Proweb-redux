import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let count = 0;
    let price = 0;
    cart.forEach((item) => {
      count += item.qty;
      price += item.qty * item.price;
    });

    setCartCount(count);
    setTotalPrice(price);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>GlassyZone</h2>
      </Link>
      <Link to="profile">
        <div className={styles.navbar__profile}>
          <h1 className={styles.navbar__profile}>Profile</h1>
           
        </div>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://icon-library.com/images/cart-icon-png/cart-icon-png-4.jpg"
            alt="shopping cart"
          />
          <span> {totalPrice} đ </span>
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
