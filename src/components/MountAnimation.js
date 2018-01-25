/**
 * Created by HP on 22-Jan-18.
 */
import React from 'react';
import { Transition } from 'react-transition-group'

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
);

export default Fade;