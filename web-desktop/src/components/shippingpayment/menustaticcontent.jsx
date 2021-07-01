import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Menustaticcontent extends Component {
    render() {
        return (
            <div>
                <div style={{}}>
                    <div className="container">
                        <div className="staticeMenu_us_content">
                            <div className="row">
                                {/* <div className="col-md-4" >
                                    <div className="staticMenu-vt-al-term-cont"> */}
                                <div class="vertical-menu" id="staticMenuadd" >

                                    <Link to="/aboutUs" className="border-lp-s " id="dvdfil-we-haf-vh" ><h5>About Us</h5></Link>
                                    <hr></hr>
                                    <Link to="/contactUs" className="border-lp-s"><h5>Contact Us</h5></Link>
                                    <hr></hr>
                                    <Link to="/shippingpolicy" className="border-lp-s"><h5>Shipping</h5></Link>
                                    <hr></hr>
                                    <Link to="/returnopt" className="border-lp-s"><h5>Returns</h5></Link>
                                    <hr></hr>
                                    <Link to="/helpcontent" className="border-lp-s" ><h5>Help</h5></Link>
                                    <hr></hr>
                                    <Link to="/term" className="border-lp-s"> <h5>Terms</h5></Link>
                                    <hr></hr>
                                    <Link to="/privacy" className="border-lp-s"> <h5>Privacy</h5></Link>
                                    <hr></hr>
                                    <Link to="/careers" className="border-lp-s"><h5>Career</h5></Link>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        )
    }
}

export default Menustaticcontent

