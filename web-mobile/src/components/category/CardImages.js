import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Wishlist from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg'
import Ready from '../../assets/Jaypore Assets/01 Icons/03 Listing/Ready to ship.svg'
import Similar from '../../assets/Jaypore Assets/01 Icons/03 Listing/Similar Products.svg'

class CardImages extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '156px', height: '350px' }}>
                <div style={{ height: '70%' }} className='div-rel'>
                    <Link to={{ pathname: '/productListing', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                        <img src="https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/2301202008493320200123_Pashme_Ladakh_Desktop.jpg" className="border-radius" alt="productimage"
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%'
                            }} />
                    </Link>
                    <img src={Wishlist} alt="hearticon" className="heartIcon heartIconSize div-abs" 
                        style={{ top: 8, left: 'auto', right: 8 }}
                    />
                      <img src={Ready} alt="hearticon" className="ready-icon"
                    />
                       <img src={Similar} alt="hearticon" className="similar-icon"
                    />
                </div>
                <div>
                <div className=' font-12 sp-letter black-color sb-txt'>JAYPORE</div>
                    <div className=' font-12 grey-txt'>Ivory-Blue Handloom </div>
                   
                        <div className=' font-12 black-color sb-txt'>Rs. 2100</div>
                       
                   
                    <div className=' font-12 m-txt grey-txt'>XS, S, M, L, XL</div>
                    </div>
            
            </div>
                
            </div>
        );
    }
}

export default CardImages;