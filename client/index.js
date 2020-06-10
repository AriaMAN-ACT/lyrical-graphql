import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';

import App from "./components/App";
import SongList from "./components/SongList";

const apolloClient = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache()
});

const Root = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <Router>
                <App>
                    <Switch>
                        <Route path="/">
                            <SongList/>
                        </Route>
                    </Switch>
                </App>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));