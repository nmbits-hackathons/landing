import React from "react";
import { useMemo } from "react";
import buttonStyles from '../styles/Button.module.css';

export enum ButtonTheme {
    DEFAULT = 'default',
    WHITE = 'white',
}

export interface ButtonProps {
    children: string;
    className?: string;
    onClick?: () => void;
    theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const theme = useMemo(() => props.theme ?? ButtonTheme.DEFAULT, [props.theme]);
    
    return <button onClick={props.onClick} className={[buttonStyles.button, buttonStyles[theme]].join(' ')}>{props.children}</button>
}