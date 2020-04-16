import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import Home from 'pages/home';

const Another = (props: RouteComponentProps) => <div>Another Page</div>;


const App = () => (
  <Router>
    <Home path="/" />
    <Another path="/another" />
  </Router>
);

export default hot(App);