import React from 'react'
import '../common/common_Mobile.css';

import img16 from '../logo/Group 3.svg';
import img2 from '../logo/Dropdown Arrow.svg'
import img3 from '../logo/Delete.svg'
import img4 from '../logo/Edit.svg'
import img5 from '../logo/Delete on Modal.svg'


class loginScreen2 extends React.Component{
    render() {
        return(
            <div>
             <header>
             <div class="mobile-fixed-header">
                    <div class="mobile-container">
                        <a><img src={img16} height="15"></img></a>
                        <label class="mobile-label-name">Edit Name</label>
                    </div>
                    </div>
                </header>
                <div class="mobile-saved">
                    <br/>
                    <a class="mobile-chnage-name-head">Change Your Name</a><br/>
                    <p class="mobile-para">If you want to change the name associated with your Jaypore customer account, you may do so below. Be sure to click on <a class="mobile-bold">Save Changes</a> button when you are done.</p><br/>
                    <input type="text" class="mobile-text-name" placeholder="Shahnawaz Alam" id="textfield" ></input><br/><br/>
                    <div><input type="button" class="save-name-change" Value="Save Changes"  onClick="post()" id="postBtn"/></div>

                </div>

            

            </div>
        )
    }
}

export default loginScreen2