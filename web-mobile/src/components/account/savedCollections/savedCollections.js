import React from 'react';
import Footer from '../../common/footer/footer';
import CancelItem from '../../mybag/CancelItem';
import '../../../assets/css/akash.css';
import img1 from '../../../assets/Jaypore Assets/01 Icons/logo/01p.jpeg';
import img2 from '../../../assets/Jaypore Assets/01 Icons/logo/03p.jpeg';
import img3 from '../../../assets/Jaypore Assets/01 Icons/logo/08p.jpeg';
import img4 from '../../../assets/Jaypore Assets/01 Icons/logo/10p.jpeg';
import img5 from '../../../assets/Jaypore Assets/01 Icons/logo/11p.jpeg';
import img6 from '../../../assets/Jaypore Assets/01 Icons/logo/13p.jpeg';
import img7 from '../../../assets/Jaypore Assets/01 Icons/logo/My Wishlist.svg';
import img8 from '../../../assets/Jaypore Assets/01 Icons/logo/Close.svg';
import img0 from '../../../assets/Jaypore Assets/01 Icons/logo/Show Collection.svg';
import Wishlist from '../../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg'

import img9 from '../../../assets/Jaypore Assets/01 Icons/logo/dress1.jpg';
import img10 from '../../../assets/Jaypore Assets/01 Icons/logo/dress2.jpg';
import img11 from '../../../assets/Jaypore Assets/01 Icons/logo/dress3.jpg';
import img12 from '../../../assets/Jaypore Assets/01 Icons/logo/dress4.jpg';
import img13 from '../../../assets/Jaypore Assets/01 Icons/logo/earrings.jpg';
import img14 from '../../../assets/Jaypore Assets/01 Icons/logo/Facebook.svg';
import img16 from '../../../assets/Jaypore Assets/01 Icons/logo/Group 3.svg';
import img17 from '../../../assets/Jaypore Assets/01 Icons/logo/Instagram.svg';
import img18 from '../../../assets/Jaypore Assets/01 Icons/logo/jaypore.png';
import img19 from '../../../assets/Jaypore Assets/01 Icons/logo/necklace.jpg';
import img20 from '../../../assets/Jaypore Assets/01 Icons/logo/necklace1.jpg';
import img21 from '../../../assets/Jaypore Assets/01 Icons/logo/Pinterest.svg';
import img22 from '../../../assets/Jaypore Assets/01 Icons/logo/Show Collection.svg';
import img23 from '../../../assets/Jaypore Assets/01 Icons/logo/Twitter.svg';


class savedCollections extends React.Component {
    /*
     constructor(props) {
       super(props);
       this.state = {
           color: true,
           recentitemsdata:
           {
               availablecredits: "Available Credits",
               totalcreditsrecieved: "Rs. 15000",
               creditSummaryText: "You can apply your credits at the time of checkout.",
               creditSummary: [
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
   */
    constructor(props) {
        super(props);
        this.state = {
            color: true,
            cross: img8,
            data: [
                {
                    imgurl:"https://static.jaypore.com/media/events/307X363/200321CUR090_Block_Printed_Curations_moodshot.jpg",
                    name: "Linen Loven",
                    namedis: "Whisper-Lightyard...'"
                },
                {
                    imgurl:"https://static.jaypore.com/tr:w-307,h-363,e-sharpen/media/events/200305SNG031_Shingora_moodshot.jpg",
                    name: "A Crystal",
                    namedis: "Contemporary silver..."
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-307,h-363,e-sharpen/media/events/200206SAI024_SilaiStudio_Spring_moodshot.jpg",
                    name: "A Radiant",
                    namedis: "Traditional styles..."
                },
                {
                    imgurl: "https://static.jaypore.com/media/events/307X363/200306MSB053_Masaba_moodshot.jpg",
                    name: "Garden Fresh",
                    namedis: "Collectible jewelry..."
                },
                {
                    imgurl: "https://static.jaypore.com/media/events/307X363/191221ETK062_ETK_DEEPIKA_SUNDER_moodshot.jpg",
                    name: "Paisley To Pr...",
                    namedis: "Bagh printed cotton..."
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-307,h-363,e-sharpen/media/events/200229MDA011_Medhya_moodshot.jpg",
                    name: "A Regal Affair",
                    namedis: "Precious stone-studd..."
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-307,h-363,e-sharpen/media/events/200228SMR015_SMR_Smriti_moodshot.jpg",
                    name: "A Striped Soj",
                    namedis: "cotton khadi..."
                },
                {
                    imgurl: "https://static.jaypore.com/media/events/307X363/200220DDN019_DivineDesign_moodshot.jpg",
                    name: "A Gypsy Sta...",
                    namedis: "tribal,coin an..."
                }

            ]
        }
    }

    toggleVisible=()=>{
        this.setState({
            visible:!this.state.visible
        })
    }

    toggle = () => {
        this.setState(
            {
                select: !this.state.select
            }
        )
    }

    render() {
        return (
            <div className="screen-box">
                <CancelItem
                toggleVisible={()=>this.toggleVisible()}
                visible={this.state.visible}
                imgurl='https://static.jaypore.com/media/events/307X363/191112SSN030_SSN_Sailesh_Singhania_Moodshot.jpg'
                />

                <div class="mobile-fixed-header">
                    <div class="mobile-container">
                        <a><img src={img16} height="15" onClick={()=>this.props.history.push("/myAccount")}></img></a>
                        <label className="mobile-label-name">Saved Collection</label>
                    </div>
                    </div>
                    <div className="mobile-fixed-header-back"></div>
                   

                <div className="new-mobile-body">
                
                    {
                        this.state.data.map((item, i) => (
        
                    <div className="card-grid bottom-m-1">
                        <div className="image-box">
                            <img className="card-image" src={item.imgurl}></img>
                            <div className="saved-img-text">
                                <div className="white-color heading left-align">
                                    {item.name}
                                </div>
                                <div className="white-color left-align sub-sub-heading-txt">
                                    {item.namedis}
                                </div>
                            </div>
                            
                        </div>
                        <a className="closea" href="#popup3"><img class="card-grid-cancel" src={img0}></img></a>
                        <img class="card-grid-more" src={img8} onClick={()=>this.toggleVisible()}></img>
                    </div>

                        ))}

                <div id="popup3" class="mobile-overlay-down">
                    <div class="similar-card">
                        <div className="similar-heading">
                            <div className="simiar-left-heading">Similar Products</div>
                            <div className="simiar-right-heading" onClick={()=>this.props.history.goBack()}>&times;</div>
                            </div>
                            <div class="similar-show-content">
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                   
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   
                    <Footer /> 
            </div>
        )
    }
}

export default savedCollections