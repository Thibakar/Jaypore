import React, { Component } from 'react'

import './bagStyles.css'
import '../../assets/css/sampath.css'
import BagCard from './BagCard'
import AddMoreWishList from './AddMoreWishList'
import MyBagOptions from './MyBagOptions'
import MyBagPriceDetails from './MyBagPriceDetails'
import MyBagLastViewedItems from './MyBagLastViewedItems'
import MyBagPlaceOrderBtn from './MyBagPlaceOrderBtn'
import close from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Close.svg'
import saved from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Saved.svg'
import SoldOutRemoved from './soldOutRemoved'

class MyBag extends Component {
    render() {
        return (

            <div>
                {/* <MyBagHeader /> */}
                <div className='e-header_styles p-16'>
                    <img src={close} alt="" className='e-crossIcon' onClick={() => this.props.history.goBack()} />
                    <h4 className="e-screenTitle">My Bag</h4>
                    <img src={saved} alt="" className="e-savedIcon" />
                </div>

                <div className="bg-jaypore-pink">
                    <div className="p-16">
                        <SoldOutRemoved/>
                        <div className="m-t-15 mb-8 m-txt">Items (4)</div>
                        <BagCard props={this.props}/>
                        <BagCard props={this.props}/>
                        <BagCard props={this.props}/>

                        <AddMoreWishList />

                        <MyBagOptions />

                        <MyBagPriceDetails />
                    </div>

                    <MyBagLastViewedItems />
                    <div className="bg-white p-1 mt-3 placeOrderBtnSection">
                        <MyBagPlaceOrderBtn />
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBag;