import React, { Component } from 'react'
import CrossLogo from './shipping_payment_icon/close.svg';
import SearchLogo from './shipping_payment_icon/Search.svg';
import RadioEmptyLogo from './shipping_payment_icon/Radio - Empty.svg';
import SearchBlackLogo from './shipping_payment_icon/Search_black.svg';
import '../../assets/css/shipping_payment_new.css'
export default class BankOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div style={{ backgroundColor: '#ffffff' }}>
                <div className='bank-options-header-div'>
                    <img src={CrossLogo} className='bank-options-crossLogo' onClick={() => this.props.history.goBack()}></img>
                    <p className='bank-options-Header' >Bank Options</p>

                </div>
                <div style={{ backgroundColor: '#FFF0E7', paddingTop: 16, paddingBottom: 0.5, marginTop: 3}}>
                    <div style={{display:'flex', flexDirection:'row', marginRight:16 }}>
                    <img src={SearchBlackLogo} className='black-search-glass-logo'></img>
                    <input label="Search Currency" type='text' className='search-bank-input' placeholder='Search Bank' style={{ width: '74%', marginLeft: 16 }}></input>
                    <p className='search-box-btn'>Search</p>
                    </div>
                    <p className='popular-bank-text'>Popular Banks</p>
                </div>

                <div></div>
                <div className='save-borader' style={{marginTop:-5}}></div>

                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>HDFC Bank</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>

                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>ICIC Bank</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>


                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>Axis Bank Netbanking</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>

                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>Kotak Mahindra Bank</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>


                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>State Bank of India</p>
                </div>

                <div className='save-borader-new'></div>

                <div style={{ backgroundColor: '#FFF0E7', paddingTop: 16, paddingBottom:1 }}>
                    <p className='all-bank-font'>All Banks</p>
                </div>

                <div className='save-borader-new' style={{marginTop:-3}}></div>

                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>HDFC Bank</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>

                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>ICIC Bank</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>


                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>Axis Bank Netbanking</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>

                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>Kotak Mahindra Bank</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>


                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text'>State Bank of India</p>
                </div>

                <div className='save-borader'></div>
                <div className='save-borader'></div>

                



            </div>
        )
    }

}