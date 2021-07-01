import React from 'react'
import '../../../assets/css/common_Mobile.css';
import img16 from '../../../assets/Jaypore Assets/01 Icons/logo/Group 3.svg';
import img2 from '../../../assets/Jaypore Assets/01 Icons/logo/Dropdown Arrow.svg'
import img3 from '../../../assets/Jaypore Assets/01 Icons/logo/Delete.svg'
import img4 from '../../../assets/Jaypore Assets/01 Icons/logo/Edit.svg'
import img5 from '../../../assets/Jaypore Assets/01 Icons/logo/Delete on Modal.svg'
import Footer from '../../common/footer/footer'


class loginScreen1 extends React.Component{
    
   constructor(props) {
    super(props);
    this.state = {
        color: true,
        data:
        {
            name: "Shahnawaz Alam",
            mobilephonenumber: "Why Add Mobile Number?",
            email:"Shahnawaz.alam@jaypore.com",
            password:"********",
            dateofbirth:"DD/MM/YY"

        }
    }
}
            
 
            

    render() {
        return(
            <div>
                  <div class="mobile-fixed-headerskr">
                    <img   className="mycrossskr" src={img16} height="14" alt=""  onClick={() => this.props.history.goBack()}/>
                    <span className="mycreditskr sb-txt">Login & Security</span>
                    </div>
               <div className="paddingafterheadierloginsecurityskr">
                <div className="containerloginsecurityinsideskr">
                    
                  <div >
                      <div class="flexskr">
                          <div>
                     <div class="rectangle-content-sizeskr">Name</div>
        <p class="mobile-edit-size">{this.state.data.name}</p></div>
                     <div class="login-edit-nameskr">Edit</div>
                   </div>
                  
                    <div class="mobilespaceloginsecurityskr"></div>
                    </div>
                    <div>
                    <div class="flexskr">
                    <div>
                   <div class="rectangle-content-sizeskr">Mobile Phone Number:</div>
        
                 <a className="closea" href="#popup2">  <p class="why-add-num">Why Add Mobile Number?</p></a></div>

                 <div id="popup2" className="mobile-overlay-down">
                        <div className="length-popup-sizeskr">
                         <a className="close-pop" href="#">&times;</a> 
                            <div >
                           sas
                            </div>
                                <button class="size-done-btn"
                                ref='donebtn'
                                onClick={()=>this.props.history.goBack()}>Done</button>
                        </div>
                    </div>
                   <div class="login-edit-nameskr">Add</div></div>

                   <div class="mobilespaceloginsecurityskr"></div>
                   </div>
                   <div>
                   <div class="rectangle-content-sizeskr">Email:</div>
                   <p class="mobile-edit-size">{this.state.data.email}</p>
                    <div class="mobilespaceloginsecurityskr"></div>
                    </div>
                    <div>
                    <div class="flexskr">
                    <div>
                   <div class="rectangle-content-sizeskr">Password:</div>
                   <p class="password">{this.state.data.password}</p></div>
                  <div class="login-edit-nameskr">Edit</div></div>
                  
                    <div class="mobilespaceloginsecurityskr"></div>
                    </div>
                    <div>
                    <div class="flexskr">
                    <div>
                   <div class="rectangle-content-sizeskr">Date Of Birth:</div>
                   <div class="mobile-edit-size">{this.state.data.dateofbirth}</div></div>
                   <div class="login-edit-nameskr">Add</div></div>
                   
                   </div>
                   </div>
            </div>
            <Footer /> 
            </div>
            
        )
    }
}

export default loginScreen1