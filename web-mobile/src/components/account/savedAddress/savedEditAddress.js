import React from 'react'
import '../common/common_Mobile.css';

import img16 from '../logo/Group 3.svg';
import img2 from '../logo/Dropdown Arrow.svg'



class savedEditAddress extends React.Component{
    render() {
        return(
            <div>
             <header>
             <div class="mobile-fixed-header">
                    <div class="mobile-container">
                        <a><img src={img16} height="15"></img></a>
                        <label class="mobile-label-name">Edit Address</label>
                    </div>
                    </div>
                </header>
                <div class="mobile-edit-address">
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
        )
    }
}

export default savedEditAddress