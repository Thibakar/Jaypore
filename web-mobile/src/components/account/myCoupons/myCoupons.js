import React from 'react'
import '../../../assets/css/common_Mobile.css';
import img14 from '../../../assets/Jaypore Assets/01 Icons/logo/Facebook.svg';
import img16 from '../../../assets/Jaypore Assets/01 Icons/logo/Group 3.svg';
import img17 from '../../../assets/Jaypore Assets/01 Icons/logo/Instagram.svg';
import img18 from '../../../assets/Jaypore Assets/01 Icons/logo/jaypore.png';
import img21 from '../../../assets/Jaypore Assets/01 Icons/logo/Pinterest.svg';
import img23 from '../../../assets/Jaypore Assets/01 Icons/logo/Twitter.svg';
import img2 from '../../../assets/Jaypore Assets/01 Icons/logo/Dropdown Arrow.svg'
import Footer from '../../common/footer/footer'



class myCoupons extends React.Component{
   
  constructor(props) {
    super(props);
    this.state = {
        couponcode:"U23ILQ",
            Couponvalue:"Rs. 250",
            redemptionstatus:"ACTIVE",
            expireson:"12 Jan 2019",
        color: true,
        data:
        [
           
           {
            couponcode:"2QUZAS",
            Couponvalue:"Rs. 350",
            redemptionstatus:"EXPIRED",
            expireson:"12 Aug 2019"
           },
           {
            couponcode:"UAMN8",
            Couponvalue:"Rs. 250",
            redemptionstatus:"ACTIVE",
            expireson:"14 Mar 2019"
           },
           {
            couponcode:"JMB13HAI",
            Couponvalue:"Rs. 250",
            redemptionstatus:"EXPIRED",
            expireson:"19 Dec 2019"
           },
          
    ]
}
  }


    render() {
        return(
            <div>
            
              
            <div class="mobile-fixed-headerskr">
                    <img   className="mycrossskr" src={img16} height="14" alt=""  onClick={() => this.props.history.goBack()}/>
                    <span className="mycreditskr sb-txt">My Coupons</span>
                    </div> 
                    <div className="paddingafterheadiercoupanskr">
                <div className="containercreditinsideskr">
            {/* <div class="mobile-body">*/}
                {/* <div id="mobile-coupon-box"> */}
                    <div class="contentskr">
                    
                         <div>
                         <div class="flexskr">  
          <div>
              <div class="mobile-coupon-code">Coupon Code</div> 
              <div class="mobile-coupon-scratch ">{this.state.couponcode}</div>
              </div>
           <div>
          <div class="mobile-coupon-value">Coupon Value</div>
          <div class="mobile-coupon-amount ">{this.state.Couponvalue}</div>
          </div>
       <div>
          <div class="mobile-coupon-redemption">Redemption Status</div>
          <div class="mobile-coupon-status ">{this.state.redemptionstatus}</div>
      </div>
      </div>
        <div class="flexskr martopskr">
          <div class="mobile-coupon-col leftc"><div class="mobile-coupon-expiry">Expires on:{this.state.expireson}</div></div>
          <div class="mobile-allign">
          <div class="flexskr">
              <div class="mobile-coupon-tnc">Terms & Conditions</div><img class="mobile-coupon-drop" src={img2}></img> 
              </div>  </div>
        </div>
        
                           </div>
                           {
                                    this.state.data.map((item, i) => (
                                        <div>
                                             <div class="mobilespacecoupanskr"></div>
                                       <div class="flexskr">  
                        <div>
                            <div class="mobile-coupon-code">Coupon Code</div> 
                            <div class="mobile-coupon-scratch ">{item.couponcode}</div>
                            </div>
                         <div>
                        <div class="mobile-coupon-value">Coupon Value</div>
                        <div class="mobile-coupon-amount ">{item.Couponvalue}</div>
                        </div>
                     <div>
                        <div class="mobile-coupon-redemption">Redemption Status</div>
                        <div class="mobile-coupon-status ">{item.redemptionstatus}</div>
                    </div>
                    </div>
                      <div class="flexskr martopskr">
                        <div class="mobile-coupon-col leftc"><div class="mobile-coupon-expiry">Expires on:{item.expireson}</div></div>
                        <div class="mobile-allign">
                        <div class="flexskr">
                            <div class="mobile-coupon-tnc">Terms & Conditions</div><img class="mobile-coupon-drop" src={img2}></img> 
                            </div>  </div>
                      </div>
                     
                                         </div>
                                    ))
                                } 
                       
                              </div>
                              </div>
                              </div>
                              <Footer /> 
            </div>
            
            
        )
    }
}

export default myCoupons