"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var Test1 = require('./testPage');


Router.run(routes, /* Router.HistoryLocation, */ function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});

React.render(<Test1/>, document.getElementById('myTest'));