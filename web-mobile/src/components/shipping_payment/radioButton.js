import React, { Component } from 'react'
import TextAreaCornerLogo from './shipping_payment_icon/Dropdown.svg';
import './radio_button_address.css'
export default class AddressRadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // componentDidMount() {
    //     window.scrollTo(0, 0)
    // }

    render() {
        return (

            <div>
                 <div className="custom-radio-wrap-address" style={{ marginTop: -10 }}>
                            <form style={{ border: 'none', display: 'flex', flexDirectionL: 'row' }}>
                                 <div className="form-group-address" style={{ marginLeft: -16 }}>
                                    <input id="html1" type="radio" name="custom-radio-btn" />
                                    <label className="custom-radio" for="html1"></label>
                                    <span style={{ marginLeft: 8, fontSize: 14, fontFamily: 'WorkSans-r', color: '#7B7876', }}>Home</span>
                                </div>
                                <div className="form-group-address" style={{ marginLeft: 16 }}>
                                    <input id="css1" type="radio" name="custom-radio-btn" onClick={() => this.onRadioButton("cod")} />
                                    <label className="custom-radio" for="css1"></label>
                                    <span style={{ marginLeft: 8, fontSize: 14, fontFamily: 'WorkSans-r', color: '#7B7876', }}>Office</span>
                                </div>
                                <div className="form-group-address" style={{ marginLeft: 16 }}>
                                    <input id="js1" type="radio" name="custom-radio-btn" onClick={() => this.onRadioButton("Paypal")} />
                                    <label className="custom-radio" for="js1"></label>
                                    <span style={{ marginLeft: 8, fontSize: 14, fontFamily: 'WorkSans-r', color: '#7B7876', }}>Other</span>
                                </div> 
                            </form>
                        </div> 


            </div>
        )
    }
}    