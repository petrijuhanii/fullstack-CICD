import { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, username, addLike }) => {
  const [blogVisible, setBlogVisible] = useState(false)

  const toggleVisibility = () => {
    setBlogVisible(!blogVisible)
  }

  const remove = async () => {
    if(window.confirm(`Remove blog ${blog.title} by ${blog.author}`)){
      await blogService.remove(blog.id)
    }
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  if(!blogVisible){
    return (
      <div className='blog'>
        <div style={blogStyle}>
          <div>
            {blog.title} {blog.author}
            <button className='button' onClick={toggleVisibility}>show</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div style={blogStyle} className="visibleContent">
        <div>
          {blog.title} {blog.author}
          <button onClick={toggleVisibility}>hide</button>
        </div>
        <div>
          {blog.url}
        </div>
        <div>
          likes {blog.likes}
          <button onClick={() => addLike(blog.id)} placeholder='likeButton'>like</button>
        </div>
        <div>
          {blog.user.name}
        </div>
        <div>
          {blog.user.username === username && (
            <button  onClick={remove}>remove</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog