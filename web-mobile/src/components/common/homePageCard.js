import React, { Component } from 'react'
import Wishlist from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg'
import { Link } from 'react-router-dom'

class HomePageCard extends Component {

    render() {
        return (
            <div style={{ width: '156px', height: '260px' }} className='text-left'>
                <div style={{ height: '80%' }} className='div-rel'>
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
                <div className="font-12" >
                    <div className='grey-txt wt-sp'>Ivory-Blue Handloom Ikat Cotton kurta with...</div>
                    <div className='row-div-start'>
                        <div className='black-color sb-txt'>Rs. 2100</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePageCard
