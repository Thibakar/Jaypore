import React, { Component } from 'react'
import ShowCollection from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Show Collection.svg'


class RecentCurationCard extends Component {
    render() {
        return (
            <div>
                <div className="mt--15">
                    <img src={ShowCollection} alt="heart icon" className="ShowCollection" />
                    <img src="https://files.lbb.in/78814909_596221037879125_5520118888517556005_n_1578901433140.jpg" alt="recent curation images" className="recentCurationImages" />
                </div>
            </div>
        )
    }
}

export default RecentCurationCard
