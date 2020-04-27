import React from 'react'
import Posts from '../Posts/Posts'
import './Home.css'

export default class Home extends React.Component {

    render() {
        
        return (

            <main className="wrapper">

                <section className="section parallax bg1">

                    <div className="Head-div">

                        <p id="Head">PERSONAL BLOG</p>
                        
                    </div>

                </section>

                <section className="posts">

                    <Posts />

                </section>

            </main>

        )
    }
}
