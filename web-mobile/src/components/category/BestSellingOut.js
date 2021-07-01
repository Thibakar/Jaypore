import React, { Component } from 'react';
import ImageCard from '../common/ImageCard';
import CardImages from './CardImages';


class BestSellingOut extends Component {
    render() {
        return (
            <div>
                  <div className="bg-white pl-16 mt-20 m-b-20">
                    <div className="pt-16 m-txt font-18 black-color-42 brandcolor-txt">Best Selling Dresses</div>

                    <div className="main pt-16 ">
                        <div className="wrapper">
                            <div className="image-container mt--10 text-left">
                                <div className="image">
                                 <CardImages/>
                                    
                                </div>
                                <div className="image">
                                 <CardImages/>
                                    
                                </div>
                                <div className="image">
                                 <CardImages/>
                                    
                                </div>
                                <div className="image">
                                 <CardImages/>
                                    
                                </div>
                                <div className="image">
                                 <CardImages/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default BestSellingOut;