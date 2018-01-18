/**
 * Created by HP on 18-Jan-18.
 */
import classNames from 'classnames';
import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Validator from '../validators/InputDataValidator';
import SimpleElement from './SimpleElement'




class WeightElement extends React.Component {

    state = {
        submissionErrors : [],
    };

    changeMyWeight = e => {
        const validWeight =  Validator.validateWeight(e.target.value);
        const errors = this.state.submissionErrors;
        setTimeout(() => {
            if (validWeight instanceof Error) {
                if(errors.indexOf(validWeight.message) === -1){
                    this.setState({submissionErrors : errors.concat(validWeight.message)});
                }
                return;
            }
            this.setState({submissionErrors : []})
        },1000)
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
                {this.state.submissionErrors.length > 0 && this.state.submissionErrors.map(err => <p>{err}</p>)}
            </div>
        )
    }
}



const mapStateToProps = state => ({
    loadingWeight : state.menuElements.loadingChangingWeight
});

export default connect(mapStateToProps, undefined)(WeightElement);