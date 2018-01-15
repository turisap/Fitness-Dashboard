/**
 * Created by HP on 27-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux'
import {signUserOut} from '../../actions/userData';


/**
 * This component shows by-by message on user sign out
 */
class SignOut extends React.Component {

    /**
     * Signing out user and redirecting to the homepage
     */
    componentDidMount() {
        if (!this.props.authenticated) this.props.history.push('/');
        this.props.signOut();
        setTimeout(() => {
            this.props.history.push('/');
        }, 3000)
    }

    render() {
        return (
            <div className="signout">
                <h1 className="signout__heading">Sory to see you go</h1>
                <p>We hope to see you again soon!</p>
            </div>
        )
    }
}


/**
 * Mapping authenticated flag and signout dispatcher to props
 * @param state
 */
const mapStateToProps = state => ({
    authenticated : state.userData.authenticated,
});

const mapDispatchToProps = dispatch => ({
    signOut : () => dispatch(signUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);