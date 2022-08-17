import React from 'react';
import styles from './NotFoundBlock.module.scss';

function NotFoundBLock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Корзина пустая
      </h1>
      <p className={styles.description}>
        К сожалени данная страница отсутсвует в нашем интернет магазине
      </p>
    </div>
  );
}

export default NotFoundBLock;
