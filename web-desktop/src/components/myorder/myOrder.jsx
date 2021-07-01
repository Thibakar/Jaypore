import React, { Component } from 'react'
import MyorderPageOne from './myOrder_page'
import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'
import '../../assets/css/my-orders.css'
import '../../assets/css/order-confirmation.css'
import { BaseComponent } from '../common/BaseComponent'

export class MyorderFullLength extends BaseComponent {
    render() {
        return (
            <div>
                <Header props={this.props}/>

                <MyorderPageOne {...this.props} />
                <Footer/>
            </div>
        )
    }
}

export default MyorderFullLength
