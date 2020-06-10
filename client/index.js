import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

const apolloClient = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <div>Lyrical</div>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));