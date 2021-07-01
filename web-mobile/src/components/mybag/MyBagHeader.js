import React, { Component } from 'react'
import './bagStyles.css'
import close from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Close.svg'
import saved from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Saved.svg'

class MyBagHeader extends Component {
    render() {
        return (
            <div>
                <div className='e-header_styles'>
                    <img src={close} alt="" className='e-crossIcon' onClick={() => this.props.history.goBack()} />
                    <h4 className="e-screenTitle"><b>My Bag</b></h4>
                    <img src={saved} alt="" className="e-savedIcon" />
                </div>
            </div>
        )
    }
}

export default MyBagHeader

