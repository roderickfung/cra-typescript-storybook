import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'

const Home = (props: RouteComponentProps) => <div>Home</div>
const Another = (props: RouteComponentProps) => <div>Another Page</div>


const App = () => (
  <Router>
    <Home path="/" />
    <Another path="/another" />
  </Router>
)

export default hot(App)