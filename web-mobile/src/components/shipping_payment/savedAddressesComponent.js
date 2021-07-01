import React, { Component } from 'react'
import DropDownLogo from './shipping_payment_icon/Dropdown Arrow.svg';
import SecureLockLogo from './shipping_payment_icon/Secure1.svg';
import VisaCardLogo from './shipping_payment_icon/visa card.svg';
import AmericaCardLogo from './shipping_payment_icon/amex.svg';
import MasterCardLogo from './shipping_payment_icon/Mastercard card.svg';
import RadioEmptyLogo from './shipping_payment_icon/Radio - Empty.svg';
import RedioLogo from './shipping_payment_icon/Radio - Empty.svg';
import DeleteLogo from './shipping_payment_icon/Delete.svg';
import EditLogo from './shipping_payment_icon/Edit.svg';
import ChekboxFullLogo from './shipping_payment_icon/checkbox Selected.svg';
import ChekboxEmptyLogo from './shipping_payment_icon/Checkbox Empty.svg';
import TextAreaCornerLogo from './shipping_payment_icon/Dropdown.svg';
import PayPalLogo from './shipping_payment_icon/Paypal.svg';
import PhoneLpgo from './shipping_payment_icon/Mobile.svg';
import BackArrowLogo from './shipping_payment_icon/ic_arrow_back.svg';
import { Link } from 'react-router-dom'
import './radio_button_savedAddress.css'


export default class SavedShippingAddressesPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (


            <div className='card-saveAddress-form-div' style={{ marginTop: -4 }}>
                <div className='card-saveAddres-btns-div' style={{}}>

                    <div className="custom-radio-wrap-savedaddress" style={{ padding: 16, paddingLeft: -16 }}>
                        <form style={{ border: 'none', marginLeft: -17 }}>
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: -15, paddingLeft: 16 }}>
                                    <div className="form-group-savedaddress">
                                        <input id="html2" type="radio" name="custom-radio-btn" />
                                        <label className="custom-radio" for="html"></label>
                                    </div>

                                    <div className='card-saveAddres-btns-div-div'>
                                        <Link to={{ pathname: '/deleteModel', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                                            <img src={DeleteLogo} className='delete-Logo'></img>
                                        </Link>
                                        <img src={EditLogo} style={{ marginTop: -10 }}></img>
                                    </div>
                                </div>


                                <div className='userName-Contact-Icon'>
                                    <p className='card-userName-sty'>Shahnawaz Alam</p>
                                    <div className='contact-Icon-contact-No'>
                                        <img src={PhoneLpgo} className='phone-Logo'></img>
                                        <p className='modile-No'>+91 9912345890</p>
                                    </div>
                                </div>


                                <p className='user-Address-sty'>#234, 1st Floor, HSR 2 sector  bangalore -560034 </p>
                                <p className='card-userName-sty'>Home</p>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                                    <img src={ChekboxEmptyLogo}></img>
                                    <p className='checkbox-empty-text'><span style={{ fontFamily: 'none', fontSize: 13 }}>Billing Address:</span> Same as Shipping Address</p>
                                </div>

                                <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -28 }}></div>
                            </div>





                            <div style={{ marginTop: 16 }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: -15, paddingLeft: 16, paddingTop: 16 }}>
                                    <div className="form-group-savedaddress">
                                        <input id="css2" type="radio" name="custom-radio-btn" />
                                        <label className="custom-radio" for="html"></label>
                                    </div>

                                    <div className='card-saveAddres-btns-div-div'>
                                        <Link to={{ pathname: '/deleteModel', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                                            <img src={DeleteLogo} className='delete-Logo'></img>
                                        </Link>
                                        <img src={EditLogo} style={{ marginTop: -10 }}></img>
                                    </div>
                                </div>


                                <div className='userName-Contact-Icon'>
                                    <p className='card-userName-sty'>Shahnawaz Alam</p>
                                    <div className='contact-Icon-contact-No'>
                                        <img src={PhoneLpgo} className='phone-Logo'></img>
                                        <p className='modile-No'>+91 9912345890</p>
                                    </div>
                                </div>


                                <p className='user-Address-sty'>#234, 1st Floor, HSR 2 sector  bangalore -560034 </p>
                                <p className='card-userName-sty'>Home</p>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                                    <img src={ChekboxEmptyLogo}></img>
                                    <p className='checkbox-empty-text'><span style={{ fontFamily: 'none', fontSize: 13 }}>Billing Address:</span> Same as Shipping Address</p>
                                </div>

                                <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -28 }}></div>
                            </div>


                            <div style={{ marginTop: 16, marginBottom: -16 }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: -15, paddingLeft: 16, paddingTop: 16 }}>
                                    <div className="form-group-savedaddress">
                                        <input id="js2" type="radio" name="custom-radio-btn" />
                                        <label className="custom-radio" for="html"></label>
                                    </div>

                                    <div className='card-saveAddres-btns-div-div'>
                                        <Link to={{ pathname: '/deleteModel', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                                            <img src={DeleteLogo} className='delete-Logo'></img>
                                        </Link>
                                        <img src={EditLogo} style={{ marginTop: -10 }}></img>
                                    </div>
                                </div>


                                <div className='userName-Contact-Icon'>
                                    <p className='card-userName-sty'>Shahnawaz Alam</p>
                                    <div className='contact-Icon-contact-No'>
                                        <img src={PhoneLpgo} className='phone-Logo'></img>
                                        <p className='modile-No'>+91 9912345890</p>
                                    </div>
                                </div>


                                <p className='user-Address-sty'>#234, 1st Floor, HSR 2 sector  bangalore -560034 </p>
                                <p className='card-userName-sty'>Home</p>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                                    <img src={ChekboxEmptyLogo}></img>
                                    <p className='checkbox-empty-text'><span style={{ fontFamily: 'none', fontSize: 13 }}>Billing Address:</span> Same as Shipping Address</p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>





        )



    }
}
