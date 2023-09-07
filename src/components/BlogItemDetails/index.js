// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemDetails
    return (
      <div className="blog-item-details-container">
        {isLoading ? (
          <div data-testId="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="title">{title}</h1>
            <div className="author-details">
              <img src={avatarUrl} className="avatar" alt={title} />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} className="image" alt="title" />
            <p className="content">{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
