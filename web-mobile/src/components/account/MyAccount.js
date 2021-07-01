import React, { Component } from 'react'
import close from '../../assets/Jaypore Assets/01 Icons/03 Listing/close.svg'
import downArrow from '../../assets/Jaypore Assets/01 Icons/01 Login Signup/Dropdown Arrow.svg'
import { Link } from 'react-router-dom'


export class MyAccount extends Component {

    goToMyOrder = () =>{
        this.props.history.push("/myAccount/myOrders");
    }
    render() {
        return (
            
            <div className='container-div back-color-pink'>
                <div className='a-height-56 row-div-start white-back-color p-13 '>
                    <img src={close} alt="" width='24px' height='24px' className='a-icon-padding'
                    onClick={()=>this.props.history.goBack()}
                    />
                    <h4 className='MyAccount-header'>My Account</h4>
                </div>
                <div className='a-p-16'>
                    <h5 className='a-mb-0'>Orders</h5>
                    <div className='a-height-48 a-mt-8 a-border-card' onClick={this.goToMyOrder}>
                        <h5 className='a-mb-0'  >My Orders</h5>
                        <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                    </div>

                    <h5 className='a-mb-0 a-mt-24'>Personalization</h5>
                    <div className='a-border-card a-mt-8 '>
                        <Link to={{pathname:'/MyAccount/myWishlist',state:'brand'}} activeClassName="active">
                        <div className='a-height-48 '>
                            <h5 className='a-mb-0'>My Wishlist</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>
                        <hr className='a-hr-1' />
                        </Link>
                        <Link to={{pathname:'/MyAccount/savedCollections',state:'brand'}} activeClassName="active">
                        <div className='a-height-48'>
                            <h5 className='a-mb-0'>Saved Curation</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>
                        <hr className='a-hr-1' />
                        </Link>
                        
                        <Link to={{pathname:'/MyAccount/recentlyViewedItems',state:'brand'}} activeClassName="active">
                        <div className='a-height-48'>
                            <h5 className='a-mb-0'>Recently Viewed Items</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>
                        </Link>
                    </div>

                    <h5 className='a-mb-0 a-mt-24'>Jaypore Delights</h5>
                    <div className='a-border-card a-mt-8 '>
                    <Link to={{pathname:'/MyAccount/myCredits',state:'brand'}} activeClassName="active">
                        <div className='a-height-48 '>
                            <h5 className='a-mb-0'>Jaypore Credits</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div> 
                        <hr className='a-hr-1' />
                        </Link>
                        <Link to={{pathname:'/MyAccount/referEarn',state:'brand'}} activeClassName="active">
                        <div className='a-height-48'>
                            <h5 className='a-mb-0'>Refer & Earn</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>
                        <hr className='a-hr-1' />
                        </Link>
                        <Link to={{pathname:'/MyAccount/myCoupons',state:'brand'}} activeClassName="active">
                        <div className='a-height-48'>
                            <h5 className='a-mb-0'>My Coupons</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>
                        <hr className='a-hr-1' />
                        </Link>
                        <div className='a-height-48'>
                            <h5 className='a-mb-0'>Gift Cards</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>
                    </div>
                    <h5 className='a-mb-0 a-mt-24'>My Info</h5>
                    <div className='a-border-card a-mt-8 '>
                    <Link to={{pathname:'/MyAccount/loginScreen1',state:'brand'}} activeClassName="active">
                        <div className='a-height-48 '>
                            <h5 className='a-mb-0'>Login & security</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>
                        <hr className='a-hr-1' />
                        </Link>
                        <Link to={{pathname:'/MyAccount/savedAddress',state:'brand'}} activeClassName="active">
                        <div className='a-height-48'>
                            <h5 className='a-mb-0'>Saved Addresses</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>
                        <hr className='a-hr-1' />
                        </Link>
                        <div className='a-height-48'>
                            <h5 className='a-mb-0'>Logout</h5>
                            <img src={downArrow} alt="" height='24px' width='24px' className='a-icon-padding a-trns a-arrow-left' />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccount
