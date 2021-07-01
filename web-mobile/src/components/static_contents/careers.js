import React, { Component } from 'react'
import "../../assets/css/staticcontent.css";

import Footer from '../../components/common/footer/footer';
import HeaderPage from "../../components/common/header/header";
export class Careers extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="headerMenustyle01">
                        <div>
                            <HeaderPage />
                        </div>
                        <div className="re-tn-pvt-con">
                            <div className="returns_policymain_content">
                                <h5 className="careers_policytxt">Careers</h5>
                                <p>Alright. We 're not looking for ninjas, rockstars, or gurus. Can you imagine an office like that ? Throwing stars,cocaine and achieving
                                    nirvana don't rank high on our list. What we are looking for are people who are genuinely curious about cool things from around the world,
                                    people who love to travel, discover and appreciate products that are crafted locally, but have a global aesthetic.
                            </p>
                                <p> Currently, we have offices in New Delhi, Mumbai and the Bay Area. If you think you can build a career at Jaypore, we want to hear from
                                  you! We are Currently looking for creative merchandisers, copywriters, buyers, polyglot developers (look it up!), supply chain and logistics
                                  people. Get in touch with us at<span><a href="mailto:work@jaypore.com" target="_new" className="email-jaypore_client"> work@jaypore.com</a></span>
                                </p>
                            </div>
                        </div>
                        <div className="po-rl-ft-pa">
                        <Footer />
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}

export default Careers
