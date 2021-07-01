import React, { Component } from 'react'
import "../../assets/css/termandcondition.css";
import Footer from "../shared/footer/footer";
import Header from "../shared/header/header";
import MenuComponent from "../shippingpayment/menustaticcontent";

export class Aboutus extends Component {
    render() {
        return (
            <React.Fragment>
             <Header />
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <div className="container">
                        <div className="about_us_content">
                            <div className="row">
                                <div className="col-md-2" >
                               <MenuComponent/>
                                </div>
                                <div className="col-md-10" id="rectangledivsection">
                                    <div className="aboutUsBodyParagraph">
                                        <h5 className="aboutUsheadinStyle">About Us</h5>
                                        <h6 className="weAreherestyle">Who We Are</h6>
                                        <p>Connectting you to india's most beautiful products. </p>
                                        <p>Jaypore is about bringing the world a little closer together. We discover the best designs from artisans and craftsmen from all over india and deliver them at exceptional value to our members.</p>
                                        <h6 className="weAreherestyle">What We Do</h6>
                                        <p>Everyday, visit us to discover a new story. We don't like to call them sales. We are storytellers; about amazing product, and the people
                                            behind them.
                            </p>
                                        <h6 className="weAreherestyle">What We Sell</h6>
                                        <p>Jaypore focuses on products with unique, high quality craftsmenship; unmistakably local designs that feel at home anywhere in the world.
                                            Our products include home decor, accesssories, jewellery, apparel, gifts, vintage items and more.
                            </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div>
          
            </div>
            <div className="footer-standardx">
               <Footer />
               </div>
            </React.Fragment>
       
           
        )
    }
}

export default Aboutus
