import React, { Component } from 'react'
import ImageCard from '../common/ImageCard'
import ViewAllButton from '../common/ViewAllButton'
import SaveCollection from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Save Collection.svg'


class HomeBeadsAndMirror extends Component {
    render() {
        return (
            <div>
                <div className="mb-4">
                   HomeBeadsAndMirror
                        <img src="https://www.jaypore.com/media/events/180710JSB035_JSB_Sangeeta_Boochra_banner.jpg" height="180px" width="360px" />
                        <img src={SaveCollection} alt="heart icon" className="SaveCollection" />

                </div>
                <div className="card">
                    <div className="main">
                        <div className="wrapper">
                            <div className="image-container">
                                <div className="image">
                                    < ImageCard />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <ViewAllButton />
                </div>
            </div>
        )
    }
}

export default HomeBeadsAndMirror
