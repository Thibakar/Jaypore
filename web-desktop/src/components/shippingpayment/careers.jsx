import React, { Component } from 'react'
import "../../assets/css/termandcondition.css";
import Footer from "../shared/footer/footer";
import Header from "../shared/header/header";
import MenuComponent from "../shippingpayment/menustaticcontent";
export class Careers extends Component {
    render() {
        return (
              <React.Fragment>
                 <Header />
                  <div style={{ backgroundColor: "whitesmoke" }}>
                 <div className="container">
                   <div className="careers_content_jaypore">
                       <div className="row">
                           <div className="col-md-2">
                            <MenuComponent/>
                           </div>
                           <div className="col-md-10" id="rectangledivsection">
                            <div className="careersinJayporesection">
                                <h5 className="careersSectionTitleJaypore">Careers</h5>
                                <p>Alright, We're not looking for ninjas, rockstars, or gurus. Can you imagine an office like that ? Throwing stars, cocaine and achieving nirvana
                                    don't rank high on our list. What we are looking for are people who are genuinely curious about cool things from around the world, people who love to travel, discover and 
                                    appreciate products that are crafted locally, but have a global aesthetic.
                                    Currently, we have office in New Delhi, Mumbai and the Bay Area. If you think you can build a career at Jaypore,we want to hear from you!
                                    we are currently looking for creative merchandisers, copywriters, buyers, polyglot developers (look it up!),supply chain and logistics people
                                    . Get in touch with us at <span><a href="mailto:work@jaypore.com" className="workjayporeEmailId"> work@jaypore.com.</a></span>  
                                </p>
                            </div>
                           </div>

                       </div>
                        </div>
                   </div>

               </div>
               <div className="footer-standardx">
               <Footer />
               </div>
               </React.Fragment>
        
        )
    }
}

export default Careers
