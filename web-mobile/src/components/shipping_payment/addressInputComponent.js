import React, { Component } from 'react'
import TextAreaCornerLogo from './shipping_payment_icon/Dropdown.svg';
import './radio_button_address.css'
export default class AddressInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentStyle: 'online',
            mobileCountryCode: false,
            marLeft: 18,
        }
        this.onClickContact = this.onClickContact.bind();
    }

    // componentDidMount() {
    //     window.scrollTo(0, 0)
    // }

    onClickContact() {
        this.setState({
            mobileCountryCode: true,
            marLeft: 48
        })
    }

    render() {
        return (

            <div>

                <div>
                    <input label='Full Name' type='text' placeholder='Full Name' className='input-text-Area-SP'></input>
                </div>
                <div style={{ paddingTop: 8 }}>
                    <textarea label='Address' type='text' placeholder='Address' className='textArea-SP'></textarea>
                    <img src={TextAreaCornerLogo} className='text-Area-Corner-Logo-SP'></img>
                </div>

                <select style={{ marginTop: 10 }} class="select-country-control">
                    <option>Country</option>
                    <option>India</option>
                    <option>US</option>
                </select>

                <div style={{ paddingTop: 8 }}>
                    <input label='Pin Code / Zip Code' type='text' placeholder='Pin Code / Zip Code' className='input-text-Area-SP'></input>
                </div>

                <select style={{ marginTop: 8 }} class="select-country-control">
                    <option>State / Province</option>
                    <option>Andhra Pradesh</option>
                    <option>Haryana</option>
                    <option>Gujarat</option>
                </select>

                <select style={{ marginTop: 16 }} class="select-country-control">
                    <option>City</option>
                    <option>Ambala</option>
                    <option>Bhiwani</option>
                    <option>Gurugram</option>
                </select>


                <div style={{ marginTop: 9, paddingBottom:8 }}>

                    <p className={this.state.mobileCountryCode ? 'country-code' : 'd-none'}>+91</p>
                    <input label='Contact No.' type='text' placeholder='Mobile Number' style={{ paddingLeft: this.state.marLeft }} className='input-text-Area-mobile' onClick={() => this.onClickContact()}></input>
                </div>
            </div>
        )
    }
}    