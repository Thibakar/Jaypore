import React, { Component } from 'react'
import ApplyCoupan from '../../assets/Jaypore Assets/01 Icons/05 My Bag/percentage_star_transparent.svg'


class MyBagCoupanCard extends Component {
    render() {
        return (
            <div>
                <img src={ApplyCoupan} alt="" className="myBagCoupanImages" />
                <p className="text-jaypore font-size-16 mb-0 sb-txt">JAYPORE20</p>
                <p className="font-jaypore font-size-12 mb-0 m-txt">Get 10% Off on  purchase</p>
                <p className="font-jaypore font-size-12 mb-0 m-txt">above Rs.1000</p>
            </div>
        )
    }
}

export default MyBagCoupanCard
