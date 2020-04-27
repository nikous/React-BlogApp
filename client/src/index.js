import React from 'react'
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

import App from './App'

const LoadingIndicator = props => {

    const { promiseInProgress } = usePromiseTracker();

    return (

        promiseInProgress &&
        <div

            style={{

                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <Loader type="ThreeDots" color="#ffffff" height="100" width="100" />

        </div>
    );
}

ReactDOM.render(<div><App /><LoadingIndicator /></div>, document.getElementById('root'))