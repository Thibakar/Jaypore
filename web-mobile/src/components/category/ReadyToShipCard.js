import React, { Component } from 'react';
import clCardleft from "../../assets/images/cl-card-img-left.svg";
import dropright from "../../assets/images/rightarrow.png";
import { Link } from 'react-router-dom';

class ReadyToShipCard extends Component {
    render() {
        return (
            <div>
                 <div className="fashion-lover-card mt-20 mb-20">
                 <img
                              className="fashion-image"
                              src={clCardleft}
                              alt="fashion-lover"
                            />
                    <p className=" fashion-text-clr sb-txt" style={{fontSize:'20px'}}>
                        These Dresses are too good to be ready to ship
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
        );
    }
}

export default ReadyToShipCard;