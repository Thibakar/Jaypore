import React, { Component } from 'react';
import clCardright from "../../assets/images/cl-card-img-right.svg";
import dropright from "../../assets/images/rightarrow.png";
import { Link } from 'react-router-dom';


class CurationCard extends Component {
    render() {
        return (
            <div>
                 <div>
                 <div className="fashion-lover-card mt-20 mb-20">
                 <img
                              className="fashion-image"
                              src={clCardright}
                              alt="fashion-lover"
                            />
                    <p className="fashion-text-clr sb-txt" style={{    fontSize:'17px'}}>
                        Here are some curations for Dress lovers. You might just love them.
                        </p>
                            
                          
                         
                            <div className="browse-then sb-txt">
                            <Link  to="/">
                           
                           <span style={{color:'deepskyblue'}}> Browse Them Now</span>
                            <img
                              className="p-l-10 drop-right"
                              src={dropright}
                              alt="dropright"
                            />
                          </Link>
                          </div>

                </div>
                
                
            </div>
                
            </div>
        );
    }
}

export default CurationCard;