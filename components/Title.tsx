import React, { ReactNode } from "react";

export interface TitleProps {
    variant: "title1" | 'title2' | 'subtitle1' | 'subtitle2' | 'subtitle3';
    children: ReactNode;
    className?: string;
}

export const Title: React.FC<TitleProps> = (props) => {
    const Tag: any = {
        "title1": 'h1',
        "title2": 'h2',
        "title3": 'h3',
        "subtitle1": 'h4',
        "subtitle2": 'h5',
        "subtitle3": 'h6'
    }[props.variant];
    
    return <Tag className={props.className}>{props.children}</Tag>
}