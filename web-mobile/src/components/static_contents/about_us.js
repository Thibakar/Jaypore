import React, { Component } from 'react'
import "../../assets/css/staticcontent.css";
import FooterPage from "../../components/common/footer/footer";
import HeaderPage from "../../components/common/header/header";

export class AboutuS extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="headerMenustyle01">

                    <div>
                        <HeaderPage />
                    </div>
                <div className="abt-us-context-lp">
                    <div className="helped_policymain_content">
                        <h5 className="helped_policytxt">About Us</h5>
                        <p className="about-us-who-are">Who We Are</p>
                        <p> Jaypore is about bringing the world a little closer together. We discover the best designs from artisans and craftsmen from all over
                            India, and deliver them at exceptional value to our members.
                    </p>
                        <p className="about-us-who-are">What We Do </p>
                        <p> Everyday, visit us to discover a new story. We don't like to call them sales. We are storytellers; about amazing product, and the people behind them.</p>
                        <p className="about-us-who-are">What We Sell </p>
                        <p> Jaypore focuses on products with unique, high quality craftsmenship; unmistakably local designs that feel at home anywhere in the world. Our products include
                            home decor, accessories, jewelry, apparel, gifts, vintage items and more.
                    </p>

                    </div>
                    </div>
                  
                    <div className="po-rl-ft-pa">
                    <FooterPage />
                    </div>
                </div>
                {/* Here End  */}
            </React.Fragment>
        )
    }
}

export default AboutuS
