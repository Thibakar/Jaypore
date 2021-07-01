import React, { Component } from 'react'
import "../../assets/css/staticcontent.css";
import FooterPage from "../../components/common/footer/footer";
import HeaderPage from "../../components/common/header/header";



export class ReturnsPage extends Component {
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
                    <h5 className="returns_policytxt">Returns</h5>
                    <p className="returnspolicyheadline_text"> In the odd case that you do not love your Jaypore products, here is our policy on returns: </p>
                    <p><span className="number_systemId"> 1. </span>  products that are eligible for return, can be returned within 10 days ( 7 days for jewelry ) of receiving the merchandise.
                        Eligible products will be easily visible on our product screens under shipping information.
                    </p>
                    <p><span className="number_systemId"> 2. </span> In the unlikely event that your merchandise arrives damaged, you should email us a photo of the damaged product with
                        the Bar Code within 48 hours of receiving your order.
                    </p>
                    <p><span className="number_systemId"> 3. </span>Not all products are eligible for returns. In order to maintain fairness to our artisans and craftsmen, as well as keep our prices
                        fair, many items are " Final Sale" . Please make it a point to understand which products are eligible for returns before purchasing.
                    </p>
                    <p><span className="number_systemId"> 4. </span>  The Jaypore Care team must receive and approve your return request. Once your request is received and approved , we will arrange
                        for a return pick up at an agreed upon time.
                    </p>
                    <p> <span className="number_systemId"> 5. </span> Once you return has been authorized, we'd be happy to process your refund in the form of store credit, which will reflect in your 
                    Jaypore account within 24 working hours from when the product is picked up by our courier partner. However, if you'd like to receive the amount back 
                    to same payment mode that you used to place this order, we will initiate the refund after we receive the item and it has gone through the necessary
                    quality checks.</p>
                    <p> <span className="number_systemId"> 6. </span> We aim to process all returns within one 
                    (1) week. If you have any questions about your return, feel free to reach out to the Jaypore Care team at<span><a href="mailto:hello@jat"  className="email-jaypore_client" >  hello@jaypore.com</a></span></p>

                    <p> <span className="number_systemId"> 7. </span> All returns are subject to the discretion of Jaypore. But we're a friendly bunch :) </p>
                    <p> For any other questions or clarifications, please reach out to the Jaypore Care team at <span><a href="emailto:hello@jaypore.com" className="email-jaypore_client"> hello@jaypore.com</a></span></p>
                </div>
                </div>
              </div>
                   <FooterPage/>
               
                </div>
           </React.Fragment>
        )
    }
}

export default ReturnsPage
