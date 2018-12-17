import React from 'react';
import { connect, } from 'react-redux';
import { Header, Grid, Button, Item, Segment } from "semantic-ui-react"

const Blog = ({ id, name, body, dispatch }) => (
  <Grid.Column>
    <Item>
      <Item.Header>
      <Header textAlign="center" as="h2">{ name }</Header>
      </Item.Header>
      <Item.Description textAlign="center">
      <Segment attached="top" textAlign="center">
      { body }
      </Segment>
      <Button.Group attached="bottom" fluid widths="equal">
      <Button color="orange" onClick={() => dispatch({ type: 'TOGGLE_EDIT', id })}
>
        Edit
      </Button>
      <Button color="red" onClick={() => dispatch({ type: 'DELETE_BLOG', id })}
>
        Delete
      </Button>
      </Button.Group>
      </Item.Description>
    </Item>
  </Grid.Column>  
)

export default connect()(Blog);