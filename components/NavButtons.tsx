import React from 'react';
import styles from '../styles/Home.module.css';
import { handleClickScroll } from '../utils';

export const NavButtons: React.FC<{ className?: string }> = (props) => {

    return (
        <div className={[styles.navButtons, props.className].join(' ')}>
            <div onClick={handleClickScroll('products')} className={styles.navButton}>
                Услуги
            </div>
            <div onClick={handleClickScroll('cases')} className={styles.navButton}>
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