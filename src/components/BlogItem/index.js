// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItemDetails

  return (
    <Link className="nav-link" to={`/blogs/${id}`}>
      <li className="blog-item-container">
        <img src={imageUrl} className="blog-image" alt={title} />
        <div className="blog-item-details">
          <p className="topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="author-details">
            <img src={avatarUrl} alt="avatar" className="avatar-img" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
