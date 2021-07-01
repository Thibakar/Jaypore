import React, { Component } from 'react'

class HomeTrendingSearch extends Component {

    render() {
        let trendingSearches = ['Ikat', 'Cotton', 'Silver Jewellery', 'Dresses', 'Nose Pins', 'Sarees']
        return (
            <div className="trending-card a-trending-div"
            
            >
                    <div className="sb-txt font-12">TRENDING SEARCHES</div>
                    <div className='mt-16 a-ml--1'>
                        {
                            trendingSearches.map((searchItem) => {
                                return <div className="m-1 float-left">
                                    < button type="button" className="btn-ikat jaypore-border-color border-radius"
                                    onClick={()=>this.props.history.push('/productListing')}
                                    > 
                                    {searchItem}
                                    </button>
                                </div>
                            })
                        }
                    </div>
            </div >
        )
    }
}

export default HomeTrendingSearch
