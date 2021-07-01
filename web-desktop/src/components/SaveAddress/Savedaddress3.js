import React from 'react';
// import img from '../../assets/01 Icons/05 My Bag/jaypore.png'
// import img1 from '../../assets/shipping_payment_icon/Dropdown Arrow.svg'
// // import img2 from '../../../assets/01 Icons/01 Login Signup/Sale.svg'
// // import img3 from '../../../assets/01 Icons/01 Login Signup/Search.svg'
// // import img4 from '../../../assets/01 Icons/01 Login Signup/Bag.svg'
// import img5 from './logo/hambutton.png'
// import facebook from '../../assets/01 Icons/01 Login Signup/Facebook.svg'
// import img7 from '../../assets/images/earrings.jpg'
// import img8 from '../../assets/01 Icons/01 Login Signup/Facebook.svg'
// import img9 from '../../assets/shipping_payment_icon/Fedex.svg'
// import img12 from '../../../assets/01 Icons/08 Header & Footer/Instagram.svg'
// import img13 from './logo/jaypore.png'
// import img17 from '../../assets/01 Icons/02 Home Page/Payu.svg'
// import img18 from '../../../assets/01 Icons/08 Header & Footer/RazorPay.svg'
// import img20 from '../../../assets/01 Icons/08 Header & Footer/Twitter.svg"'
// import img21 from '../../assets/01 Icons/02 Home Page/ups.svg'
// import img27 from './logo/pi.png'
// import img28 from '../../assets/01 Icons/01 Login Signup/aramex.svg'
// import img29 from '../../../assets/01 Icons/08 Header & Footer/BrainTree.svg'
import delete1 from '../../assets/shipping_payment_icon/Delete.svg'
import deleteM from '../../assets/shipping_payment_icon/Delete on Modal.svg'
// import add from './logo/Add.svg'
import edit from '../../assets/shipping_payment_icon/Edit.svg'
import radiobutton from '../../assets/shipping_payment_icon/Radio - Empty.svg'


