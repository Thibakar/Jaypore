import React, { Component } from 'react'

class PdpAddToBag extends Component {
    render() {
        return (
            <div style={{paddingRight: 15,
                marginLeft: -15,padding:8}} className='bck-fffaf7 row-bwt-div '>
                <button type="button" className="border-radius directBy-btn mr-8 font-15 r-txt"
                style={{width:'37%'}}
                >Direct Buy</button>
                <button type="button" className="addBag-btn border-radius font-15 r-txt"
                style={{width:'60%'}}
                >Add to Bag</button>
            </div>
        )
    }
}

export default PdpAddToBag
