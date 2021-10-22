import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {createNetworkInterface} from "apollo-client";
import {ApolloProvider} from "react-Apollo";
import {Router, hashHistory, Route, IndexRoute} from "react-router";
import requireAuth from './components/requireAuth';
import App from "./components/App";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/registerform';
import Dashboard from './components/Dashboard';

const networkInterface=createNetworkInterface({
  uri: "/graphql",
  opts:{
    credentials: "same-origin"
  }
})
const client= new ApolloClient({
  networkInterface,
  dataIdFromObject: o=>o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
