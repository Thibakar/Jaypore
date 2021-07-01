import React, { Component } from 'react'
import AddToBagButton from '../common/AddToBagButton'
import ImageCard from '../common/ImageCard'


class PdpItemsLook extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-24"><strong>Items From This Look</strong></h3>
                <div className="bg-white mb-24">
                    <div className="main">
                        <div className="wrapper">
                            <div className="image-container height365">
                                <div className="image">
                                    <ImageCard />
                                    <AddToBagButton />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                    <AddToBagButton />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                    <AddToBagButton />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                    
                                    <AddToBagButton />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PdpItemsLook
