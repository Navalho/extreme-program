var React = require('react');
var Goal = require('./goalListItem.jsx');
var GoalsStore = require('../../stores/GoalsStore');
var GoalsActions = require('../../actions/goalsActions');


var GoalList = React.createClass({
    getInitialState: function(){
        return {
            goals: []
        }
    },
    componentWillMount: function() {
        GoalsActions.getGoals('/api/goals');
        GoalsStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        GoalsStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(
            this._getState()
        );
    },
    _getState: function() {
        return {
            goals: GoalsStore.getGoals()
        }
    },
    render: function() {
        return (
            <div id="goal-list" className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="goal-list-title">Goals</h2>
                        <p className="goal-list-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {this.state.goals.map(function(goal, index) {
                        return (
                            <Goal key={index} goal={goal} />
                        )
                    })}
                </div>
            </div>
        );
    }
});

module.exports = GoalList;
