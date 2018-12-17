import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';
import BlogForm from "./BlogForm"
import {Grid, Segment } from "semantic-ui-react"

const Blogs = ({ blogs }) => (
  <div>
    <BlogForm/>
    <Segment basic>
      <Grid columns="2">
        { 
          blogs.map( (t) => {
            return ( <Blog key={t.id} {...t} /> )
          })
        }
      </Grid>
    </Segment>
  </div>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(Blogs);