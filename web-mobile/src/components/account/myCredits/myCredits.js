import React from 'react'
import '../../../assets/css/common_Mobile.css';
import img14 from '../../../assets/Jaypore Assets/01 Icons/logo/Facebook.svg';
import img16 from '../../../assets/Jaypore Assets/01 Icons/logo/Group 3.svg';
import img17 from '../../../assets/Jaypore Assets/01 Icons/logo/Instagram.svg';
import img18 from '../../../assets/Jaypore Assets/01 Icons/logo/jaypore.png';
import img21 from '../../../assets/Jaypore Assets/01 Icons/logo/Pinterest.svg';
import img23 from '../../../assets/Jaypore Assets/01 Icons/logo/Twitter.svg';
import Footer from '../../common/footer/footer'

class myCredits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: true,
            data:
            {
                availablecredits: "Available Credits",
                totalcreditsrecieved: "Rs. 15000",
                creditsummarytext: "You can apply your credits at the time of checkout.",
                creditsummary: [
                    {

                        recievedOn: "Apr 13 2018",
                        expiresOn: "Apr 13 2019",
                        details: "Refund Points",
                        amount: "Rs. 5000"
                    },
                    {

                        recievedOn: "May 28 2017",
                        expiresOn: "May 28 2018",
                        details: "Refund Points",
                        amount: "Rs. 617"
                    },
                    {

                        recievedOn: "May 28 2017",
                        expiresOn: "May 28 2018",
                        details: "Gift Voucher",
                        amount: "Rs. 617"
                    },
                    {

                        recievedOn: "May 28 2017",
                        expiresOn: "May 28 2018",
                        details: "Refund Points",
                        amount: "Rs. 617"
                    },
                    {

                        recievedOn: "May 28 2017",
                        expiresOn: "May 28 2018",
                        details: "Gift Voucher",
                        amount: "Rs. 617"
                    }
                ],
                Creditusedtext: "Here is your used credi details.",
                credituseddata: ["Amount", "Used On", "Order No."],
                creditused: [
                    {
                        amount: "Rs. 617",
                        usedon: "Dec 20 2017",
                        orderno: "200318396"
                    },
                    {
                        amount: "Rs. 500",
                        usedon: "Jun 15 2016",
                        orderno: "200122943"
                    },
                    {
                        amount: "Rs. 500",
                        usedon: "Jun 15 2016",
                        orderno: "200122943"
                    },
                    {
                        amount: "Rs. 500",
                        usedon: "Jun 15 2016",
                        orderno: "200122943"
                    },
                    {
                        amount: "Rs. 500",
                        usedon: "Jun 15 2016",
                        orderno: "200122943"
                    }
                ]
            }

        }
    }
  
    render() {
        console.log("this is the", this.state.data.creditsummary)
        return (
            <div >  
                 {/* <div className="containercreditskr"> */}
                 
                <div class="mobile-fixed-headerskr">
                    <img   className="mycrossskr" src={img16} height="14" alt=""  onClick={() => this.props.history.goBack()}/>
                    <span className="mycreditskr sb-txt">My Credits</span>
                    </div>
               <div className="paddingafterheadierskr">
                <div className="containercreditinsideskr">
                <div className="flexskr">
                    <div class="mobile-rectangle-line1skr">Available Credits </div><div class="mobile-rectangle-line2skr">Total Credits Recieved</div>
                       </div>
                           
                           <div className="flexskr">
                                <div class=" mobile-rectangle-line3skr">Rs. 15000</div><div class="mobile-rectangle-line4skr">Rs. 15000</div> 
                                  </div> 
                                <div class="mobile-spaceskr"></div>
                              <div> <div class="mobile-credit sb-txt">Credit Summary</div>
                                <div class="mobile-credit-lineskr">You can apply your credits at the time of checkout.</div>
                               </div>
                               <div class="mobile-spaceskr"></div>


                                <div class="flexskr">
                                    <div class="sb-txt headingfontskr1 marginmiddleskr">Recieved On</div><div class="sb-txt headingfontskr2 marginmiddleskr">Expires On</div><div class="sb-txt headingfontskr3 marginmiddleskr">Details</div><div class="sb-txt headingfontskr4 marginmiddleskr">Amount</div>
                                    </div>
                                    <div class="mobile-spacexskr"></div> 
                                {
                                    this.state.data.creditsummary.map((item, i) => (
                                        <div>
                                        <div className="flexskr">
                                            
                                    
                                            <div class="headingfontskr1">{item.recievedOn}</div>
                                            <div class="headingfontskr2">{item.expiresOn}</div>
                                   <div class="headingfontskr3">{item.details}</div>
                                             <div class="headingfontskr4"> {item.amount}</div>                                    
                                                </div>
                                         <div class="mobile-spacexskr"></div>
                                         </div>
                                    ))
                                } 
                                  <div className="flexskr marginmiddleprevnextskr">
                                <div class="mobile-credit-prev">&lt; PREVIOUS</div><div class="mobile-credit-preva">1</div><div class="mobile-credit-prevb">2</div><div class="mobile-credit-prevb">3</div><div class="mobile-credit-prevb">4</div><div class="mobile-credit-prevb">5</div><div class="mobile-credit-next">NEXT &gt;</div>
                               </div>
                            <br></br>
                                <div class="sixteenpxskr"></div>
                                <div> <div class="mobile-credit sb-txt">Credit Used</div>
                                <div class="mobile-credit-lineskr">Here is your used credi details.</div>
                               </div>
                               <div class="mobile-spaceskr"></div>  
                               <div class="flexskr">
                                <div class="mobile-cred-use sb-txt">Amount</div><div class="mobile-cred-usea sb-txt">Used On</div><div class="mobile-cred-useb sb-txt">Order No.</div>
                                </div>
                                <div class="mobile-spaceskr"></div> 
                                {
                                    this.state.data.creditused.map((item, i) => (
                                        <div> 
                                     <div className="flexskr">
                                            <div class="mobile-cred-use">{item.amount}</div>
                                            <div class="mobile-cred-usea">{item.usedon}</div>
                                   <div class="mobile-cred-useb">{item.orderno}</div>                                  
                                                </div>
                                         <div class="mobile-spaceskr"></div>
                                         </div>
                                    ))
                                } 
                                
                                <div className="flexskr marginmiddleprevnextskr">
                                <div class="mobile-credit-prev">&lt; PREVIOUS</div><div class="mobile-credit-preva">1</div><div class="mobile-credit-prevb">2</div><div class="mobile-credit-prevb">3</div><div class="mobile-credit-prevb">4</div><div class="mobile-credit-prevb">5</div><div class="mobile-credit-next">NEXT &gt;</div>
                               </div>
                            <br></br>
                        </div>
                        <div class="sixteenpxskr"></div>
                        <Footer /> 
                    
                    </div>
            
</div>


        )
    }
}
export default myCredits
