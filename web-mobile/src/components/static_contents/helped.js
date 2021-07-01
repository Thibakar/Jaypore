import React, { Component } from 'react'
import "../../assets/css/staticcontent.css";
import FooterPage from "../../components/common/footer/footer";
import HeaderPage from "../../components/common/header/header";

export class Helped extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="headerMenustyle01">
                        <div>
                            <HeaderPage />
                        </div>
                        <div className="hlp-context-i-em">
                        <div className="helped_policymain_content">
                            <h5 className="helped_policytxt">Help</h5>
                            <p className="aboutUsJayprmobile">About</p>
                            <p className="whatisJayprmobile">What is Jaypore?</p>
                            <p> Jaypore is about bringing the world a little closer together. We discover the best designs from artisans and craftsmen from
                                countries around the world, and deliver them at exceptional value to our members.
                        </p>
                            <p className="whatisJayprmobile">What's up with that name?</p>
                            <p>Jaypore ? It's a phonetic representation of Jaypore, one of India's most celebrated, beautiful and culturally rich cities. We sourced
                                our very first product from this city, hence the tribute.
                        </p>
                            <p className="whatisJayprmobile">Where does Jaypore get its products?</p>
                            <p> Jaypore sources products directly from artisans and craftsmen around the world. We guarantee the authenticity of each and every product we sell.</p>
                            <p className="aboutUsJayprmobile">Events</p>
                            <p className="whatisJayprmobile">How do Jaypore's events work?</p>
                            <p>Every day, Jaypore may launch one or two new events about amazing products from around the world. Our products span across various categories and price point, so there 's something for everyone!</p>
                            <p> Our finds are typically of a kind, or extremely limited quantities, so if you like something, it's a good idea to log on as early as possible. </p>
                            <p className="whatisJayprmobile">How will I learn about new events?</p>
                            <p> Jaypore members receive a daily email newsletter with information about the day's new stories. Members will also receive push notifications on their
                                iPad application.
                        </p>
                            <p className="whatisJayprmobile">What if an item is Sold Out?</p>
                            <p> If an item appears as SOLD OUT, it means there are unfortunately none left to buy.  Members can opt to WAITLIST items that are sold out. We will go back to artisan or craftsmen with your waitlist
                                request to see if another until can be produced, but no guarantee!
                        </p>
                            <p className="aboutUsJayprmobile">Orders</p>
                            <p className="whatisJayprmobile">How can I check the status of my order?</p>
                            <p>To check the status of your order www.jaypore.com and go to My orders section under My Account. When items in your order ship, we
                            will add tracking information to this page. We will also email you when there is status update to your order.   </p>
                            <p className="whatisJayprmobile">What are the payment options at Jaypore?</p>
                            <p> Jaypore accepts Visa and MasterCard. Customer can also choose to pay cash on delivery.</p>
                            <p className="whatisJayprmobile">Does Jaypore charge sales tax?</p>
                            <p> All taxes are a part of the prices you see on the site. What you see is what you pay. </p>
                            <p className="aboutUsJayprmobile">Returns</p>
                            <p className="whatisJayprmobile">What is Jaypore's return policy?</p>
                            <p> We 're a friendly bunch, and we know that sometimes you might just have a change of heart. Our <span> Return Policy</span> can help clarify how to
                            go about returning items in your order. you can also email us if you have any questions, and we'll do everything we can to help.</p>
                            <p className="whatisJayprmobile">What if I have a problem with an item that is not retainable?</p>
                            <p> Give us a <span> shout</span>, and I'm sure we can work something out. We want to make life easier for you. </p>
                            <p className="aboutUsJayprmobile">Account</p>
                            <p className="whatisJayprmobile">What if I forget my password?</p>
                            <p> Easy. Tap on the question mark icon in the password field when you load the iPad application. If you have any trouble , please
                                <span> contact the Jaypore Care  team. </span>
                            </p>
                            <p className="whatisJayprmobile">How do I change my username or email address?</p>
                            <p> Easy. Tap on the question mark icon in the password field when you load the iPad application. If you have any trouble, please<span> contact </span>
                                the Jaypore Care team.
                            </p>
                            <p className="whatisJayprmobile">How can I change my email settings?</p>
                            <p> you can control the emails you receive on your Email preferences screen, found after tapping the Setting icon.</p>
                        </div>
                        </div>
                    </div>
                    <FooterPage />

                </div>
            </React.Fragment>
        )
    }
}

export default Helped
