import React from 'react'
import '../../../assets/css/common_Mobile.css';
import img16 from '../../../assets/Jaypore Assets/01 Icons/logo/Group 3.svg';
import img2 from '../../../assets/Jaypore Assets/01 Icons/logo/Dropdown Arrow.svg'
import Footer from '../../common/footer/footer'

class savedAddress extends React.Component{
   
   constructor(props) {
    super(props);
    this.state = {
        color: true,
        data:
        {
            name:"shahnawaz Alam",
            address:"4743,2nd Floor, sainik Colony, Sector-49,",
            district:"Faridabad",
            state:"Haryana",
            pincode:"India",
            country:"121001"
        }
    }
}
    render() {
        return(
            <div class="backgskr">
                <div class="mobile-fixed-headerskr">
                    <img   className="mycrossskr" src={img16} height="14" alt=""  onClick={() => this.props.history.goBack()}/>
                    <span className="mycreditskr sb-txt">Saved Addresses</span>
                    </div>
                    <div className="paddingafterheadierloginsecurityskr">
                    <div className="containersavedaddressinsideskr">
            
                <label class="mobile-label-save">We are waiting for your address</label>
                
                <div>You have not saved any address earlier.</div>
                <div class="mobile-add-new-address"><a class="mobile-add-new-adress-col sb-txt">Add a new address</a>
                <a href="#hide1" class="mobile-hide" id="hide1"><img class="mobile-coupon-drop-saveskr1" src={img2}></img></a>
              <a href="#show1" class="mobile-show" id="show1"><img class="mobile-coupon-drop-img-saveskr1" src={img2}></img></a> 
                <div class="mobile-list">
                <div class="grid-container">
                    <div>Shahnawaz Alam</div>
                    <div class="addressmarginsk">4743,2nd Floor, sainik Colony, Sector-49,Faridabad,Haryana,121001 India.<br></br><br></br></div>
                    <div>India<a><img src={img2} class="mobile-choose-img"></img></a></div>  
                    <div>121002</div>
                    <div>Haryana<a><img src={img2} class="mobile-choose-img"></img></a></div>
                    <div>Faridabad<a><img src={img2} class="mobile-choose-img"></img></a></div>
                    <div>+91 9773778575</div>
                    </div><br/><br/>
                    <div class="mobile-address-typeskr sb-txt">Address Type</div><br/><br/>
                    {/* <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br> */}
                    <div class="flexskr">
                   <div>
                       <div class="flexskr"> 
                       <div><input type="radio"  name="gen" class="radio-button" checked></input></div>
                    <div className="radiosepskr" style={{fontSize:"14px"}}>  Home</div></div></div>
                    <div>
                       <div class="flexskr"> 
                       <div><input type="radio"  name="gen" class="radio-button"></input></div>
                    <div className="radiosepskr" style={{fontSize:"14px"}}>  office</div></div></div>
                    <div>
                       <div class="flexskr"> 
                       <div><input type="radio"  name="gen" class="radio-button"></input></div>
                    <div className="radiosepskr" style={{fontSize:"14px"}}> other</div></div></div><br/>
                    </div>
                    <button class="mobile-save-address-button">Save This Address</button>
                </div></div>
            </div>
            </div>
            <Footer /> 
            </div>
        )
    }
}

export default savedAddress