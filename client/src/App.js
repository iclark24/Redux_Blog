import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from "./components/NavBar"
import {Container} from "semantic-ui-react"
import FetchBlogs from "./components/FetchBlogs"

const App = () => (
  <Fragment>
    <NavBar/>
    <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blogs" component={FetchBlogs} />
      <Route component={NoMatch} />
    </Switch>
    </Container>
  </Fragment>
);

export default App;