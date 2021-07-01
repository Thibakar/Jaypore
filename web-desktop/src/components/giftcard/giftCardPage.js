import React, { Component } from 'react';
import Header from '../shared/header/header'
import Footer from '../shared/footer/footer';
import "../../assets/css/giftcard.css";
// import "../../assets/css/style.css";
// import '../../assets/css/shipping-payment.css';

export default class Giftcarddata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvailOpen: false,
      RecentItemsData: [
        {

          imgurl1:
            "https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443__340.jpg",
          imgurl1: "https://cdn.pixabay.com/photo/2016/06/17/16/42/bouquet-1463562__340.jpg",
          headertext: "Let's make a  nice  Birtday card ",
          uploadphototext: "Let's upload a photo",
          personalizedsms: "Your personalised message will be sent on the e-gift card.",
          Recepientemail: "Recipent's Email Address",
          Recepientname: "Recipient Name",
          receiptmessage: "Message",
          sendername: "Sender Name",
          textbtn: "Buy Gift card",
        
          paraheade:"Happy Anniversary",
          paradesc:"Wish you loved ones by Sending jaypore Gift cards"
        

        },
        {
          imgurl1: "https://cdn.pixabay.com/photo/2016/06/17/16/42/bouquet-1463562__340.jpg",
          headertext: "Let's make a  nice  Birtday card ",
          uploadphototext: "Let's upload a photo",
          personalizedsms: "Your personalised message will be sent on the e-gift card.",
          Recepientemail: "Recipent's Email Address",
          Recepientname: "Recipient Name",
          receiptmessage: "Message",
          sendername: "Sender Name",
          textbtn: "Buy Gift card",
        
          paraheade:"",
          paraheade:"Good Luck",
          paradesc:"Wish you loved ones by Sending jaypore Gift cards"

        },
        {
          imgurl1: "https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040__340.jpg",
          headertext: "Let's make a  nice  Birtday card ",
          uploadphototext: "Let's upload a photo",
          personalizedsms: "Your personalised message will be sent on the e-gift card.",
          Recepientemail: "Recipent's Email Address",
          Recepientname: "Recipient Name",
          receiptmessage: "Message",
          sendername: "Sender Name",
          textbtn: "Buy Gift card",
        
          paraheade:"",
          paraheade:"Good Luck For Birthday",
          paradesc:"Wish you loved ones by Sending jaypore Gift cards"

        },
        {
          imgurl1: "https://cdn.pixabay.com/photo/2016/06/17/16/42/bouquet-1463562__340.jpg",
          headertext: "Let's make a  nice  Birtday card ",
          uploadphototext: "Let's upload a photo",
          personalizedsms: "Your personalised message will be sent on the e-gift card.",
          Recepientemail: "Recipent's Email Address",
          Recepientname: "Recipient Name",
          receiptmessage: "Message",
          sendername: "Sender Name",
          textbtn: "Buy Gift card",
        
          paraheade:"",
          paraheade:"Happy Birthday to you",
          paradesc:"Wish you loved ones by Sending jaypore Gift cards"

        },
        

      ]
    };

  }

  render() {
    return (
      <div>
        <Header />
        <div class="grid">
          <br />
          <div className="desktop-giftcards-main-container">
            <h1 class="desktop-giftcard-text1">Gift Cards</h1>
          </div>
          <hr className="desktop-mycoupoun-line-btm" />

          <div class="desktop-gift-main-wrapper">
            <div className="giftcard-second-wrapper sb-txt col-12 " style={{ textAlign: 'right' }}>
              <div className="w3-btn m-r-5" >
                <button className="w3-hide-small a-sb-txt a-12-txt a-colr-21">&lt; PREVIOUS</button>
              </div>
              <div className="w3-btn ">
                <button className="w3-hide-small a-sb-txt a-12-txt a-colr-21">NEXT &gt;</button>
              </div>
            </div>
            <div class="gift-row">
              {this.state.RecentItemsData.map(i => (
                <React.Fragment  >
                  <div className="image-wrapper-containerone" >
                    <img src={i.imgurl1} alt="" />
              <h1 className="giftcard-text">{i.paraheade}</h1>
              <p className="gitftcard-para-text">{i.paradesc}</p>
                  </div>
                  {/* <div className="image-wrapper-containerone">
                    <img src={i.imgurl2} alt="" />
                    <h1 className="giftcard-text">Good Luck</h1>
                    <p className="gitftcard-para-text">Wish you loved ones by Sending jaypore Gift cards</p>
                  </div> */}


                </React.Fragment>
              ))}
            </div>
          </div>
          <div class="desktop-gift-main-wrapper-second">

            <div className="termandcondition-container-giftcard">
              <h1 className="termandcondition-txt" >Terms & Conditions:</h1>
              <ul className="list-items-gift-card">
                <li className="gift-card-termandcondition-list">
                  Gift cards can be added to account by using the code is reached on e-mail. The code will be addred the same amount of credit to a recipient's account as paid for by the sender.
                  </li>
                <li className="gift-card-termandcondition-list">
                  The Gift Card cannot be exchanged  for cash , cheque or card funds.
                  </li>
                <li className="gift-card-termandcondition-list">
                  Gift Cards are only redeemable for the merchandise on <a className="jayporeurltex" href="#">www.jaypore.com</a>
                </li>
                <li className="gift-card-termandcondition-list">
                  Gift Card cannot be used to purchase Gift Cards or Vouchers.
                  </li >
                <li className="gift-card-termandcondition-list">
                  The  Gift  Card will be expire 3 months from once it is used to add credit to the recepients's account. At expire,Any remaining balance will be lost. The Gift cards code has no expiry date till the time it is not used to add credit to an account.
                  </li  >
                <li className="gift-card-termandcondition-list" >
                 Gift Cards cannot be returned or refunded, except in accordance with your legal rights.
                  </li>
                  <li className="gift-card-termandcondition-list" >
                  Please protect this Gift Cards and Treat it as cash. Jaypore cannot be held liable for the Gift Cards which, once activated, are subsequently lost, stolen or demaged.
                  </li>
                <li className="gift-card-termandcondition-list">
                  If any product purchased with a Gift Card  is exchanged  or Refunded, any money owing will be  added to the  account as Credit points.
                  </li>
                <li className="gift-card-termandcondition-list">
                  Please protect this Gift Cards and Treat it as cash. jaypore cannot be held liable for the Gift Cards which, once actived, are subsequently lost, stolen or demaged."
                  </li>
                <li className="gift-card-termandcondition-list">
                  If any product purchased with a Gift Card  is exchanged  or Refunded, any money owing will be  added to the  account as credit points.
                  </li>
                <li className="gift-card-termandcondition-list"  >
                  Jaypore reserves the right to refuse to accept  a Gift Card which it  deemed to have  been duplicated, faked or which otherwise is suspected to be affected from fraud.
                  </li>
                <li className="gift-card-termandcondition-list">
                  Jaypore reserves the  right to change any  of these  terms and conditions from time to time without notice  and to take appropriate  action including cancellaton of the Card if, at it discretion, it deems such action necessary (e.g to change the scope of the Gift Card service, notify of the  service's withdrawal or in the event of circusmtance beyond its control).
                  </li>

              </ul>
            </div>

          </div>
        </div>

      </div>

    )
  }
}
