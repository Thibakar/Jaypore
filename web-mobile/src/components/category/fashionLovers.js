import React, { Component } from 'react';
import "./listing.css";
import clCardSpl from "../../assets/images/cl-spl-card-image.svg";
import dropright from "../../assets/images/rightarrow.png";
import { Link } from 'react-router-dom';



class FashionLovers extends Component {
    render() {
        return (
            <div>
                <div className="fashion-lover-card">
                    <p className="fashion-text1 sb-txt">Fashion Lovers like you are buying these Dresses
                            right now.</p>
                            <p className="r-txt">
                            We have hand picked all the Sarees which has been in
                            demand from last 2 days
                          </p>
                          
                          <img
                              className="fashion-image"
                              src={clCardSpl}
                              alt="fashion-lover"
                            />
                            <div className="browse-then sb-txt">
                            <Link  to="/">
                           
                           <span style={{    color: '#03a9f4'}}> Browse Them Now</span>
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

export default FashionLovers;