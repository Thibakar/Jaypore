import React, { Component } from 'react'
import HomeMainCaarousel from './HomeMainCaarousel'
import ReactDOM from 'react-dom'
import HomeExplore from './HomeExplore'
import HomeTrendingSearch from './HomeTrendingSearch'
import HomeTabs from './HomeTabs'
import HomeFestivCarousel from './HomeFestivCarousel'
import HomeCollectorEdition from './HomeCollectorEdition'
import HomeAlluringAcqua from './HomeAlluringAcqua'
import HomeTimeLessAppeal from './HomeTimeLessAppeal'
import HomeInspiredCanvas from './HomeInspiredCanvas'
import HomeMostRecentCurations from './HomeMostRecentCurations'
import NewArrivals from '../product_details/NewArrivals'
import HomeRecomendedCrations from './HomeRecomendedCrations'
import HomeBagFullOfJoy from './HomeBagFullOfJoy'
import HomeGentleAndFluid from './HomeGentleAndFluid'
import HomeSilvaryScreen from './HomeSilvaryScreen'
import HomePapularCategories from './HomePapularCategories'
import HomeAllOtherCurations from './HomeAllOtherCurations'
import SaveCollection from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Save Collection.svg'
import HomeBestSeller from './HomeBestSeller'
import HomeBuzzOnSocialMedia from './HomeBuzzOnSocialMedia'
import HomeStoryTeller from './HomeStoryTeller'
import HomeFascinatingPins from './HomeFascinatingPins'
import HomeHappyCustomers from './HomeHappyCustomers'
import SimilarProduct from './similarProduct'
import Header from '../common/header/header'
import Footer from '../common/footer/footer' 
import '../../assets/css/sampath.css'
import InstaModal from './insta_modal'
import PinModal from './pinintrust_modal'
class SamHomePage extends Component {

    constructor(props){
        super(props)
        this.state={
            showSimilar:false,
            InstaView:false,
            categoryValue:'',
            pinVisible:false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    toggleSimilar=()=>{
        this.setState({
            showSimilar:!this.state.showSimilar
        })
    }
    toggleInsta=()=>{
        this.setState({
            InstaView:!this.state.InstaView
        })
    }

    togglePin=()=>{
        this.setState({
            pinVisible:!this.state.pinVisible
        })
    }

    changeCategoryValue=(data)=>{
        this.setState({
            categoryValue:data
        },()=>this.scrollTocategory(this.state.categoryValue))
    }

    scrollTocategory=(data)=>{
        let category = ReactDOM.findDOMNode(this.refs[data])
        console.log(category.offsetTop)
        window.scrollTo(0,category.offsetTop)
    }

    render() {


        return (
            <div>
                <SimilarProduct
                visible={this.state.showSimilar}
                closeSimilar={()=>this.toggleSimilar()}
                />
                <InstaModal
                visible={this.state.InstaView}
                closeSimilar={()=>this.toggleInsta()}
                />
                <PinModal
                visible={this.state.pinVisible}
                closeSimilar={()=>this.togglePin()}
                />
                <Header  props={this.props}/>
                <div className="bg-jaypore">
                    <HomeMainCaarousel />
                    <div className="ml-16 mr-16 mb-16 mt-16">
                        <HomeExplore />
                    </div>
                    <div className="mb-8">
                        <img alt="" src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/191105LNT006_191211BAD20_191209SFC004_Dobby_white_range_Slider.jpg" 
                        className="bannerImageSize a-img-cov" />
                        {/* <p>some text here</p> */}
                    </div>
                    <div className="pb-6">
                        <HomeTrendingSearch {...this.props} />
                    </div>
                    <HomeTabs 
                    changeCategoryValue={(data)=>this.changeCategoryValue(data)}
                    />
                    <div className="div-rel position-relative" ref='Best Selling Curation'
                     onClick={()=>this.props.history.push('/productListing')}>
                    <img alt="" src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/200120CUR155_DivineDesign_Flat_50_Off_Curation_slider.jpg" className="bannerImageSize" />
                    <img src={SaveCollection} alt="" className="div-abs a-icon-abs-img" />
                    <h2 className="labletext position-absolute headingAlignmetAboveBanners pl-16 text-white pt-b">A Festive Spirit</h2>
                    <p className="labletext position-absolute textAlignmetAboveBanners pl-16 text-white">Pastel and jewel-toned kurtas, pants, <br />blouses to start the revelries</p>
                </div>
                    <HomeFestivCarousel />
                    <HomeCollectorEdition props={this.props}/>
                    <HomeAlluringAcqua props={this.props}/>
                    <HomeTimeLessAppeal props={this.props}/>
                    <HomeInspiredCanvas props={this.props}/>
                    <HomeMostRecentCurations ref='Most Recent Curation'
                    toggleSimilar={()=>this.toggleSimilar()}  />
                    <hr className="custom-jayporeHrTag ml--20 mt-0 mb-0 border-0" />
                    <div className="card">
                        <NewArrivals />
                    </div>
                    <HomeRecomendedCrations ref='Recommended Curation'
                     props={this.props}/>
                    <HomeBagFullOfJoy  props={this.props}/>
                    <HomeGentleAndFluid  props={this.props} />
                    <HomeSilvaryScreen  props={this.props}/>
                    <HomePapularCategories ref='Popular Categories'props={this.props} />
                    <HomeAllOtherCurations ref='All Other Curation'
                    toggleSimilar={()=>this.toggleSimilar()} />
                    <hr className="custom-jayporeHrTag ml--20 mt-0 mb-0 border-0" />
                    <HomeBestSeller ref='Best Sellers'/>
                    <HomeBuzzOnSocialMedia ref='Buzz on the Social Media' 
                    toggleInsta={()=>this.toggleInsta()}
                    />
                    <HomeStoryTeller />
                    <HomeFascinatingPins togglePin={()=>this.togglePin()}/>
                    <HomeHappyCustomers />
                </div>
                {/* <CollapsablePannel /> */}
                <Footer /> 
                <div className='right-center p-30 back-black-color'>
                        <h3 className='white-color font-15'>Hey! Get the latest Jaypore news,<br /> delivered weekly
                        </h3>
                        <input type='text' className='btn-radius m-t-21 ' placeholder='Email Address' />
                        <button className='mt-10 black-btn btn-radius black-btn-padding'>
                            <h4 className='white-color '>Subscribe
                        </h4>
                        </button>
                    </div>
            </div>
        )
    }
}

export default SamHomePage
