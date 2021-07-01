import React, { Component } from 'react'
import Wishlist from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg'
import { Link } from 'react-router-dom'

class ImageCard extends Component {

    render() {
        return (
            <div style={{ width: '156px', height: '300px' }}>
                <div style={{ height: '70%' }} className='div-rel'>
                    <Link to={{ pathname: '/productDetail', state: 'all' }} params={{ value: "all" }} activeClassName="active">
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
                </div>
                <div className="font-12 text-left" >
                    <div className='sp-letter black-color sb-txt'>JAYPORE</div>
                    <div className='grey-txt wt-sp'>Ivory-Blue Handloom Ikat Cotton...</div>
                    <div className='row-div-start'>
                        <div className='black-color sb-txt'>Rs. 2100</div>
                        <div className='under-though ml-5-m grey-txt'>Rs. 3000</div>
                    </div>
                    <div className='m-txt grey-txt'>XS, S, M, L, XL</div>
                </div>
            </div>
        )
    }
}

export default ImageCard
