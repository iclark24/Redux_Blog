const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'DELETE_BLOG':
    return state.filter(({ id }) => id !== action.id )
    case 'TOGGLE_EDIT':
    return state.map( blog => {
      if (blog.id === action.id)
        return {...blog, editing: !blog.editing}
      return blog
    })   
    case 'EDIT_BLOG':
      return state
    default:
      return state
  }
}

export default blogs;