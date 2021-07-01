import React, { Component } from 'react'
// import '../../../assets/css/aayush.css'
import '../../../assets/css/navigationDrawer.css'
import { Route } from "react-router-dom";
import Profile from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Profile.svg'
import Order from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/My Orders.svg'
import Wishlist from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/My Wishlist.svg'
import Viewed from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Recently Viewed Items.svg'
import RE from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Refer &Earn.svg'
import Address from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Saved Address.svg'
import Curations from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Saved Curations.svg'
import Gift from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Gift Cards.svg'
import Credits from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Jaypore Credits.svg'
import LogOut from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Logf Out.svg'
import Security from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/Login & Security.svg'
import Coupons from '../../../assets/01 Icons/09 Navigation Drawer - Desktop/My Coupons.svg'
import ItemCancelationModel from "../../myorder/itemCancelationModel";
import EmptyCartMyOrder from "../../myorder/emptyCartMyOrder";
import filter from "../../listing/filter";
export class NavigationDrawer extends Component {

    render() {
        return (
            <div style={{ width: '100%' }} className='a-popular-btn'>
                <div className='a-back-pink-light '>
                    {/* <Sidebar
                        sidebar={<b>Sidebar content</b>}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={{ sidebar: { background: "white" } }}
                    >
                        <button onClick={() => this.onSetSidebarOpen(true)}>
                            Open sidebar
                    </button>
                    </Sidebar> */}
                    <div className='a-p-16' >
                        <div className='a-row'>
                            <img src={Profile} height='20px' width='20px' alt="listing-images" />
                            <div className='a-ml-8'>
                                <h5 className='a-22-txt a-mt-0 a-mb-12 a-mu-1'>Shahnawaz Alam</h5>
                                <h5 className='a-14-txt a-mt-0 a-mb-0'><Route path="/myAccount/itemCancellation" component={ItemCancelationModel} />
                                    <Route path="/myorderEmptycart" component={EmptyCartMyOrder} />
                                    <Route path="/filter" component={filter} /></h5>
                                <h5 className='a-14-txt a-mt-0 a-mb-8 login-text a-mu-2'>shahanawazalam@jaypore.com</h5>
                                <h5 className='a-14-txt a-mt-0 a-mb-0 login-text a-mu-2'>99538 91900</h5>
                            </div>
                        </div>
                    </div>
                    <div className='a-nav-btn a-nav-border a-row a-p-16 curr-nav' onClick={() => this.props.navigate('/myorderFullLength')} href="#">
                        <img src={Order} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0 a-text-black' >My Orders</h5>
                    </div>
                    <div className='a-nav-btn a-row a-p-16 a-mt-8 curr-nav'>
                        <img src={Wishlist} height={20} width='20px' alt="listing-images" />

                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >My Wishlist</h5>
                    </div>
                    <div className='a-nav-btn a-row a-p-16 curr-nav'>
                        <img src={Curations} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >Saved Curation</h5>
                    </div>
                    <div className='a-nav-btn a-nav-border-bottom a-row a-p-16 curr-nav'>
                        <img src={Viewed} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >Recently Viewed Items</h5>
                    </div>
                    <div className='a-nav-btn a-row a-p-16 a-mt-8 curr-nav'>
                        <img src={Credits} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >Jaypore Credits</h5>
                    </div>
                    <div className='a-nav-btn a-row a-p-16 curr-nav'>
                        <img src={RE} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >Refer & Earn</h5>
                    </div>
                    <div className='a-nav-btn a-row a-p-16 curr-nav'>
                        <img src={Coupons} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >My Coupons</h5>
                    </div>
                    <div className='a-nav-btn a-nav-border-bottom a-row a-p-16 curr-nav'>
                        <img src={Gift} height='25px' width='25px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >Gift Cards</h5>
                    </div>
                    <div className='a-nav-btn  a-row a-p-16 a-mt-8 curr-nav' onClick={() => this.props.navigate('/login')} href="#">
                        <img src={Security} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >Login & Security </h5>
                    </div>
                    <div className='a-nav-btn a-nav-border-bottom a-row a-p-16 curr-nav'>
                        <img src={Address} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >Saved Addresses</h5>
                    </div>
                    <div className='a-nav-btn  a-nav-border a-row a-p-16 a-mt-8 curr-nav'>
                        <img src={LogOut} height='20px' width='20px' alt="listing-images" />
                        <h5 className='a-16-txt a-ml-19 a-mb-0 a-mt-0' >Log Out</h5>
                    </div>
                    <div className='a-m-8 a-nav-btn a-radius a-txt-center '>
                        <img
                            src="https://jaypore.files.wordpress.com/2018/03/29388410_1777459448959949_9205830084264090096_n.jpg?w=780"
                            className='a-img-radius'
                            height='60px' width='100%'
                            alt="listing-images"
                        />
                        <h5 className='a-pr-pl-32 a-mt-16 a-mt-0 navDrawExploreTitle'>Our First Ever Offline Store Is Here</h5>
                        <button className='a-mt-16 a-mb-16 a-radius a-back-brand' style={{ width: '44%' }}>
                            <h5 className='a-color-white a-14-txt a-mb-0 a-pt-pb-8 a-mt-0 '>Explore</h5>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavigationDrawer
