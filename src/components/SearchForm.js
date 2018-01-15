/**
 * Created by HP on 26-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {setText} from '../actions/filters';

/**
 * Represents a search form on the homepage
 * @param props
 * @constructor
 */
export const SearchForm = props =>(
    <div className="search-form">
        <input className="search-form__text form-control" type="text" placeholder={props.locality} onChange={e => props.setTextFilter(e.target.value)}/>
        <button onClick={() => props.history.push('/browse')} className="btn btn-default">SEARCH</button>
    </div>
);


const mapDispatchToProps = dispatch => ({
    setTextFilter : arg => dispatch(setText(arg)),
});

const mapStateToProps = state => ({
    locality : state.userData.locality
});

/**
 * Wrapper withRouter allows to access the history object (for redirects)
 */
const SearchFormWithRouter = withRouter(SearchForm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormWithRouter);