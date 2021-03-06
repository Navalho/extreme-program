var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');
var _ = require('underscore');

var _user = {};

var IndexStore = _.extend({}, EventEmitter.prototype, {
    getUser: function() {
        return _user;
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
        case constants.GET_USER:
            _user = action.user;
            IndexStore.emit('change');
            break;
        case constants.SEND_REQUEST:
        case constants.SEND_REWARD:
            _user = action.data;
            break;
        default:
            return true;
    }
});

module.exports = IndexStore;
