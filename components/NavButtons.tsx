import React from 'react';
import styles from '../styles/Home.module.css';

export const NavButtons: React.FC = () => {

    const handleClickScroll = (id: string) => () => {
        const element = document.getElementById(id);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className={styles.navButtons}>
            <div onClick={handleClickScroll('products')} className={styles.navButton}>
                Услуги
            </div>
            <div className={styles.navButton}>
                Кейсы
            </div>
            <div onClick={handleClickScroll('processes')} className={styles.navButton}>
                Процесс
            </div>
            <div onClick={handleClickScroll('faq')} className={styles.navButton}>
                FAQ
            </div>
      </div>
    )
}