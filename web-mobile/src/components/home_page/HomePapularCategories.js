import React, { Component } from 'react'
import PopularSectionCard from './PopularSectionCard'

class HomePapularCategories extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className="mt-24 pl-16"><strong>Popular Categories</strong></h3>
                </div>
                <div className="pl-16 pr-16">
                    <div className="main">
                        <div className="wrapper">
                            <div className="image-container">
                                <div className="popularCardSize">
                                    <PopularSectionCard props={this.props.props}/>
                                </div>
                                <div className="popularCardSize">
                                    <PopularSectionCard props={this.props.props}/>
                                </div>
                                <div className="popularCardSize">
                                    <PopularSectionCard props={this.props.props}/>
                                </div>
                                <div className="popularCardSize">
                                    <PopularSectionCard props={this.props.props}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePapularCategories
