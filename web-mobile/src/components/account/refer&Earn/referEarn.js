import React from 'react';
import '../../../assets/css/common_Mobile.css';

import img14 from '../../../assets/Jaypore Assets/01 Icons/logo/Facebook.svg';
import img16 from '../../../assets/Jaypore Assets/01 Icons/logo/Group 3.svg';
import img17 from '../../../assets/Jaypore Assets/01 Icons/logo/Instagram.svg';
import img18 from '../../../assets/Jaypore Assets/01 Icons/logo//jaypore.png';
import img21 from '../../../assets/Jaypore Assets/01 Icons/logo/Pinterest.svg';
import img23 from '../../../assets/Jaypore Assets/01 Icons/logo/Instagram.svg';

import share from '../../../assets/Jaypore Assets/01 Icons/logo/Share.svg'
import Footer from '../../common/footer/footer'


class referEarn extends React.Component{
   
   constructor(props) {
    super(props);
    this.state = {
        color: true,
        data:
        {
            referalcode:"SHAHNAWAZ01"
        }
    }
}
    render() {
        return(
            <div>
            
            <header class="mobile-fixed-headerskr" >
                    <img   className="mycrossskr" src={img16} height="14" alt=""  onClick={() => this.props.history.goBack()}/>
                    <span className="mycreditskr sb-txt">Refer & Earn</span>
                    </header>

            <div class="mobile-body">
               <div class="srefer">
               <div class="sinvt">Invite Your Friends</div>
               <div class="sinvt1 ">with referral code</div>
               <div class="sinvitecode_button sb-txt">
                   <div class="flexskr">
                   <div style={{width:"110px",paddingTop:"10px",fontSize:"17px"}}>{this.state.data.referalcode}</div>
                   <img class="colorsharingskr" src={share} alt="img" style={{marginLeft:"30px",marginTop:"10px",color:"tomato",height:"25px"}}></img>
               </div>
               </div>
               
               <p class="sinvt2">Invite your friends. They get Rs. 500 off. You get a</p>
               <p class="sinvt2skr">Rs. 750 promo code on their first purchase</p>   
               </div>
               <div class="sixteenpxskr"></div>
                <div class="srefer1skr">
                
                <div  className="sb-txt howmargintopskr" style={{marginLeft:"0px",fontSize:"16px"}}>How it Works?</div>
                <p style={{marginTop:"-23px"}}><div style={{marginLeft:"0px",fontSize:"50px",color:"orange"}}>.</div> <div class="refer-your-friends"><div style={{fontWeight:"70",fontSize:"14px",color:"grey"}}>Invite your friends by sharing your referral code.</div></div></p>
                <p style={{marginTop:"-43px"}}><div style={{marginLeft:"0px",fontSize:"50px",color:"orange"}}>.</div> <div class="refer-your-friends"><div  style={{fontWeight:"70",fontSize:"14px",color:"grey"}}>When your friend signs up,we will give them Rs. 500 off their first order on Jaypore.</div></div></p>
                <p style={{marginTop:"-43px"}}><div style={{marginLeft:"0px",fontSize:"50px",color:"orange"}}>.</div> <div class="refer-your-friends"><div  style={{fontWeight:"70",fontSize:"14px",color:"grey"}}>Once your friend shops on Jaypore,you get Rs. 50 off every sucessful referal.And you can get earn up to Rs.7,500.</div></div></p><br/>
                <div className="sb-txt termmargintopskr" style={{marginLeft:"0px",fontSize:"16px"}}>Terms & Conditions</div><br></br>
                <p style={{marginTop:"-23px"}}><div style={{marginLeft:"0px",marginTop:"-10px",fontSize:"50px",color:"orange"}}>.</div> <div class="refer-your-friends"> <div  style={{fontWeight:"70",fontSize:"14px",color:"grey"}}>You can refer as many people.For each sucessful referral we will give you a Rs. 750 off code.Codes can not be clubbed and can be on seperate orders. You can avail up to 100 such codes.</div></div></p>
                <p style={{marginTop:"-43px"}}><div style={{marginLeft:"0px",fontSize:"50px",color:"orange"}}>.</div>  <div class="refer-your-friends"><div  style={{fontWeight:"70",fontSize:"14px",color:"grey"}}>Your friend can use your code to get Rs.500 off on their first purchase.This can be used only on orders of Rs.1500 and above</div></div></p>
                <p style={{marginTop:"-43px"}}><div style={{marginLeft:"0px",fontSize:"50px",color:"orange"}}>.</div>  <div class="refer-your-friends"><div  style={{fontWeight:"70",fontSize:"14px",color:"grey"}}>You will receive Rs.750 code 10 days after the product purchased by your friend is delivered.This can be referal.And you can get earn up to Rs.7,500 </div></div></p>
                </div>
            <br/>
            <Footer /> 
            </div>
            
            </div>
            
        )
    }
}

export default referEarn