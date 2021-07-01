import React, { Component } from 'react'
import Shipped from '../../assets/Jaypore Assets/01 Icons/11 My Order/Shipped.svg' 
import BlueDownArrow from '../../assets/PDP/down_arrow_blue.svg'
import MeasurementsImg from '../../assets/PDP/measurements.svg'
import WeightImg from '../../assets/PDP/weight.svg'
import MaterialImg from '../../assets/PDP/materials.svg'
import CareImg from '../../assets/PDP/care.svg'
import SkuImg from '../../assets/PDP/sku.svg'
import ColorImg from '../../assets/PDP/colors.svg'




class PdpDescription extends Component {
    constructor(props) {
        super(props)

        this.state = {
            disclaimerHeading: "Disclaimer",
            disclaimerContent: "",
            ProductDetails: "Product Details",
            moredetails: "More Details",
            shippingInfor: "Shipping Information",
            measurement: "Measurements",
            toggleavail:false
        }
    }

    toggleavailpromo=()=>{
        console.log(this.state.toggleavail)
        this.setState({
            toggleavail:!this.state.toggleavail
        })
    }

    render() {
        return (
            <div className='mt-16'>
                <section className="accordion" style={{marginBottom:24}}>
                    <input type="checkbox" name="collapse2" id="handle1" />
                    <label className="text-blue bg-white font-size-14 pl-0 p-0 mt-24 m-txt font-16" 
                    onClick={()=>this.toggleavailpromo()}
                    htmlFor="handle1">Product Details <img src={BlueDownArrow} alt="" className={this.state.toggleavail?"ml-2":'ml-2 rot-180'} /></label>
                    <div className="content change-bg-pdp pl-0 mt-16">
                        <div className='p-16'>
                        <h2 className="mt-0 mb-24 font-16 colr-42"> {this.state.ProductDetails} </h2>
                        <h3 className="mb-16  sb-txt font-14 colr-42"> {this.state.disclaimerHeading} </h3>
                        <p className="font-size-14 colr-42"> This product is hand block printed and there might be slight irregulatities in color and prints occuring.
                            These irregularities are the hallmart of hand block printed products and make each equisted piece one-of-its-kind.
                        </p>
                        <h2 className="mb-16 font-18 colr-24"> {this.state.moredetails} </h2>
                        <h3 className="mb-16 sb-txt font-14 colr-42"><span><img src={Shipped} alt="" className="mr-3" /></span> Shipping Information </h3>
                        <p className="font-size-14 colr-42">Dispatched in a maximum of 23 business days. Return accepted within 10 days of delivery. Cancellation
                            requests will be accepte strictly within 24 hours of placing the order only. This product is mae on order. </p>

                        <h3 className='sb-txt font-14 colr-42'> <img src={MeasurementsImg} alt="" className="mr-3" />{this.state.measurement} </h3>
                        <p className="font-size-14 colr-42">Refer to the <span className="text-blue"> Size Chart </span></p>
                        <p className="font-size-14 colr-42">The model (height 5'8'') is wearing a size S</p>
                    
                        <h3 className='sb-txt font-14 colr-42'><span><img src={ColorImg} alt="" /></span>  Color </h3>
                        <p className="font-size-14 colr-42">Pink</p>

                        <h3 className='sb-txt font-14 colr-42'><span><img src={WeightImg} alt="" /></span>  Weight (in grams) </h3>
                        <p className="font-size-14 colr-42">NA</p>

                        <h3 className='sb-txt font-14 colr-42'><img src={MaterialImg} alt="" />  Material (s) </h3>
                        <p className="font-size-14 colr-42">Cotton</p>

                        <h3 className='sb-txt font-14 colr-42'><img src={CareImg} alt="" />  Care </h3>
                        <p className="font-size-14 colr-42">Drt Clean Only</p>

                        <h3 className='sb-txt font-14 colr-42'><img src={SkuImg} alt="" />  SKU </h3>
                        <p className="font-size-14 colr-42">SHMAPJ20004284</p>
                        </div>
                    </div>
                </section>
                {/* <h3 className="text-blue">Product Details V</h3> */}
            </div>
        )
    }
}

export default PdpDescription
