import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBLock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        нет результата
      </h1>
      <p className={styles.description}>
        К сожалени данная страница отсутсвует в нашем интернет магазине
      </p>
    </div>
  );
};

export default NotFoundBLock;
