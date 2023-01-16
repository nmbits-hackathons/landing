import React from "react";
import buttonStyles from '../styles/Button.module.css'

export interface ButtonProps {
    children: string;
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
    return <button onClick={props.onClick} className={buttonStyles.button}>{props.children}</button>
}