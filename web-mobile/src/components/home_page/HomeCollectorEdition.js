import React, { Component } from 'react'
import ImageCard from '../common/ImageCard'
import ViewAllButton from '../common/ViewAllButton'
import SaveCollection from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Save Collection.svg'

class HomeCollectorEdition extends Component {
    render() {
        return (
            <div>
                <div className="div-rel" onClick={()=>this.props.props.history.push('/productListing')}>
                    <img alt="" src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/191231BRA100R_BRA_BRANCA_MTO_Relaunch_slider.jpg" className="bannerImageSize" />
                    <img src={SaveCollection} alt="heart icon" className="div-abs a-icon-abs-img" />
                    <h2 className="labletext position-absolute headingAlignmetAboveBanners pl-16 text-white pt-b">Collector's Edition</h2>
                        <p className="labletext position-absolute textAlignmetAboveBanners pl-16 text-white">Tribal silver jewelry with glass, beads<br/>and stones to take you back in time</p>
                </div>
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

export default HomeCollectorEdition
