import React from "react";
import styles from '../styles/Text.module.css';

export interface TextProps {
    variant: "bodySemiboldL" | "bodyM" | "bodySemiboldM" | "bodySemiboldS" | "bodySemiboldXL" | "bodyL";
    children: React.ReactNode;
    className?: string;
}

export const Text: React.FC<TextProps> = (props) => {    
    return (
        <div className={styles[props.variant] + ' ' + props.className}>
            {props.children}
        </div>
    )
}