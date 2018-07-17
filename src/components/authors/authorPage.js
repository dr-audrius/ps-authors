"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorApi = require('../../api/authorApi.js');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({

    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentDidMount: function () {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    },

    render: function () {
        return (
            <div> 
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <Link to="testForm" className="btn btn-default">Link directly to form page</Link>
                {<AuthorList authors={this.state.authors} />}

            </div>
        );


    }
});

module.exports = AuthorPage;