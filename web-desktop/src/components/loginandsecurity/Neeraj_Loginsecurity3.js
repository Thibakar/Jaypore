import React from 'react';
import img from './logo/jaypore.png'
import img1 from './logo/Dropdown Arrow.svg'
import img2 from './logo/Sale.svg'
import img3 from './logo/Search.svg'
import img4 from './logo/Bag.svg'
import img5 from './logo/hambutton.png'
import facebook from './logo/Facebook.svg'
import img7 from './logo/earrings.jpg'
import img8 from './logo/Facebook.svg'
import img9 from './logo/fedex.svg'
import img12 from './logo/Instagram.svg'
import img13 from './logo/jaypore.png'
import img17 from './logo/payu.svg'
import img18 from './logo/Razorpay.svg'
import img20 from './logo/Twitter.svg'
import img21 from './logo/ups.svg'
import img27 from './logo/pi.png'
import img28 from './logo/aramex.svg'
import img29 from './logo/Braintree.svg'
import delete1 from './logo/Delete.svg'
import deleteM from './logo/Delete on Modal.svg'
import add from './logo/Add.svg'
import edit from './logo/Edit.svg'
import confirm from './logo/Order Confirmation.svg'

import './Neeraj.css'

class Neeraj_Loginsecurity3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loginsecurity3Data : [
                {
                    Heading : "Login & Security",
                    Name : "Name",
                    LName : "Shahnawaz Alam",
                    Button1 : "Edit",
                    Button2 : "Add",
                    Mobile : "Mobile Phone Number:",
                    AddMobile : "Why Add Mobile Number?",
                    Email : "Email:",
                    LEmail : "shahnawaz.alam@jaypore.com",
                    Password : "Password:",
                    LPassword : "*******",
                    DOB : "Date of Birth:",
                    LDOB : "DD/MM/YY"  ,
                    Success : "Success",
                    LImageText1 : "Name has been modified"

                }
            ]
        }
    }
    render(){
        return(
            <div>
                {/* <header class="desktop-header">
                    <div class="desktop-topnav jc">
                        <img class="desktop-logo" src={img} alt="img"></img>
                        <p>SHOP BY CATEGORY&nbsp;<img src={img1} alt="img"></img></p>
                        <p>WHAT'S NEW</p>
                        <p>JAYPORE LABEL&nbsp;<img src={img1} alt="img"></img></p>
                        <p>LUXE</p>
                        <p class="img2">SALE&nbsp;<img class="img2" src={img2} alt="img"></img></p>
                        <p><img class="desktop-icon-zoom-in" src={img3} alt="img" ></img>
                            <input type="desktop-text" ></input></p>
                        <p>My Bag&nbsp;&nbsp;<img src={img4} alt="img"></img></p>
                        <p><img class="desktop-hambutton" src={img5} alt="img"></img></p>
                    </div>
                </header> */}
                {
                    this.state.Loginsecurity3Data.map(i=>(
<div class="grid"><br />
          <div class="desktop-outer-gridls"><br />
            <b class="desktop-coupons-text1">{i.Heading}</b>
            <hr class="desktop-sa2-heading"></hr>
            <div class="desktop-outer-gridls1">
              <div id="desktop-innerlogin-grid1">
                <div class="row">
                 <img src={confirm} alt="img"></img>
                    <a class="desktop-coupons-text2 ls3text1">{i.Success}</a><br />
                    <a class="desktop-coupons-text2 ls3text2">{i.LImageText1}</a>
                
                </div>
              </div>
              <div id="desktop-inner-grid2">        <div class="row">
                          
                                <b class="desktop-coupons-text2">{i.Mobile}</b>
                                <a href="#desktop-login-popup"><button class="desktop-ls1-button2">{i.Button2}</button> </a><br/>
                                <span class="desktop-coupons-text2 ls1text1">{i.AddMobile}</span>
                               
                          
                            </div>
                            </div>
                            <div id="desktop-inner-grid3">        <div class="row">
                  
                                <b class="desktop-coupons-text2">{i.Email}</b><br />
                                <span class="desktop-coupons-text2">{i.LEmail}</span>
                      
                            </div>
                            </div>
                            <div id="desktop-inner-grid4">        <div class="row">
                              
                                <b class="desktop-coupons-text2">{i.Password}</b>
                                <button class="desktop-ls1-button2">{i.Button1}</button> <br/>
                                <b class="desktop-coupons-text2">{i.LPassword}</b>
                               
                          
                            </div>
                            </div>
                            <div id="desktop-inner-grid4">        <div class="row">
                              
                                <b class="desktop-coupons-text2">{i.DOB}</b>
                                <button class="desktop-ls1-button2">{i.Button1}</button> <br />
                                <span class="desktop-coupons-text2">{i.LDOB}</span>
                                
                      
                            </div>
                            </div>
            </div>
          </div>
        </div>
                    ))
                }
                
            </div>
        )
    }
}

export default Neeraj_Loginsecurity3