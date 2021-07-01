import React, { Component } from "react";
import checkIcon from "../../../assets/01 Icons/03 Listing/Checkbox Empty.svg";
import closeIcon from "../../../assets/icons/close.svg"

class BrandModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataSet: [
        {
          isLabel:true,
          brandName: "A",
          
        },
        {
          brandName: "A Brand",
          isChecked:true
        },
        {
          brandName: "AB Brand",
          isChecked:false
        },
        {
          isLabel:true,
          brandName: "B"
        },
        {
          brandName: "Blue Lotus",
          isChecked:false
        },
        {
          brandName: "Black& White",
          isChecked:true
        },
        {
          isLabel:true,
          brandName: "C"
        },
        {
          brandName: "Chakor",
          isChecked:true
        },
        {
          brandName: "Crafts",
          isChecked:false
        },
        {
          isLabel:true,
          brandName: "I"
        },
        {
          brandName: "India",
          isChecked:false
          
        },
        {
          isLabel:true,
          brandName: "K"
        },
        
        {
          brandName: "Kite",
          isChecked:false
        }
        ,
        {
          brandName: "King",
          isChecked:false
        },
        {
          isLabel:true,
          brandName: "P"
        },
        {
          brandName: "Peter England"
        },
        
        {
          isLabel:true,
          brandName: "Z"
        },
        {
          brandName: "Zuul",
          isChecked:false
        }
        ,
        {
          brandName: "Zaker",
          isChecked:true
        },
        
      ]
    };
  }
  render() {

    const listItems=[];
    this.state.dataSet.map((item,index) => {
      if (item.isLabel) { 
        listItems.push(<li className="cl-modal-filter-head">
          {item.brandName}
      </li>)
       }else{
        listItems.push(<li className="brand-list">
          <div className="checkbox-group modal-filter-item borderBottomNone">
          <input type="checkbox" id={`html11${index}`} defaultChecked={item.isChecked} />
          <label htmlFor={`html11${index}`} className="checkbox-label" ><span className="checkbox-label-text">{item.brandName}</span></label>
        </div>
        </li>)
       }
    })

    return (
      <React.Fragment>
        <div className="brand-search">
          <div className="bg-pink m-t-minus30 text-red">
            <input className="brand-input cl-modal-head-input" type="text" placeholder="Search brand" />
            <a className="m-l-20 text-jp-lp" href="">A</a>
            <a className="m-l-20 text-jp-lp" href="">B</a>
            <a className="m-l-20 text-jp-lp" href="">C</a>
            <a className="m-l-20 text-jp-lp inactive" href="">D</a>
            <a className="m-l-20 text-jp-lp inactive" href="">E</a>
            <a className="m-l-20 text-jp-lp inactive" href="">F</a>
            <a className="m-l-20 text-jp-lp inactive" href="">G</a>
            <a className="m-l-20 text-jp-lp inactive" href="">H</a>
            <a className="m-l-20 text-jp-lp" href="">I</a>
            <a className="m-l-20 text-jp-lp inactive" href="">J</a>
            <a className="m-l-20 text-jp-lp" href="">K</a>
            <a className="m-l-20 text-jp-lp inactive" href="">L</a>
            <a className="m-l-20 text-jp-lp inactive" href="">M</a>
            <a className="m-l-20 text-jp-lp inactive" href="">N</a>
            <a className="m-l-20 text-jp-lp inactive" href="">O</a>
            <a className="m-l-20 text-jp-lp" href="">P</a>
            <a className="m-l-20 text-jp-lp inactive" href="">Q</a>
            <a className="m-l-20 text-jp-lp inactive" href="">R</a>
            <a className="m-l-20 text-jp-lp inactive" href="">S</a>
            <a className="m-l-20 text-jp-lp inactive" href="">T</a>
            <a className="m-l-20 text-jp-lp inactive" href="">U</a>
            <a className="m-l-20 text-jp-lp inactive" href="">V</a>
            <a className="m-l-20 text-jp-lp inactive" href="">W</a>
            <a className="m-l-20 text-jp-lp inactive" href="">X</a>
            <a className="m-l-20 text-jp-lp inactive" href="">Y</a>
            <a className="m-l-20 text-jp-lp" href="">Z</a>
          </div>
          <a href="#modal-close" title="Close" className="modal-close cl-modal-close">
            <img src={closeIcon} alt="brandcheck" />
          </a>
          <div className="container cl-modal-body">
            <ul className="cl-alpha-filter-list">
              {listItems} 
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BrandModal;
