import React, { Component } from 'react';
import "../../assets/css/staticcontent.css";
import FooterPage from "../../components/common/footer/footer";
// import Header from '../common/header/header';
import HeaderPage from "../../components/common/header/header";

export class Shippingpolicy extends Component {
    render() {
        return (
            <React.Fragment>

                <div>
                    <div className="headerMenustyle01">
                        <div>
                            <HeaderPage />
                        </div>
                        <div className="sh-p-policy-alg-itm">   
                             <div className="shipping_policymain_content">
                                <h5 className="shippin_policytxt">Shipping Policy</h5>
                                <p> 1. At Jaypore, we take great care in delivering your products to you, and we partner only with reputed national couriers.
                                    Shipping within India is FREE for all orders above Rs. 999 ( starting 3pm, Wednesday, 26th August, 2015). For orders below that,
                                    we charge a flat Rs. 100 shipping fee.
                                 </p>
                                <p> 2. Because each craftman and artisan's process is unique, shipping time may vary. Look for shipping info on the product page for individual shipping times.
        
                                 </p>
                                <p> 3. Our courier partner will be able to deliver the shipment to you between Monday through Saturday:9am to 7pm. Working days exclude public holidays and Sundays. Delivery time is subject to factors beyond our control including unexpected travel delays from our courier partners and transporters due to weather conditions and strikes. </p>
                                <p> 4. Address change will be accepted only if order has not been shipped. Address change is only possible if new location is within the same state.  </p>
                                <p> 5. As soon as your package ships, we will email you your package tracking information.</p>
                                <h5 className="shippin_policytxt">Cancellations</h5>
                                <p> Cancellation requests will be accepted strictly within 24 hours of placing the order only.</p>

                            </div>
                            </div>

                    </div>
                    <FooterPage />
             </div>
        </React.Fragment>
        )
    }
}

export default Shippingpolicy
