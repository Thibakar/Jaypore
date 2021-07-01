import React, { Component } from 'react'
import ImageCard from '../common/ImageCard'

class MostPopular extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-24 pb-8"><strong>Most Popular</strong></h3>
                <div className="main">
                    <div className="wrapper">
                        <div className="image-container">
                            <div className="image">
                                <ImageCard />
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
            </div>
        )
    }
}

export default MostPopular
