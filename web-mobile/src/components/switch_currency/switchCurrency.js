import React, { Component } from 'react'
import CrossLogo from './switch_currency_Icon/close.svg';
import './switchCurrency.css'
export default class SearchCurrency extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div >
                <div className='switch-Currency-header-div'>
                    <img alt="" src={CrossLogo} className='crossLogo' onClick={() => this.props.history.goBack()}></img>
                    <p className='change-Currency-Header' >Change Currency</p>
                    <div className='change-currency-header-prefix-div'>
                        <p className='change-Currency-Prefix' >INR</p>
                    </div>
                </div>


         
               

                <div className='countryCurrencyDiv' style={{}}>
                    <p className='countryCurrencyFont'>Indian Rupee</p>
                    <p className='countryCurrencyPrefix'>INR</p>
                </div>

                <hr style={{ borderColor:'#edd4c5'}} />

                <div className='countryCurrencyDiv'>
                    <p className='countryCurrencyFont'>United State Dollor</p>
                    <p className='countryCurrencyPrefix'>USD</p>
                </div>

                <hr style={{borderColor:'#edd4c5' }} />
            </div>
        )
    }

}