class Savedaddress3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SavedAddressData: [
                {
                    name: "Shahnawaz Alam",
                    address: "Flat-207,Hill View Appartment,Mehta Chowk,Mehrauli,New Delhi,121002 India",
                    type: "Home"
                },
                {
                    name: "Shahnawaz Alam",
                    address: "Flat-207,Hill View Appartment,Mehta Chowk,Mehrauli,New Delhi,121002 India",
                    type: "Home"
                },
                {
                    name: "Shahnawaz Alam",
                    address: "Flat-207,Hill View Appartment,Mehta Chowk,Mehrauli,New Delhi,121002 India",
                    type: "Home",
                    fname:"Full Name",
                    faddress:"Address",
                    country:"Country",
                    pincode:"Pin code/ Zip code",
                    state:"State/Province",
                    location:"City",
                    number:"Phone Number",
                    ftype:"Address Type",
                    type1:"Home",
                    type2:"Office",
                    type3:"Other"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    <div class="grid"><br />
                        <div class="desktop-address-grid1"><br />
                            <span class="desktop-coupons-text1" >Saved Addresses</span>
                            <hr class="desktop-sa2-heading"></hr>
                            <div class="desktop-address-grid2">
                                {
                                    this.state.SavedAddressData.map(i => (
                                        <div id="desktop-addresssa-grid1">
                                                <span class="desktop-sa2-heading1">{i.name}</span><a href="#popup1"><img class="desktop-sa2-image1" src={edit} alt="img"></img></a><a href="#popup2"><img class="desktop-sa2-image2" src={delete1} alt="img"></img></a>
                                                <br /><br />
                                                <span className="desktop-sa2-heading2">{i.address}</span><br /><br />
                                                <span className="desktop-sa2-heading1">{i.type}</span>
                                            
                                        </div>
                                    ))
                                }
                            </div>
                        <div class="desktop-gridsa3-item1"><b class="desktop-sa1-text2">Add a New Address</b></div>
                        <div class="desktop-gridsa3-item2"><span class="desktop-sa1-text3">Full Name</span><br />
                            <input type="desktop-address-input1" placeholder=" Shahnawaz Alam"></input></div>
                        <div class="desktop-gridsa3-item3"><span class="desktop-sa1-text3">Address</span><br />
                            <input type="desktop-address-input2" placeholder=" Flat-207,Hill View Appartment,Mehta Chowk,Mehrauli,New Delhi,121002 India"></input></div>
                        <div class="desktop-gridsa3-item4"><span class="desktop-sa1-text3">Country</span><br />
                            <input type="desktop-address-input1" placeholder=" India"></input></div>
                        <div class="desktop-gridsa3-item5"><span class="desktop-sa1-text3">Pin code/Zip code</span><br />
                            <input type="desktop-address-input1" placeholder=" 121002"></input></div>
                        <div class="desktop-gridsa3-item6"><span class="desktop-sa1-text3">State/Province</span><br />
                            <input type="desktop-address-input1" placeholder=" Haryana"></input></div>
                        <div class="desktop-gridsa3-item7"><span class="desktop-sa1-text3">City</span><br />
                            <input type="desktop-address-input1" placeholder=" Gurgaon"></input></div>
                        <div class="desktop-gridsa3-item8"><span class="desktop-sa1-text3">Phone Number</span><br />
                            <input type="desktop-address-input1" placeholder=" +91 9773778575"></input></div>
                        <div class="desktop-gridsa3-item9"><span class="desktop-sa1-text8">Address Type</span><br />
                            <div>
                                <div class="desktop-sa-divb"><img src={radiobutton} alt="img"></img><span class="desktop-sa1-text4">&nbsp;Home</span></div>
                                <div class="desktop-sa-divb"><img src={radiobutton} alt="img"></img><span class="desktop-sa1-text4">&nbsp;Office</span></div>
                                <div class="desktop-sa-divb"><img src={radiobutton} alt="img"></img><span class="desktop-sa1-text5">&nbsp;Other</span></div></div><br />
                            <p class="desktop-address-button1"><span>Save This Address </span></p> </div>
                        </div>
                       
                    </div>
                </div>
                
                <div id="popup1" class="overlay">
                    <div class="desktop-editaddress-popup example">
                        <div class="desktop-addressgrid-item1"><b class="desktop-sa1-text9">Edit Address</b><span class="close desktop-sa3-popup1" href="#">X</span></div>
                        <div class="content">
                            <div class="desktop-gridsa3-item2"><span class="desktop-sa1-text3">Full Name</span><br />
                                <input type="desktop-address-input1" placeholder=" Shahnawaz Alam"></input></div>
                            <div class="desktop-gridsa3-item3"><span class="desktop-sa1-text3">Address</span><br />
                                <input type="desktop-address-input2" placeholder=" Flat-207,Hill View Appartment,Mehta Chowk,Mehrauli,New Delhi,121002 India"></input></div>
                            <div class="desktop-gridsa3-item4"><span class="desktop-sa1-text3">Country</span><br />
                                <input type="desktop-address-input1" placeholder=" India"></input></div>
                            <div class="desktop-gridsa3-item5"><span class="desktop-sa1-text3">Pin code/Zip code</span><br />
                                <input type="desktop-address-input1" placeholder=" 121002"></input></div>
                            <div class="desktop-gridsa3-item6"><span class="desktop-sa1-text3">State/Province</span><br />
                                <input type="desktop-address-input1" placeholder=" Haryana"></input></div>
                            <div class="desktop-gridsa3-item7"><span class="desktop-sa1-text3">City</span><br />
                                <input type="desktop-address-input1" placeholder=" Gurgaon"></input></div>
                            <div class="desktop-gridsa3-item8"><span class="desktop-sa1-text3">Phone Number</span><br />
                                <input type="desktop-address-input1" placeholder=" +91 9773778575"></input></div>
                            <div class="desktop-gridsa3-item9"><span class="desktop-sa1-text8">Address Type</span><br />
                                <div>
                                    <div class="desktop-sa-divb"><img src={radiobutton} alt="img"></img><span class="desktop-sa1-text4">&nbsp;Home</span></div>
                                    <div class="desktop-sa-divb"><img src={radiobutton} alt="img"></img><span class="desktop-sa1-text4">&nbsp;Office</span></div>
                                    <div class="desktop-sa-divb"><img src={radiobutton} alt="img"></img><span class="desktop-sa1-text5">&nbsp;Other</span></div></div><br />
                                <p class="desktop-address-button1"><span>Save This Address </span></p> </div>
                        </div>
                    </div>
                </div>
                <div id="popup2" class="overlay">
                    <div class="popup1">

                        <a class="close1" href="#">X</a>
                        <img class="desktop-sa3-button" src={deleteM} alt="img"></img><br /><br />
                        <div class="content">
                            <span class="desktop-sa3-text1">Are you sure you want to delete </span><br />
                            <span class="desktop-sa3-text2">   this address?</span><br />
                            <div id="desktop-address-popupgrid"><br />
                                <b>Shahnawaz Alam</b>
                                <br /><br />
                                <span >Flat-207,Hill View Appartment,Mehta Chowk,Mehrauli,New Delhi,121003 India</span><br /><br />
                                <b>Home</b>
                            </div>
                            <button class="button1"><span>Keep this address</span></button><br />
                            <button class="button" ><span>Yes, Delete</span></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Savedaddress3