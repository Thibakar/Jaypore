import React, { Component } from 'react'
import Pinterest from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Pinterest.svg'

class HomeFascinatingPins extends Component {
    render() {
        return (
            <div className="mt-16 ml-16 mr-16">
                <div className="insta-row card pl-14 pr-14">

                    <div className="row">
                        <div className="col-3 pin-logo-home">
                            <img src={Pinterest} alt=""  width={24}/>
                        </div>
                        <div className="col-8 pl-0">
                            <h3 className="mt-14">Fascinating Pins</h3>
                        </div>
                    </div>

                    <div className="pl-16  mb-8">
                        <img className="fasicinatingImages" variant="top" alt="" 
                        onClick={()=>this.props.togglePin()}
                        src="https://static.jaypore.com/tr:w-307,h-363,e-sharpen/media/events/200108SYK013_SYK_ASHDI_DESIGN_PVT_LTD_moodshot.jpg" />
                        <img className="fasicinatingImages" variant="top" alt="" 
                        onClick={()=>this.props.togglePin()}
                        src="https://static.jaypore.com/tr:w-307,h-363,e-sharpen/media/events/190927BNG013_BNG_Blessings_International_moodshot_U.jpg" />
                        <img className="fasicinatingImages" variant="top" alt="" 
                        onClick={()=>this.props.togglePin()}
                        src="https://static.jaypore.com/media/events/307X363/191028JMK013_JMK_Marka_moodshot.jpg" />
                        <img className="fasicinatingImages" variant="top" alt="" 
                        onClick={()=>this.props.togglePin()}
                        src="https://static.jaypore.com/media/events/307X363/200107LAD017_LAD_LADAKH_SHAWLS_moodshot.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeFascinatingPins
