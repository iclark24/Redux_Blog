import React from 'react';
import { connect, } from 'react-redux';
import {Header, Form, Input, TextArea, Button} from "semantic-ui-react"

class EditBlog extends React.Component {

  
  state = { name: '', body: "",};
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id, } = this.props;
    const { name, body } = this.state;
    const blog = { name, id, body, editing: false };
    dispatch({ type: 'EDIT_BLOG', blog, });
    dispatch({ type: "TOGGLE_EDIT", blog})

  }

  render() {
    const { name, body} = this.state;

    return (
      <div>
        <Header as="h1">Edit Blog</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field width="5">
            <label>Title</label>
          <Input name="name" value={name} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field width="5">
            <label>Body</label>
            <TextArea name="body" value={body} onChange={this.handleChange} />
          </Form.Field>
          <Button color="green">Submit</Button>
        </Form>
      </div>
    )
  }
}


export default connect()(EditBlog);