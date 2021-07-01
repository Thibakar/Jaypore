import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PdpCheckDeliveryDate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pincode: ""
        }
    }
    inputChange = (e) => {
        this.setState({
            pincode: e.target.value
        })
        let check=ReactDOM.findDOMNode(this.refs.checknow)
        if (e.target.value === "") {
            check.style.backgroundColor = "#babcbf";
          } else {
            check.style.backgroundColor = "#BB4225";
          }
    }



    render() {
        return (
            <div className="">
                <div className="mt-24 m-txt font-18 mb-16 colr-42">Check Delivery Date & COD Option</div>
                <div className='row-bwt-div'>
                    <input className="mt-0 deliveryBtn  border-radius pl-3"
                        type="nummber" name="pinCode" placeholder="Enter PIN Code" style={{ width: '57%' }}
                        value={this.state.pincode} onChange={this.inputChange} />
                    <button type="button" className="checkNowBtn border-radius" 
                    style={{width:'37%',marginRight:16}} ref='checknow'
                    >Check Now</button>
                </div>
            </div>
        )
    }
}

export default PdpCheckDeliveryDate
