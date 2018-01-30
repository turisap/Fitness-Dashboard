/**
 * Created by HP on 22-Jan-18.
 */
import React from 'react';
import { Transition, CSSTransition } from 'react-transition-group'

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

const Fade = ({children, in: inProp }) => (
    <div className="nothingWasFound">
        <Transition in={inProp} timeout={duration}>
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {children}
                </div>
            )}
        </Transition>
    </div>
);

export const Animation = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);

export default Fade;