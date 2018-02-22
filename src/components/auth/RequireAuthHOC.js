/**
 * Created by HP on 19-Jan-18.
 */
import React from 'react';
import {connect} from 'react-redux';

import NavBar from '../NavBar';
import Footer from '../Footer';


export default (ComposedComponent) => {
    class Authentication extends React.Component {

        /**
         * If user isn't authenticated, redirect him on component mount
         */
        /*componentWillMount() {
            if(!this.props.authenticated) {
                this.props.history.push('/');
            }
        }*/


        /**
         * Renders a passed component (pages which require authentication in this case)
         * @returns {XML}
         */
        render() {
            return (
                <div className="wrapper">
                    <ComposedComponent {...this.props}/>
                </div>
            )
        }
    }

    const mapStateToProps = state => ({
        authenticated : state.userData.access_token
    });


    return connect(mapStateToProps, undefined)(Authentication);
}