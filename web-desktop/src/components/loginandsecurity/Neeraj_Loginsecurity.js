import React from "react";
import "../../assets/css/Neeraj.css";

class Neeraj_Loginsecurity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="grid-loginSecurity">
          <div className="container-login-security color-pink">
            <b class="ss ">Login & Security</b>
            <hr class="desktop-sa2-heading" />
            <div className="card-pink p-20">
              <div className="card p-20">
                <div className="row-loginSecurity">asdfajaf</div>
                <div className="row-loginSecurity">asdfajaf</div>
                <div className="row-loginSecurity">asdfajaf</div>
              </div>
            </div>
          </div>
        </div>
        {/* {this.state.Loginsecurity1Data.map(i => (
          <div class="grid">
            <b class="desktop-coupons-text1">{i.Heading}</b>
            <hr class="desktop-sa2-heading" />
            <div class="desktop-outer-gridls1">
              <div id="desktop-inner-grid1">
                <div class="row">
                  <b class="desktop-coupons-text2">{i.Name}</b>
                  <button class="desktop-ls1-button">{i.Button1}</button>

                  <span class="desktop-coupons-text2">{i.LName}</span>
                </div>
              </div>
              <div id="desktop-inner-grid2">
                {" "}
                <div class="row">
                  <b class="desktop-coupons-text2">{i.Mobile}</b>
                  <a href="#desktop-login-popup">
                    <button class="desktop-ls1-button2">{i.Button2}</button>{" "}
                  </a>

                  <span class="desktop-coupons-text2 ls1text1">
                    {i.AddMobile}
                  </span>
                </div>
              </div>
              <div id="desktop-inner-grid3">
                {" "}
                <div class="row">
                  <b class="desktop-coupons-text2">{i.Email}</b>

                  <span class="desktop-coupons-text2">{i.LEmail}</span>
                </div>
              </div>
              <div id="desktop-inner-grid4">
                {" "}
                <div class="row">
                  <b class="desktop-coupons-text2">{i.Password}</b>
                  <button class="desktop-ls1-button2">{i.Button1}</button>
                  <b class="desktop-coupons-text2">{i.LPassword}</b>
                </div>
              </div>
              <div id="desktop-inner-grid4">
                <div class="row">
                  <b class="desktop-coupons-text2">{i.DOB}</b>
                  <button class="desktop-ls1-button2">{i.Button1}</button>{" "}
                  <span class="desktop-coupons-text2">{i.LDOB}</span>
                </div>
              </div>
            </div>
          </div>
          //   </div>
        ))}
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
        {/* <div class="desktop-footer"  >
                    <div class="subfooter">
                        <div class="foot_part1">
                
                            <p class="desktop-footer-text2">Follow us on</p>
                            <div class="medialogo">
                                <img src={img8}  class="desktop-footer-image1"></img>
                                <img src={img12} class="desktop-footer-image1"></img>
                                <img src={img27} class="desktop-footer-image1"></img>
                                <img src={img20} class="desktop-footer-image1"></img>
                            </div>
                            <p  class="desktop-footer-text1"><strong>DEPARTMENTS</strong></p>
                            <p class="desktop-footer-text3">Clothing / Jewelry / Accessories / Home & Decor / Gifts & More / Jaypore Label </p>
                
                            <p class="desktop-footer-text1"><strong>POPULAR SEARCHES</strong></p>
                            <p class="desktop-footer-text3">Potli / Nose Pins / Chokers / Tie And Dye / Embroidered Kurta / Zari / Ruby / Runners </p>
                
                
                            <hr class="desktop-footer-line"></hr>
                
                        </div>
                        <div class="foot_part2">
                
                            <a class="desktop-footer-text4">Free* And Fast Shipping Worldwide
                
                    
                                <img src={img28} class="desktop-footer-image2"></img>
                                <img src={img9}  class="desktop-footer-image2"></img>
                                <img src={img21} class="desktop-footer-image2"></img>
                            </a>

                            <a class="desktop-footer-text5">Secure Payment And Cash On Delivery
                
                    
                                <img src={img17} class="desktop-footer-image4" ></img>
                                <img src={img29} class="desktop-footer-image3" ></img>
                                <img src={img18} class="desktop-footer-image3" ></img>

                            </a>
                            <a class="desktop-footer-text6">Questions?
                
                    
                                mail us at:<a class="desktop-footer-text7"> hello@jaypore.com</a>
                            </a>
                
                
                        </div>
            
                        <hr class="desktop-footer-line"></hr>
            
            
                        <p class="desktop-footer-text8">About GiftCards Careers FAQs ContactUs ReturnPolicy Shipping Terms Privacy Blog</p>
            
            
                        <hr class="desktop-footer-line"></hr>
            
            
                        <img src={img13} class="desktop-footer-image5"></img>
                        <p class="desktop-footer-text10">We'he hand-picked these products for you!</p>
            
            
                    </div>
                </div>
                <div id="desktop-login-popup" class="desktop-login-overlay">
	<div class="desktop-login-popup1">
    
		<a class="close1" href="#">×</a>
        <img class="desktop-ls1-image1" src={mobile} alt="img"></img><br/><br/>
		<div class="content">
            <b class="desktop-ls1-text1">Why add a mobile number? </b><br/><br/>
             <a class="desktop-ls1-text2">A mobile number can be used to send you </a><br/>
             <a class="desktop-ls1-text2">information about all that is happening at</a><br/>
             <a class="desktop-ls1-text3">Jaypore</a><br/><br/>
                            <button class="desktop-loginpopup-button"><a>Ok,got it</a></button>
		</div>
	</div>
</div> */}
      </div>
    );
  }
}

export default Neeraj_Loginsecurity;
