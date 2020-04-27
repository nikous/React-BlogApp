import React from 'react'
import Post from '../Post/Post'
import axios from 'axios'
import './Posts.css'
import { trackPromise } from 'react-promise-tracker';
export default class Posts extends React.Component {

    state = {

        posts: []
    };

    componentDidMount() {

        this.getData()

    }

    getData = () => {

        trackPromise(

            axios
                .get("https://blog-app-server1.herokuapp.com/api")
                .then(data => {

                    this.setState({ posts: data.data })
                })
                .catch(err => { console.log(err); return null; }),
        )
    };


    render() {

        return (

            <div className="posts-container">

                {this.state.posts.map((post, i) => <Post key={i} post={post} i={i} />)}

            </div>
        )
    }
}
