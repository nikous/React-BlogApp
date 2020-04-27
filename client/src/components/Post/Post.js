import React from 'react'
import { Link } from 'react-router-dom';

import './Post.css'

class Post extends React.Component {
  
    render() {
        
        return (

            <div className="post-container">

                <Link style={{ textDecoration: 'none' }} to={{ pathname: '/post/' + this.props.post._id }} >

                    <img className="image" src={this.props.post.image}></img>

                    <h2 className="heading">{this.props.post.title}</h2>

                    <p className="description">{this.props.post.description}</p>

                    <div className="info">

                        <p id="number">{this.props.i + 1}</p>
                        <p id="date">{this.props.post.Date.substr(0, 10)}</p>

                    </div>

                </Link>

            </div>
        )
    }
}

export default Post