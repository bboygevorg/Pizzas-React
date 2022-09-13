import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/notFoundBLock/NotFoundBlock.module.scss';
import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h1>
        <span>😕</span>
        <br />
        Корзина пустая
      </h1>
      <p className={styles.description}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу. Перейди на
        главную страницу
      </p>
      <img src={cartEmptyImg} alt="Emty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
