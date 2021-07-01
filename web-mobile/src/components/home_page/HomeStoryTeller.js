import React, { Component } from 'react'

class HomeStoryTeller extends Component {
    render() {
        return (
            <div>
                <div className="ml-16 mr-16">
                    <div className="card text-center pl-16 pr-16">
                        <h3 className=" mt-24 font-16 a-font-pts"><strong>STORYTELLERS OF </strong></h3>
                        <h1 className='a-font-pts ' style={{fontSize:22}}><strong>WONDER</strong></h1>
                    </div>
                    <div className="card">
                        <div className="main">
                            <div className="wrapper height185">
                                <div className="image-container">
                                    <div className="storyTellerSection">
                                        <img src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/14012020_Brand_Bestselling_slider.jpg" alt="" height="158px" width="250" />
                                    </div>
                                    <div className="image">
                                        <img src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/191231BRA100R_BRA_BRANCA_MTO_Relaunch_slider.jpg" alt="" height="158px" width="250px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeStoryTeller
