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
import {setLoadingElement, unsetLoadingElement, setModalOff} from '../actions/menuElements';
import {changingWeightModalMessage} from '../funcs/athlete';


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
        const newWeight = parseFloat(e.target.value);
        const validWeight =  Validator.validateWeight(newWeight, this.props.value);
        const errors = this.state.submissionErrors;
        setTimeout(() => {
            if (validWeight instanceof Error) {
                if(errors.indexOf(validWeight.message) === -1){
                    this.setState({submissionErrors : errors.concat(validWeight.message)});
                }
                return;
            }

            const modalMessage = changingWeightModalMessage(this.props.value, newWeight);

            this.props.updateAthlete({weight: e.target.value}, setLoadingElement.bind(null, 'activityForm'), unsetLoadingElement.bind(null, 'activityForm'))
                .then(() => {
                    this.props.setModalOff(modalMessage);
                });
            this.setState({submissionErrors : []})
        },2000);
    };


    render () {
        return (
            <div className={classNames('dashboard-element', this.props.extraClass)}>
                <p className="dashboard-element__text">{this.props.title}</p>
                <p className="dashboard-element__text">{this.props.subtitle}</p>
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
    loadingWeight : state.menuElements.loadingElements.activityForm
});

const mapDispatchToProps = dispatch => ({
    updateAthlete : (updates, before, after) => dispatch(updateAthlete(updates, before, after)),
    setModalOff : content => dispatch(setModalOff(content))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeightElement);