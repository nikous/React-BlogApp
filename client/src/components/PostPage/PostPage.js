import React from 'react'
import axios from 'axios';
import './PostPage.css'

export default class Posts extends React.Component {

    state = {

        posts: []
    };

    componentDidMount() {

        this.getData();
    }

    getData = () => {

        axios
            .get("https://blog-app-server1.herokuapp.com/api")
            .then(data => {
             
                this.setState({ posts: data.data });
            })
            .catch(err => { console.log(err); return null; });
    };

    render() {

        return (

            <div className="postsa-container">

                {this.state.posts.map((post, i) => {

                    if (post._id === this.props.match.params.id) {

                        return <>

                            <main className="postPage-container">

                                <section className="first-col" style={{ backgroundImage: `url(${post.image})` }}>
                                    
                                    <div className="title-container">< p id="title" key={post.id} >{post.title}</p></div>

                                </section>

                                <section className="second-col">

                                    <p id="Date" key={post.id}>{post.Date.substr(0, 10)}</p>
                                    <p id="Text" key={post.id}>{post.text}</p>

                                </section>
                                
                            </main>
                        </>
                    }
                })}

            </div >
        )
    }
}