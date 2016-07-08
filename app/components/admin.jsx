var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Index = require('./admin/index.jsx');
var UsersManagement = require('./admin/users/userList.jsx');
var UserDetailManagement = require('./admin/users/userDetail.jsx');
var RewardsManagement = require('./admin/rewards/rewardsList.jsx');
var RewardDetailManagement = require('./admin/rewards/rewardDetail.jsx');

var Admin = React.createClass({
    render: function() {
        return(
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={Index}>
                        <Route path="/users" component={UsersManagement} />
                        <Route path="users/:id" component={UserDetailManagement} />
                        <Route path="/rewards" component={RewardsManagement} />
                        <Route path="/rewards/:id" component={RewardDetailManagement} />
                    </Route>
                </Router>
            </div>
        );
    }
})

ReactDOM.render(<Admin />, document.getElementById('admin'));
