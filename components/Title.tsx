import React from "react";

export interface TitleProps {
    variant: "title1" | 'title2';
    children: string;
    className?: string;
}

export const Title: React.FC<TitleProps> = (props) => {
    const Tag: any = {
        "title1": 'h1',
        "title2": 'h2',
    }[props.variant];
    
    return <Tag className={props.className}>{props.children}</Tag>
}