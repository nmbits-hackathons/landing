import React from "react";
import styles from '../styles/Home.module.css';
import { Button } from "./Button";
import { Text } from "./Text";
import { Title } from "./Title";

export const Form: React.FC = () => {
    return (
        <div className={styles.form}>
            <div className={styles.inputsGroup}>
                <input placeholder="Имя" />
                <input placeholder="Телефон" />
            </div>
            <div className={styles.inputsGroup}> 
                <textarea placeholder="Расскажите подробнее о своём проекте" />
            </div>
            <div className={styles.inputsGroup}> 
                <div className={styles.checkBox}>
                    <input id="personal-data" type="checkbox" />
                    <label htmlFor="personal-data">
                        <Text variant="bodyM">Согласие на обработку <a className={styles.link}>персональных данных</a></Text>
                    </label>
                </div>
                <Button>Отправить</Button>
            </div>
        </div>
    );
}