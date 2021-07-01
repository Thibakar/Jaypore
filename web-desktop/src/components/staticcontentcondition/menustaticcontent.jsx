import React, { Component } from 'react'

export class Menustaticcontents extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <div className="container">
                        <div className="staticeMenu_us_content">
                            <div className="row">
                                <div className="col-md-4" >
                                    <div className="staticMenu-vt-al-term-cont">
                                    <div class="vertical-menu" id="staticMenuadd" >
                                        <a className="border-lp-s " href="/aboutUs" ><h5>About Us</h5></a>
                                        <hr></hr>
                                        <a className="border-lp-s" href="/contactUs"><h5>Contact Us</h5></a>
                                        <hr></hr>
                                        <a className="border-lp-s" href="/shippingpolicy"><h5>Shipping</h5></a>
                                        <hr></hr>
                                        <a className="border-lp-s" href="/returnopt"><h5>Returns</h5></a>
                                        <hr></hr>
                                        <a className="border-lp-s" href="/helpcontent"><h5>Help</h5></a>
                                        <hr></hr>
                                        <a className="border-lp-s" href="/term"> <h5>Terms</h5></a>
                                        <hr></hr>
                                        <a className="border-lp-s" href="/privacy"> <h5>Privacy</h5></a>
                                        <hr></hr>
                                        <a className="border-lp-s" href="/careers"><h5>Career</h5></a>

                                    </div>
                                 </div>
                                </div>
                                <div className="col-md-8">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Menustaticcontents
