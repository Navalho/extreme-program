var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var SigninConstants = require('../constants/signinConstants');
var _ = require('underscore');

var _user = {};

var SigninStore = _.extend({}, EventEmitter.prototype, {
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
        case SigninConstants.GET_USER:
            _user = action.user;
            SigninStore.emit('change');
            break;
        default:
            return true;
    }
});

module.exports = SigninStore;
