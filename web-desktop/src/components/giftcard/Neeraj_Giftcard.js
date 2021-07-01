import React from 'react';
import img from './logo/jaypore.png'
import img1 from './logo/Dropdown Arrow.svg'
import img2 from './logo/Sale.svg'
import img3 from './logo/Search.svg'
import img4 from './logo/Bag.svg'
import img5 from './logo/hambutton.png'
import birthday from './logo/birthday.jpeg'
import wedding from './logo/kindpng_962654.png'
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

import './Neeraj.css'

class Neeraj_Giftcard extends React.Component {
    render(){
        return(
            <div>
                 <header class="desktop-header">
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
                </header>
                <div class="desktop-gift-grid"><br/>
                <div class="desktop-address-grid1"><br/>
                <b class="desktop-coupons-text1">Gift Cards</b>
                <hr class="desktop-sa2-heading"></hr>
                
    <div class="desktop-gift1-grid1">
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"></input>
            <img class="desktop-gift1-image1" src={birthday} alt="img"></img>
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""></input>
            <img class="desktop-gift1-image1" src={birthday} alt="img"></img>
        <label for="carousel-3" class="carousel-control prev control-1">‹</label>
        <label for="carousel-2" class="carousel-control next control-1">›</label>
        <label for="carousel-1" class="carousel-control prev control-2">‹</label>
        <label for="carousel-3" class="carousel-control next control-2">›</label>
        <label for="carousel-2" class="carousel-control prev control-3">‹</label>
        <label for="carousel-1" class="carousel-control next control-3">›</label>
   </div><br/>
  </div>
  <div class="desktop-gc-grid2">
<b>Terms & Conditions:</b>
<span class="desktop-dot gc1">.</span><span>Gift cards can be added to account by using the code that is received on e-mail.The code will add the same</span>
<span class="gc2" >amount of credit to a recipient's account as paid for by the sender.</span>
<span class="desktop-dot gc1" >.</span><span>The Gift Card cannot be exchanged for cash, cheque or card funds. </span>
<span class="desktop-dot gc1" >.</span><span>Gifts Cards are only redeemable for merchandise on</span> <span class="lstext1">www.jaypore.com</span>

<span class="desktop-dot gc1">.</span><span>Gifts cannot be used to purchase Gift Cards or Vouchers.</span>
<span class="desktop-dot gc1" >.</span><span>The Gift Card will expire 3 months from once it is used to add credit tp the recipient's account.At expiry,any</span>
<span class="gc2" >remaining balance will be lost. The gift card code has no expiry date till the time it is not used to add credit to</span>
<span class="gc2" >an account.</span>
<span class="desktop-dot gc1" >.</span><span>Gift cards cannot be returned or refunded,except in accordance with your legal rights.</span>
<span class="desktop-dot gc1">.</span><span>Please protect this Gift Card and treat it as cash.Jaypore cannot be held liable for Gift Cards which,once</span>
<span class="gc2" >activated,are subsequently lost,stolen or damaged.</span>
<span class="desktop-dot gc1" >.</span><span>If any product purchased with a Gift Card is exchanged or refunded,any money owing will be added to the</span>
<span class="gc2" >account as credit points.</span>
<span class="desktop-dot gc1">.</span><span>Jaypore reserves the right to refuse to accept a Gift Card which it deems to have been duplicated,faked or</span>
<span class="gc2" >which otherwise is suspected to be affected from fraud.</span>
<span class="desktop-dot gc1">.</span><span>Jaypore reserves the right to change any of these terms and conditions from time to time without notice and</span>
<span class="gc2">to take appropriate action including cancellation of the card if,at its discretion,it deems such action</span>
<span class="gc2">necesary(e.g. to change the scope of the Gift Card service,notify of the service's withdrawal or in the event</span>
<span class="gc2">of circumstances beyond its control).</span>
  </div>
  </div>
            </div>
        )
    }
}

export default Neeraj_Giftcard