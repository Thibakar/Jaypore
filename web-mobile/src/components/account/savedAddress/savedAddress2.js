import React from 'react'
import '../common/common_Mobile.css';

import img16 from '../logo/Group 3.svg';
import img2 from '../logo/Dropdown Arrow.svg'
import img3 from '../logo/Delete.svg'
import img4 from '../logo/Edit.svg'
import img5 from '../logo/Delete on Modal.svg'


class saveAddress extends React.Component{
    render() {
        return(
            <div>
             <header>
             <div class="mobile-fixed-header">
                    <div class="mobile-container">
                        <a><img src={img16} height="15"></img></a>
                        <label class="mobile-label-name">Saved Addresses</label>
                    </div>
                    </div>
                </header>
            <div class="mobile-saved">
                <div class="rectangle-delete-save">
                   <a class="rectangle-content-size">Shahnawaz Alam</a>
                   <img class="mobile-image-saved-edit" src={img4}></img> <a class="close a" href="#popup1"><img src={img3} class="mobile-image-saved-edit"></img></a><br/><br/>
                   <a class="rectangle-perfect-address">Flat - 201, Hill View Appartment, Mehta Chowk, Mehrauli, New delhi,121003 India</a><br/><br/>
                   <a>Home</a><br/>
                   <div class="mobile-spacex-rect"></div>
                   <a class="rectangle-content-size">Shahnawaz Alam</a>
                   <img class="mobile-image-saved-edit" src={img4}></img> <img src={img3} class="mobile-image-saved-edit"></img><br/><br/>
                   <a class="rectangle-perfect-address">4743, 2nd Floor, Sainik colony, Sector -49, Faridabad, Haryana, 121001 India</a><br/><br/>
                   <a>Home</a><br/>
                   <div class="mobile-spacex-rect"></div>
                   <a class="rectangle-content-size">Shahnawaz Alam</a>
                   <img class="mobile-image-saved-edit" src={img4} ></img> <img src={img3} class="mobile-image-saved-edit"></img><br/><br/>
                   <a class="rectangle-perfect-address">1st Floor, 144/B, Freedom Fighter Enclave, Saket, New Delhi, 110009</a><br/><br/>
                   <a>Home</a><br/>
                </div><br/><br/>
                <div class="mobile-add-new-address"><a class="mobile-add-new-adress-col">Add a new address</a><a href="#hide1" class="mobile-hide" id="hide1"><img class="mobile-coupon-drop-save" src={img2}></img></a><a href="#show1" class="mobile-show" id="show1"><img class="mobile-coupon-drop-img-save" src={img2}></img></a> 
                <div class="mobile-list">
                <div class="grid-container">
                    <div>Shahnawaz Alam</div>
                    <div>4743,2nd Floor, sainik Colony, Sector-49,Faridabad,Haryana,121001 India.<br/><br/><br/></div>
                    <div>India<a><img src={img2} class="mobile-choose-img"></img></a></div>  
                    <div>121002</div>
                    <div>Haryana<a><img src={img2} class="mobile-choose-img"></img></a></div>
                    <div>Faridabad<a><img src={img2} class="mobile-choose-img"></img></a></div>
                    <div>+91 9773778575</div>
                    </div><br/><br/>
                    <a class="mobile-address-type">Address Type</a><br/><br/>
                    <input type="radio" class="radio-button"></input>
                    <label style={{fontSize:"18px",fontWeight:"lighter"}}>  Home</label>
                    <input type="radio" class="radio-button"></input>
                    <label style={{fontSize:"18px",fontWeight:"lighter"}}>  Office</label>
                    <input type="radio" class="radio-button"></input>
                    <label style={{fontSize:"18px",fontWeight:"lighter"}}>  Other</label><br/>
                    <button class="mobile-save-address-button">Save This Address</button>
                </div></div>
            </div>
            <div id="popup1" class="mobile-overlay">
                        <div class="mobile-popup-savedAddress">
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <a class="confirm-delete-img"><img src={img5}></img></a><br/>
                                <center>Are you sure you want to delete this address?</center><br/>
                                <div class="saved-address-confirm-delete">
                                    <a class="rectangle-content-size">Shahnawaz Alam</a><br/><br/>
                                    <a class="rectangle-perfect-address">Flat - 201, Hill View Appartment, Mehta Chowk, Mehrauli, New delhi,121003 India</a><br/><br/>
                                    <a>Home</a><br/>
                                </div><br/>
                                <button class="mobile-button-keep-address">Keep this address</button><br/><br/>
                                <button class="mobile-button-delete-address">Yes, delete</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default saveAddress