import React, { Component } from "react";

import "../../assets/css/desktoptermandcondition.css"


class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: true,
      RecentItemsData: [
        {
          para1: "Terms & Conditions:",
          para2: "This code is valid till 16 october 2019.",
          para3: "This code is valid for one time online purchase only.",
          para4: "This offer can not be clubbed with any other offers.",
          para5: "This offer can not be refunded in exchange for cash.",
          para6: "Jaypore reserves the right to change / modify this offer at any time,and without  prior notice."
        }
      ]
    }
  }
  render() {
    return (

      <div href="/" class="desktop-coupons-text5 desktop-tooltip">
        Terms & Conditions
            {
          this.state.RecentItemsData.map(i => (

            <div class="desktop-tooltiptext">
              <h1 className="termconditions-heading">{i.para1}</h1>
              <ul classname="termcondition-item-list">
                <div className="termcondition-item-list-wrapper">
               
                <li className="termcondition-item-lists">{i.para2}</li>
                </div>
                <div className="termcondition-item-list-wrapper">
              
                <li className="termcondition-item-lists">{i.para3}</li>
                  </div>
                  <div className="termcondition-item-list-wrapper">
                
                  <li className="termcondition-item-lists">{i.para4}</li>
                  </div>
                  <div className="termcondition-item-list-wrapper">
                
                  <li className="termcondition-item-lists">{i.para5}</li>
                  </div>
                  <div className="termcondition-item-list-wrapper">
                
              
                  <li className="termcondition-item-lists">{i.para6}</li>
                  </div>
              
              </ul>

             
            </div>
          ))
        }



      </div>

    );
  }
}
export default TermsAndConditions;
