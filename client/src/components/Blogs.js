import React from 'react';
import { connect } from 'react-redux';
import { Link, } from 'react-router-dom';
import BlogForm from "./BlogForm"
import { Container, Header, Card, Button, } from 'semantic-ui-react';

class Blogs extends React.Component {

  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  blogs = () => {
    let {blogs} = this.props;
    return blogs.map( blog =>
      <Card key={ blog.id }>
        <Card.Content>
          <Card.Header>
            {blog.name}
          </Card.Header>
          <Card.Description>
            { blog.body }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/blogs/${blog.id}`}>
            View blog
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const {showForm,} = this.state

    return (
      <Container>
        <Header as="h1" textAlign="center">Blogs</Header>
        <Button color="blue" onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'New Blog' }
        </Button>
        { showForm ?
            <BlogForm closeForm={this.toggleForm} />
          :
          <Card.Group itemsPerRow={4}>
           { this.blogs() }
          </Card.Group>
        }
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { blogs: state.blogs, };
  }

export default connect(mapStateToProps)(Blogs);