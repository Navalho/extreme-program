var AppDispatcher = require('../dispatcher/dispatcher');
var GoalsConstants = require('../constants/goalsConstants');
var $ = require('jquery');


//TODO: pass url as argument to getGoals function
var GoalsActions = {
    getGoals: function() {
        $.getJSON('/api/goals', function(data) {
            console.log(data);
            AppDispatcher.handleAction({
                actionType: GoalsConstants.GET_GOALS,
                data: data
            });
        });
    }
};

module.exports = GoalsActions;
