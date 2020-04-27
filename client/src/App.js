import React from 'react'
import Home from './components/Home/Home'
import PostPage from './components/PostPage/PostPage'
import '../src/App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {

    return (

        <Router>

            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={PostPage} />

        </Router>
    )
}

export default App