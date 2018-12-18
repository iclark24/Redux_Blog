import React from 'react';
import { connect, } from 'react-redux';
import { Button, Header, Container, Segment, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import BlogForm from "./BlogForm"
import {deleteblog} from "../reducers/blogs"

class Blog extends React.Component {
  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  handleDelete = () => {
    const { blog, dispatch, history: { push, }, } = this.props;
    dispatch(deleteblog(blog.id));
    push("/blogs");
  }

  render() {
    const { showForm, } = this.state;
    const { blog = {}, } = this.props;

    return (
    <Container>
      <Link to="/blogs">View All Blogs</Link>
      <Button color="orange" onClick={this.toggleForm}>
        { showForm ? 'Cancel' : 'Edit' }
      </Button>
      <Button color="red" onClick={this.handleDelete}>
        Delete
      </Button>
      { showForm ?
        <BlogForm {...blog} closeForm={this.toggleForm} />
      :
        <div>
          <Header as="h3" textAlign="center">
            {blog.name}
          </Header>
          <Segment>{blog.body}</Segment>
        </div>
      }
  </Container>
)


    }
  }
    

const mapStateToProps = (state, props) => {
  return { blog: state.blogs.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(Blog); 