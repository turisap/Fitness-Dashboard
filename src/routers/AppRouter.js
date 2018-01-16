/**
 * Created by HP on 29-Nov-17.
 */
import {BrowserRouter} from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import Route from 'react-router-dom/Route';
import React from 'react';

import HomePage from '../components/pages/HomePage';
import ActivitiesPage from '../components/pages/ActivitiesPage';

const AppRouter = () => (
    <BrowserRouter>
            <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper">
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/activities" component={ActivitiesPage}/>
            </AnimatedSwitch>
    </BrowserRouter>
);


function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `translateX(${styles.translateX}%)`
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        translateX: 10,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        translateX: 10,
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        translateX: 0,
    },
};

export default AppRouter;