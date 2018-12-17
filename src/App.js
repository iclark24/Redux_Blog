import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Blogs from './components/Blogs';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from "./components/NavBar"
import {Container} from "semantic-ui-react"

const App = () => (
  <Fragment>
    <NavBar/>
    <Container>
    <Switch>
      <Route exact path="/" component={Blogs} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route component={NoMatch} /> */}
    </Switch>
    </Container>
  </Fragment>
);

export default App;