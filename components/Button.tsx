import React from "react";
import buttonStyles from '../styles/Button.module.css'

export interface ButtonProps {
    children: string;
    className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
    return <button className={buttonStyles.button}>{props.children}</button>
}