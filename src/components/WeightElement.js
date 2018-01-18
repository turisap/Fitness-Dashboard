/**
 * Created by HP on 18-Jan-18.
 */
import classNames from 'classnames';
import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Validator from '../validators/InputDataValidator';
import SimpleElement from './SimpleElement';
import {updateAthlete} from '../actions/user';
import {changedWeight, changingWeight} from '../actions/menuElements';


class WeightElement extends React.Component {

    state = {
        submissionErrors : [],
    };

    /**
     * Evaluetes user's input and sets errors accordingly
     * @param e
     */
    changeMyWeight = e => {
        e.persist();
        const validWeight =  Validator.validateWeight(e.target.value);
        const errors = this.state.submissionErrors;
        setTimeout(() => {
            if (validWeight instanceof Error) {
                if(errors.indexOf(validWeight.message) === -1){
                    this.setState({submissionErrors : errors.concat(validWeight.message)});
                }
                return;
            }
            this.props.updateAthlete({weight: e.target.value}, changingWeight, changedWeight);
            this.setState({submissionErrors : []})
        },1000);
    };


    render () {
        return (
            <div className={classNames('dashboard-element', {'square' : this.props.square})} style={{border: 'red 1px solid'}}>
                <SimpleElement {...this.props}/>
                <Input
                    loading={this.props.loadingWeight}
                    onChange={this.changeMyWeight}
                    placeholder='Have lost sth?'
                    error={!!this.state.submissionErrors.length}
                />
                {this.state.submissionErrors.length > 0 && this.state.submissionErrors.map(err => <p key={err}>{err}</p>)}
            </div>
        )
    }
}



const mapStateToProps = state => ({
    loadingWeight : state.menuElements.loadingChangingWeight
});

const mapDispatchToProps = dispatch => ({
    updateAthlete : (updates, before, after) => dispatch(updateAthlete(updates, before, after))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeightElement);