const express = require('express');
const expressGraphQL = require('express-graphql');

const webpackMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser');

const schema = require('./schema');

const app = express();

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;