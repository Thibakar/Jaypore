import React, { Component } from 'react'

class HomeExplore extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTu8r6bWc_NHeUoH_fdA-8yTWS6pB1k5rqgZEE83R4ObtFdLzaDg&s" 
                    className="eventSectionImage a-img-top-border" />

                    <div className="card text-center">
                        <h1 className="mt-16 explore-heading pt-b">Our First Ever Offline<br/> Store Is Here</h1>
                        <p className="font-size-12 explore-text colr-21">Drop by for an immersive shopping experience</p>
                        <div className="text-center">
                            <button type="button" className="btn-explore border-radius mb-16 m-txt">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeExplore
