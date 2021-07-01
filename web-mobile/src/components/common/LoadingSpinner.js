import React, { Component } from 'react'
import '../../assets/css/loadingSpinner.css';
import loader from '../../assets/Jaypore Assets/01 Icons/01 Login Signup/Loader.svg'

class LoadingSpinner extends Component {

    render() {
        return (
            <div>
            <img src={loader} alt="loading..." className="spinner" />
            </div>
        )
    }
}

export default LoadingSpinner
