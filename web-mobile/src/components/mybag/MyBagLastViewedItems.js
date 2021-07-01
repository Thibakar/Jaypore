import React, { Component } from 'react'
import ImageCard from '../common/homePageCard'
import MyBagAddToBagBtn from './MyBagAddToBagBtn'

class MyBagLastViewedItems extends Component {
    render() {
        return (
            <div>
                <div className="bg-white pl-16 bt-bm">
                    <div className="pt-16 m-txt font-18 black-color-42">Last Viewed Items</div>

                    <div className="main pt-16 ">
                        <div className="wrapper">
                            <div className="image-container mt--10 height318">
                                <div className="image">
                                    <ImageCard />
                                    <MyBagAddToBagBtn />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                    <MyBagAddToBagBtn />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                    <MyBagAddToBagBtn />
                                </div>
                                <div className="image">
                                    <ImageCard />
                                    <MyBagAddToBagBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBagLastViewedItems
