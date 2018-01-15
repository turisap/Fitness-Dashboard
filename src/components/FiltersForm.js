/**
 * Created by HP on 24-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {LinkedComponent} from 'valuelink';
import {Input} from 'valuelink/tags';
import classNames from 'classnames';

import * as actions from '../actions/filters';



/**
 * Represents filters form (on the Browse page)
 */
export class FiltersForm extends LinkedComponent {

    /**
     * This state is solely for controlling custom input
     * And also for controlling active tab the filter menu
     * @type {{location: string}}
     */
    state = {
        location : '',
        activeTab: [false, false, false, false],
    };

    /**
     * List of all filters apart categories
     * @type {{types: [*], dates: [*], prices: [*]}}
     */
    filters = {
        types      : ['class', 'seminar', 'seminar', 'expo', 'party', 'conference',
            'networking', 'rally', 'game', 'retreat', 'gala'],
        dates : ['today', 'tomorrow', 'this week', 'this friday', 'this weekend', 'next week', 'this month'],
        prices: ['all prices', 'paid', 'free']
    };

    /*
      * Gets list of categories from API
     */
    componentDidMount() {
       this.props.getCategories();
    }


    /**
     * Tobgles active state of a tab basing on it's number in array
     * @param tab
     */
    handleClick (tab) {
        this.setState(oldState => ({
            activeTab : oldState.activeTab.map((t,i) => {
                return i === tab ? !oldState.activeTab[i] : false;
            })
        }))
    }


    render(){
        return (
            <div id="filterForm">
                <Input type="text"
                       className="form-control form-control-lg filterForm__text-input"
                       placeholder={this.props.userData.locality}
                       valueLink={this.linkAt('location')}
                       onBlur={(e) => this.props.setLocation(e.target.value)}/>
                <div className="filterForm__filter">
                    <div className="filterForm__group" onClick={this.handleClick.bind(this,0)}>Categories</div>
                        <div className={classNames('filterForm__slide test', {'filterForm--active' : this.state.activeTab[0]})}>
                            {this.props.categories.map((category, i) => (
                                <div
                                    className="filterForm__control control-category"
                                    onClick={() => this.props.setCategory(category)}
                                    key={i}>
                                    {category.name}
                                </div>
                            ))}
                        </div>
                </div>
                <div className="filterForm__filter">
                    <div className="filterForm__group" onClick={this.handleClick.bind(this,1)}>Event Type</div>
                    <div className={classNames('filterForm__slide', {'filterForm--active' : this.state.activeTab[1]})}>
                        {this.filters.types.map((filter, i) => (
                            <div
                                className="filterForm__control control-type"
                                onClick={() => this.props.setType(filter)}
                                key={i}>
                                {filter}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="filterForm__filter">
                    <div className="filterFrom__group" onClick={this.handleClick.bind(this,2)}>Price</div>
                    <div className={classNames('filterForm__slide', {'filterForm--active' : this.state.activeTab[2]})}>
                        {this.filters.prices.map((pr, i) => (
                            <div key={i} className="filterForm__control control-price" onClick={() => this.props.setPrice(pr)}>{pr}</div>
                        ))}
                    </div>
                </div>
                <div className="filterForm__filter">
                    <div className="filterForm__group"  onClick={() => this.handleClick(3)}>Date</div>
                    <div className={classNames('filterForm__slide', {'filterForm--active' : this.state.activeTab[3]})}>
                        <div className="filterForm__control control-time" onClick={() => this.props.setToday()}>Today</div>
                        <div className="filterForm__control control-time" onClick={() => this.props.setTomorrow()}>Tomorrow</div>
                        <div className="filterForm__control control-time" onClick={() => this.props.setThisFriday()}>This Friday</div>
                        <div className="filterForm__control control-time" onClick={() => this.props.setThisWeek()}>This Week</div>
                        <div className="filterForm__control control-time" onClick={() => this.props.setThisWeekend()}>This Weekend</div>
                        <div className="filterForm__control control-time" onClick={() => this.props.setNextWeek()}>Next Week</div>
                        <div className="filterForm__control control-time" onClick={() => this.props.setThisMonth()}>This Month</div>
                    </div>
                </div>
            </div>
        )
    }
}



/**
 * Mapping categories of events and user's data object to props
 * @param state
 */
const mapStateToProps = state => ({
    categories   : state.filters.allCategories,
    userData     : state.userData
});


/**
 * There were to many actions to write them all, so I looped over the action object
 * filling the dispatcher object with key-value pairs and returning it in the end
 * @param dispatch
 * @returns {{}}
 */
const mapDispatchToProps = dispatch => {
    const dispatchers = {};

    Object.keys(actions).forEach(action => {
        dispatchers[action] = (arg) => dispatch(actions[action](arg));
    });

    return dispatchers;
};


export default connect(mapStateToProps, mapDispatchToProps)(FiltersForm)

