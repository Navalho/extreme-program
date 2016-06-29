var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var GoalsConstants = require('../constants/goalsConstants');
var _ = require('underscore');


var _goals = [],
    _goal = {};

var GoalsStore = _.extend({}, EventEmitter.prototype, {
    getGoals: function() {
        return _goals;
    },
    getGoal: function() {
        return _goal;
    },
    getGoalById: function(id) {
        var obj = {};

        _goals.forEach(function(goal) {

            if(goal._id === id) {
                obj = goal;
            }
        });

        return obj;
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case GoalsConstants.GET_GOALS:
            _goals = action.data;
            GoalsStore.emit('change');
            break;
        case GoalsConstants.GET_GOAL:
            _goal = action.data;
            GoalsStore.emit('change');
            break;

        default:
            return true;
    }
});

module.exports = GoalsStore;