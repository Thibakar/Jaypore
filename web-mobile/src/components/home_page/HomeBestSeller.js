import React, { Component } from 'react'
import ImageCard from '../common/homePageCard'

class HomeBestSeller extends Component {
    render() {
        return (
            <div>
            <div className="bg-white pl-16">
                <div className="pt-24 pb-16 font-18 sb-txt">Best Sellers</div>
                <div className="bg-white mt-16 image-container">
                    <div className='a-scroll-div'>
                        <div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div>
                        <div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div><div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div><div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

export default HomeBestSeller
