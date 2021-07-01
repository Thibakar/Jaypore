import React from 'react'
import '../common/common_Mobile.css';

import img16 from '../logo/Group 3.svg';
import img2 from '../logo/Dropdown Arrow.svg'
import img3 from '../logo/Delete.svg'
import img4 from '../logo/Order Confirmation.svg'
import img5 from '../logo/Delete on Modal.svg'


class loginScreen3 extends React.Component{
    render() {
        return(
            <div>
             <header>
             <div class="mobile-fixed-header">
                    <div class="mobile-container">
                        <a><img src={img16} height="15"></img></a>
                        <label class="mobile-label-name">Login & Security</label>
                    </div>
                    </div>
                </header>
            <div class="mobile-saved">
                <div class="mobile-name-save-success"><img src={img4} class="mobile-confirm-img"></img>
                <a class="mobile-Success">Success</a><br/><p class="mobile-name-complete">Name has been modified.</p>
                </div><br/>
                <div class="rectangle-delete-save">
                   <a class="rectangle-content-size">Name</a>
                   <button class="login-edit-name">Edit</button><br/>
                   <p class="mobile-edit-size">Shahnawaz Alam</p>
                   <div class="mobile-spacex-rect"></div>
                   <a class="rectangle-content-size">Mobile Phone Number:</a>
                   <button class="login-edit-name">Add</button><br/>
                   <p class="why-add-num">Why Add Mobile Number?</p>
                   <div class="mobile-spacex-rect"></div>
                   <a class="rectangle-content-size">Email:</a>
                   <p class="mobile-edit-size">Shahnawaz.alam@jaypore.com</p>
                   <div class="mobile-spacex-rect"></div>
                   <a class="rectangle-content-size">Password:</a>
                   <button class="login-edit-name">Edit</button><br/>
                   <p class="password">********</p>
                   <div class="mobile-spacex-rect"></div>
                   <a class="rectangle-content-size">Date Of Birth:</a>
                   <button class="login-edit-name">Add</button><br/>
                   <a class="mobile-edit-size">DD/MM/YY</a>
                </div><br/><br/>

            </div>

            </div>
        )
    }
}

export default loginScreen3