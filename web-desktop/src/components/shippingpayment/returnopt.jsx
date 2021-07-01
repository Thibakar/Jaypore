import React, { Component } from 'react'
import "../../assets/css/termandcondition.css";
import Footer from "../shared/footer/footer";
import Header from "../shared/header/header";
import MenuComponent from "../shippingpayment/menustaticcontent";
export class Returnopt extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                 <div style={{ backgroundColor: "whitesmoke" }}>
             <div className="container">
                 <div className="return_us_content">
                     <div className="row">
                       <div className="col-md-2">
                           <MenuComponent/>
                       </div>
                       <div className="col-md-10" id="rectangledivsection">
                            <div className="returnsinJayporesection">
                            <h5 className="returnsSectionTitleJaypore">Returns</h5>
                          <p className="jaypr-policyReturn">In the odd case that you do not love your Jaypore products, here is our policy on returns:</p>
                          <p> 1. Products that are eligible for return, can be returned withen 10 days ( 7 days for jewellery) of receiving the merchandise. Eligible products 
                              will be easily visible on our product screens under shipping information.
                          </p>
                          <p> 2. In the unlikely event that your merchandise arrives damaged, you should <span><a href="mailto:hello@jaypore.com" className="colrSpanJayPReturnPolicy"> email us</a> </span> a photo of the damaged product with the Bar Code
                          withen 48 hours of receiving your order. </p>
                          <p> 3. Not all the products are eligible for returns. In order to maintain fairness to our artisans and craftsmen, as well as keep our prices fair, many items are
                               "Final Sale". Please make it a point to understand which products are eligible for returns before purchasing. </p>
                               <p> 4. The Jaypore Care team must receive and approve your return request. Once your request is received and approved, we will arrange for a return pick up at an agreed upon time.</p>
                                   <p> 5. Once your return has been authorized, we'd like to receive the amount back to the same payment mode that you used to place this order, we will initiate 
                                       the refund after we receive the item and it has gone through the necessary quality checks.
                                   </p>
                                   <p> 6. We aim to process all returns within one (1) week. If you have questions about your return, feel free to reach out to the 
                                       Jaypore Care team at <span><a href="mailto:hello@jaypore.com"  className="colrSpanJayPReturnPolicy">  hello@jaypore.com.</a></span>
                                   </p>
                                   <p> 7. All returns are subject to the discretion of Jaypore. But we're a friendly bunch :)</p>
                                   <p>For any other questions or clarifications, please reach out to the Jaypore Care team at <span><a href="mailto:hello@jaypore.com" className="colrSpanJayPReturnPolicy"> hello@jaypore.com</a></span></p>
                             
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

export default Returnopt
