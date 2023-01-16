import React from 'react';
import styles from '../styles/Home.module.css';

export const NavButtons: React.FC = () => {
    return (
        <div className={styles.navButtons}>
            <div onClick={() => window.location.href = "#products"} className={styles.navButton}>
                Услуги
            </div>
            <div className={styles.navButton}>
                Кейсы
            </div>
            <div className={styles.navButton}>
                Процесс
            </div>
            <div className={styles.navButton}>
                FAQ
            </div>
      </div>
    )
}