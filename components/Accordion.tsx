import React, { ReactNode, useCallback, useState } from "react";
import { Text } from "./Text";
import accordionStyles from '../styles/Accordion.module.css'
import ArrowSvg from '../static/arrow.svg';

export enum AccordionState {
    HIDDEN = 0,
    EXPANDED = 1,
}

export interface AccordionProps {
    title: ReactNode;
    content?: ReactNode;
    initialState?: AccordionState;
}

export const Accordion: React.FC<AccordionProps> = (props) => {
    const [state, setState] = useState<AccordionState>(props.initialState ?? AccordionState.HIDDEN);

    const handleSwitchState = useCallback(() => {
        setState(
            state === AccordionState.HIDDEN ? 
                AccordionState.EXPANDED : 
                AccordionState.HIDDEN
        );
    }, [state]);

    return (
        <div className={accordionStyles.accordion}>
            <div className={accordionStyles.accordionTitle} onClick={handleSwitchState}>
                <Text variant="bodySemiboldL">{props.title}</Text>
                <div className={`${accordionStyles.arrow} ${state === AccordionState.HIDDEN ? accordionStyles.hidden : accordionStyles.showing}`}>
                    <ArrowSvg />
                </div>
            </div>
            {state === AccordionState.EXPANDED ? (
                <div>
                    <Text variant="bodyM">{props.content}</Text>
                </div>
            ) : null}
        </div>
    )
}