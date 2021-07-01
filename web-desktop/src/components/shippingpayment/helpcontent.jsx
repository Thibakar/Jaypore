import React, { Component } from 'react'
import "../../assets/css/termandcondition.css";
import Footer from "../shared/footer/footer";
import Header from "../shared/header/header";
import MenuComponent from "../shippingpayment/menustaticcontent";

export class Helpcontent extends Component {
    render() {
        return (
            <React.Fragment>
                 <Header />
                 <div style={{ backgroundColor: "whitesmoke" }}>
             <div className="container">
                 <div className="return_us_content">
                     <div className="row">
                       <div className="col-md-2">
                           <div className="menuCompnent-llp">
                           <MenuComponent/>
                           </div>
                       </div>
                       <div className="col-md-10" id="rectangledivsection">
                            <div className="helpingPolicysinJayporesection">
                            <h5 className="helpingshippSectionTitleJaypore">Help</h5>
                            <p className="helpedAgreementsection"> About</p>
                            <p className="whatisJaypr"> What is Jaypore?</p>
                            <p>Jaypore is about bringing the world a little closer together. We discover the best designs from artisans and craftsmen from counteries
                                around the world, and deliver them at exceptional value to our members.
                            </p>
                            <p className="whatisJaypr"> What's up with that name?</p>
                            <p>Jaypore? It's a phonetic representation of Jaipur, one of India's most celebrated, beautiful and culturally rich citie. We sourced our very 
                                first product from this city, hence the tribute.
                            </p>
                            <p className="whatisJaypr"> Where does Jaypore get its products?</p>
                            <p>Jaypore sources products directly Artisans and craftsmen around the world. We guarantee the authenticity of each and every product we sell.</p>
                            <p className="helpedAgreementsection"> Events</p>
                            <p className="whatisJaypr"> How do Jaypore's events work?</p>
                            <p> Every day, Jaypore may launch one or two new events about amazing products from around the world. Our products span across various categories and price
                                points, so there's something for everyone! </p>
                                <p> Our finds are typically one of a kind, or extremely limited quantities, so if you like something , it's a good idea to log on as early as possible.</p>
                                <p className="whatisJaypr"> How will I learn about new events?</p>
                                <p>Jaypore members receive a daily email newsletter with information about the day's  new stories. Members will also receive push notifications
                                    on their iPad application. </p>
                                    <p className="whatisJaypr"> What is an item is Sold Out?</p>
                                    <p>If an item appears as SOLD OUT, it means there are unfortunately none left to buy. Members can opt to WAITLIST  items that are sold out.
                                        We will go back to artisan or craftsmen with your waitlist request to see if another unit can be produced, but no guarantee!
                                    </p>
                                    <p className="helpedAgreementsection"> Orders</p>
                                    <p className="whatisJaypr"> How can I check the status of my order?</p>
                                    <p>To check the status of your order, log on to wwww.jaypore.com and go to the  My Orders section under My Account. When items in your order 
                                        ship, we will add tracking information to this page. We will also email you when there is a status update to your order.  </p>
                                        <p className="whatisJaypr">What are the payment options at Jaypore?</p>
                                        <p> Jaypore accepts Visa and MasterCard. Customer can also choose to pay cash on delivery</p>
                                        <p className="whatisJaypr">Does Jaypore charges sales tax?</p>
                                        <p>All taxes are a part of the prices you see on the site. What you see if what you pay.</p>
                                        <p className="helpedAgreementsection"> Shipping</p>
                                        <p className="whatisJaypr"> How does Jaypore's ship products?</p>
                                        <p>We ship products to you directly from the source country , as fast as we can. All of our products pass through our quality 
                                            assurance facility before we package it and ship it off to you. Some of the items we sell are handmade upon purchase, which can increase 
                                            the shipping time. Please make sure to check the "Shipping Info" on the product screen to see item's estimated arrival.
                                        </p>
                                        <p className="whatisJaypr">What  are the Jaypore's shipping rate?</p>
                                        <p>Please refer to out Shipping section to learn about shipping rates.</p>
                                        <p className="helpedAgreementsection"> Returns</p>
                                        <p className="whatisJaypr"> What is Jaypore's return policy?</p>
                                        <p>We're a friendly bunch, and we know that sometimes you might just have a change of heart. Our <span><a href="mailto:hello@jaypore.com" className="policyReturnW"> Return Policy</a></span> can help clarify how to go 
                                        about returning items in your . You can also email us if you have any questions, and we'll  do everything we can to help.</p>
                                        <p className="whatisJaypr"> What if  I have a problem with  an item that is not retainable?</p>
                                        <p>Give us a <span>shout</span>, and I'm sure we can work something out. We want to make life easier for you.</p>
                                        <p className="helpedAgreementsection"> Accounts</p>
                                        <p className="whatisJaypr"> What if I forget my password?</p>
                                        <p>Easy. Tap on the question mark icon in the Password field when you load the iPad application. If you have any trouble, please <span><a href="mailto:hello@jaypore.com" className="policyReturnW"> contact</a> </span> the Jaypore Care team. </p>
                                        <p className="whatisJaypr"> How do I change my username or email address</p>
                                        <p>Once you long into the iPad application, tap on the settings icon, and then tap on Accounts Info</p>

                                        <p className="whatisJaypr"> How can I change my email settings?</p>
                                        <p> You can control the emails you receive on your Email Preferences screen, found after tapping the settings icon.</p>




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

export default Helpcontent
