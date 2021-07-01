import React, { Component } from 'react'
import ImageCard from '../common/homePageCard'
import ViewAllButton from '../common/ViewAllButton'

class HomeFestivCarousel extends Component {
    render() {
        return (
            <div>
                <div className="bg-white pl-16 pr-16 pt-16 image-container">
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
                    
                    <ViewAllButton />
                </div>
            </div>
        )
    }
}

export default HomeFestivCarousel
