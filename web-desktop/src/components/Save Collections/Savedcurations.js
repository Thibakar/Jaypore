import React from 'react';
import img from '../../assets/01 Icons/05 My Bag/jaypore.png'
import img1 from '../../assets/01 Icons/01 Login Signup/Dropdown Arrow.svg'
import img2 from '../../assets/01 Icons/01 Login Signup/Sale.svg'
import img3 from '../../assets/01 Icons/01 Login Signup/Search.svg'
import img4 from '../../assets/01 Icons/01 Login Signup/Bag.svg'
import img5 from '../../assets/01 Icons/09 Navigation Drawer - Desktop/hamburger_selected.svg'
import img7 from '../../assets/01 Icons/01 Login Signup/earrings.jpg'
import img8 from '../../assets/01 Icons/01 Login Signup/Facebook.svg'
import img9 from '../../assets/01 Icons/02 Home Page/fedex.svg'
import img10 from '../../assets/01 Icons/01 Login Signup/ga.jpg'

// import img11 from './logo/garden.jpg'
import img12 from '../../assets/01 Icons/02 Home Page/Instagram.svg'
import img13 from '../../assets/01 Icons/05 My Bag/jaypore.png'
import img15 from '../../assets/images/necklace.jpg'
import img16 from '../../assets/images/necklace1.jpg'
import img17 from '../../assets/01 Icons/02 Home Page/payu.svg'
import img18 from '../../assets/01 Icons/02 Home Page/Razorpay.svg'
import img20 from '../../assets/01 Icons/04 PDP/Twitter.svg'
import img21 from '../../assets/01 Icons/02 Home Page/ups.svg'
// import img22 from '../../assets/01 Icons/03 Listing/close.svg';
import img22 from '../../assets/01 Icons/01 Login Signup/Close.svg';

import img23 from '../../assets/images/dress.jpg'
import img24 from '../../assets/images/dress1.jpg'
import img25 from '../../assets/images/dress2.jpg'
// import img26 from './logo/1.jpg'
import img27 from '../../assets/01 Icons/02 Home Page/Pinterest.svg'
import img28 from '../../assets/01 Icons/02 Home Page/aramex.svg';
import img29 from '../../assets/01 Icons/02 Home Page/Braintree.svg';
import img30 from '../../assets/01 Icons/01 Login Signup/clone.png';

import '../../assets/css/savecurations.css';
import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'

class Savedcurations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SavedCollectionsData: [
                {
                    imgurl: "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/o/roaapjj10000767-1_3.jpg",
                    name: "A Festive Spirit",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,blouses to start",
                    imagetext2: "the revertries",
                    buttonname: "Explore"
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/m/smhsaj50038217-2_4.jpg",
                    name: "A Crystal Confluence",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,blouses to start",
                    imagetext2: "the revertries",
                    buttonname: "Explore"
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/u/r/urtjwf30028411-2_1.jpg",
                    name: "A Radiant Celebration",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,blouses to start",
                    imagetext2: "the revertries",
                    buttonname: "Explore"

                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/j/rjdjwj60026941-1_3.jpg",
                    name: "A Festive Spirit",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,",
                    imagetext2: "blouses to start the revertries",
                    buttonname: "Explore"
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/t/stbjwf30029333-2_1.jpg",
                    name: "A Festive Spirit",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,",
                    imagetext2: "blouses to start the revertries",
                    buttonname: "Explore"
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/p/s/pspjwf30028534-2_2.jpg",
                    name: "Garden Fresh",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,",
                    imagetext2: "blouses to start the revertries",
                    buttonname: "Explore"
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/j/a/jaysaj50035888-2_2.jpg",
                    name: "A Festive Spirit",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,",
                    imagetext2: "blouses to start the revertries",
                    buttonname: "Explore"
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/j/q/jqgapjj10000900-1_4.jpg",
                    name: "A Regular Affair",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,",
                    imagetext2: "blouses to start the revertries",
                    buttonname: "Explore"
                },
                {
                    imgurl: "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/d/d/ddnapj40015145-1.jpg",
                    name: "A Festive Spirit",
                    imagetext1: "Pastel and jewel-toned kurtas,pants,",
                    imagetext2: "blouses to start the revertries",
                    buttonname: "Explore"
                }

            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <Header props={this.props} />

                </div>
                <div className="desktop-savedcollection-maincontainer">
                    <div class="desktop-sc-heading">
                        <span class="desktop-heading  .rvt1 ">Saved Collections</span>
                        <p class="desktop-headingone  .rvt2 ">Dresses with delicate prints,breathable fabrics and a range of colors</p></div>
                    <div className="desktop-containerdiv-savedcollections">
                        {
                            this.state.SavedCollectionsData.map(i => (
                                <div class="desktop-sc-body">
                                    {/* <div class="desktop-content" id="column"> */}
                                    <div className="desktop-sc-overlay">
                                        <img class="desktop-image1" src={i.imgurl} alt="img" />
                                        <a href="#popup1" ><span className="desktop-close"><img class="desktop-image-sv" src={img22} alt="img" /></span></a>
                                        <span class="desktop-close" ><img class="desktop-showicon sc1" src={img29} alt="img"></img></span>
                                        <span class="c desktop-sc-text1">{i.name}</span>
                                        <span className="desktop-savedcollections-imagetext1">{i.imagetext1}</span>
                                        <span className="desktop-savedcollections-imagetext2">{i.imagetext2}</span>
                                        <img src={img30} className="desktop-savecollection-imagetext4"/>
                                        <p class="desktop-button2"><span>{i.buttonname}</span></p>

                                        {/* </div> */}
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </div>

                <div>
                    <Footer />
                </div>
            </React.Fragment>
        )

    }
}

export default
    Savedcurations