var AppDispatcher = require('../dispatcher/dispatcher');
var GoalsConstants = require('../constants/goalsConstants');
var $ = require('jquery');


var GoalsActions = {
    getGoals: function(url) {
        $.getJSON(url, function(data) {
            AppDispatcher.handleAction({
                actionType: GoalsConstants.GET_GOALS,
                data: data
            });
        });
    },
    getGoal: function(url) {
        $.getJSON(url, function(data) {
            AppDispatcher.handleAction({
                actionType: GoalsConstants.GET_GOAL,
                data: data
            });
        });
    }
};

module.exports = GoalsActions;
