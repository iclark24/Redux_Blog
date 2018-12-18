import React from 'react';
import { Header, Container,} from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Home = () => (
  <Container>
    <Link to="/blogs">View All blogs</Link>
    <Header as="h3" textAlign="center">Home</Header>
  </Container>
)

export default Home