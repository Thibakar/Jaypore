import React, { Component } from "react";
import "../../assets/css/scroll.css";
import ReactDOM from 'react-dom'
import Header from "../shared/header/header";
import { Carousel } from "react-responsive-carousel";
import oval from "../../assets/01 Icons/02 Home Page/oval-5.svg";
import Jlogo from "../../assets/01 Icons/Jlogo/Jlogo1.jpg";
import insta from "../../assets/01 Icons/02 Home Page/Instagram.svg";
import pin from "../../assets/01 Icons/02 Home Page/Pinterest.svg";
import Footer from "../shared/footer/footer";
import search from "../../assets/01 Icons/01 Login Signup/Search.svg";
import HappyView from "../homepage/homepagecards/happy_view";
import CollectionCard from "../homepage/homepagecards/collection_card";
import PopularItem from "../homepage/homepagecards/pupular_item";
import ItemView from './homepagecards/item_view'
import InstagramItem from "../homepage/homepagecards/instargram_card";
import ShowCollectionView from "../homepage/homepagecards/show_collection_view";
import NewArrivalView from "../productdetails/productdetailscards/newArrival_card";
import '../../assets/css/home-page.css'
import PintrestModal from "./homepagecards/pintrest_modal";
import { NavUtil } from "../common/navutil";
import { BaseComponent } from "../common/BaseComponent";
import InstagramModal from "./homepagecards/instagram_modal";

export class HomeMain extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      enableSearchButton:false,
      inputvalue: "",
      caruselData: [
        "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/190624IND019_IND_Indigene_Realunch_moodshot_slider.jpg",
        "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/191015TCI016_Chikankari_range_PL_Slider.jpg",
        "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/200113DIB034_Daily_Objects_MTO_slider.jpg",
        "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/200107CUR113_All_stock_in_bags_and_juttis_slider.jpg",
        "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/2dayleft_25012020_EOSS_jaypore_slider.jpg"
      ],
      curationList: [
        "Best Selling Curation",
        "Most Recent Curation",
        "Recommended Curation"
      ],
      selectedCuration: "Best Selling Curation",
      theposition:0,
      bannerData: {
        img:
          "https://www.jaypore.com/media/events/180713RCT034_The_Right_Cut_Ready_Images_MTO_banner.jpg"
      },
      item: [{}, {}, {}, {}, {}, {}],
      exploreImages: [
        "https://static.jaypore.com/media/store_lps/mobile/images/Desktop-8.png",

        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/20120527/Jaypore_01.jpg",
        "https://jaypore.files.wordpress.com/2018/03/29388410_1777459448959949_9205830084264090096_n.jpg?w=780"
      ],
      StatelySilver:
        "https://www.jaypore.com/media/events/171118RJJ051_RJJ_Jewels_India_banner.jpg",
      KhadiCut:
        "https://www.jaypore.com/media/events/180713RCT034_The_Right_Cut_Ready_Images_MTO_banner.jpg",
      carouselWonderImages: [
        "https://www.jaypore.com/media/events/190924VMK032_VMK_Vamika_Silver_Jewels_Relaunch_banner.jpg",

        "https://www.jaypore.com/media/events/180926LNT068_LNT_Luxe_and_Trends_banner1.jpg",

        "https://www.jaypore.com/media/events/170927JDR015_JDR_Jaypore_Dama_Cotton_Range_banner_1.jpg"
      ],
      pinimg1:
        "https://i.pinimg.com/originals/d7/a3/c8/d7a3c81117455e8fbceef122793a3333.jpg",
      pinimg2:
        "https://i.pinimg.com/474x/5a/90/59/5a9059d0e6bff77f301b46a991a73b42.jpg",
      pinimg3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJC9YYgGco1zd8WLFZLWKCH6GdiVwM44ZzOj0J81zpuZvmYsE&s",
      pinimg4:
        "https://i.pinimg.com/originals/11/c0/90/11c090888cd211cca7ab6327d8b0e713.jpg",
      happyitem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLsHlKuwKfntKBscKs7hY27YlTDf2898JjTPciwlIiu-aqL_Q3",
      itemCardImage:
        "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/b/a/bamapj40014039-2_2.jpg",
      instagramitemimage: [
        "https://static.jaypore.com/media/events/307X363/200102CUR100_Silver_Pearl_Curation_moodshot.jpg",

        "https://static.jaypore.com/media/events/307X363/191207IDS012_IDS_INDICREATE_DESIGNS_moodshot.jpg",

        "https://static.jaypore.com/media/events/307X363/191209AST008_Arteastri_moodshot.jpg",

        "https://static.jaypore.com/media/events/307X363/191128DYA052_191128DYA044_DYA_AADYAA_Relaunch_MoodshotU.jpg"
      ],
      showcollectioncardimages: [
        "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/roaapjj10000438-1_3.jpg",
        "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/i/ritapj40014402-1_3.jpg",
        "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/t/y/tyaapj40012349-1_8.jpg"
      ],
      popularitemimage:
        "https://static.jaypore.com/media/events/171009AHR054_AHR_Aaharya_Pvt_Ltd_Jew_banner.jpg"
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height
    let categoryTabElement = ReactDOM.findDOMNode(this.refs["categoryTab"])
    if(categoryTabElement.offsetTop === (winScroll+92)){
      categoryTabElement.style.backgroundColor = 'rgba(255,255,255,0.9)'
    }
    let categories_doms=[]
    this.state.curationList.map((list_item,i)=>{
      categories_doms.push( ReactDOM.findDOMNode(this.refs[list_item]))
    })
    let categories_vlaue=this.state.selectedCuration;
    for(let i=0;i<this.state.curationList.length;i++){
      if(winScroll > (categories_doms[i].offsetTop-100)){
        categories_vlaue=this.state.curationList[i];
      }
    }
    this.setState({
      theposition: scrolled,
      selectedCuration:categories_vlaue
    })

  }

  onValueChange = (e) => {
    console.log("this" ,e.target.value)
    this.setState({
      inputvalue: e.target.value, 
      colorWhite: '#fff'
    })
    let typesValue = e.target.value;
    if(typesValue.length>1){
      this.setState({
        enableSearchButton: true
      })
    }else{
      this.setState({
        enableSearchButton: false
      })
    }
  }

  _carousel = () => {
    let data = [];
    this.state.caruselData.map(item =>
      data.push(
        <div>
          <img src={item} alt="home-img" />
        </div>
      )
    );
    return data;
  };

  _renderCuration = () => {
    let data = [];
    for (let i = 0; i < this.state.item.length; i = i + 2) {
      data.push(
        <tr>
          <td>
            <CollectionCard />
            {/* <ItemView /> */}
          </td>
          <td>
            <CollectionCard />
          </td>
        </tr>
      )
    }
    return data;
  }

  changeCuration = (data) => {
    this.setState({
      selectedCuration: data
    },()=>this.scrollTocategory(this.state.selectedCuration))
  }
  scrollTocategory=(data)=>{
    console.log(data)
    let category = ReactDOM.findDOMNode(this.refs[data])
    window.scrollTo(0,category.offsetTop)
    console.log('caetegory',category.clientHeight)
}

  render() {
    let popularCategories1 = {
      title: "Clothing",
      subtitle: "Showing the most popular categories",
      categories: ["Sarees", "Kurtas", "Tunics", "Tops", "Dresses", "Kaftans", "Jackets", "Duppattas"]
    }

    let popularCategories2 = {
      title: "Jewelery",
      subtitle: "Showing the most popular categories",
      categories: ["Earrings", "Necklaces & Pendants", "Cuffs/Bracelets/Bangles", "Rings", "Nose Pins", "Bangles", "Silver Accessories", "Rings"]
    }

    let popularCategories3 = {
      title: "Accessories",
      subtitle: "Showing the most popular categories",
      categories: ["Sling Bags", "Clutches", "Wallets", "Potlis", "Laptop Bags", "Kalhapuris/Flats", "Kids Accessories", "Men Accessories"]
    }

    let popularCategories4 = {
      title: "Home & Art",
      subtitle: "Showing the most popular categories",
      categories: ["Decorative Trays & Boxes", "Picture Frames", "Vases", "Table LInen", "Wall Accents", "Table Top Accessories", "Dining Plates", "Bath Accessories"]
    }
    return (
      <div className="  bg-pink " style={{ zIndex: -1 }}>
        <Header props={this.props} />
        <div className="container-fluid">
          <div className="a-rel " >
            <Carousel
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              className="cu-ptr"
            >
              {this._carousel()}
            </Carousel>
            <div className="a-abs a-back-white a-seach-bar-home a-radius searchforcard">
              <div className="a-pr-pl-24">
                <p className="a-14-txt a-mt-16 home-mb-5">
                  Search for India's most beautiful products
              </p>
                <div
                  className="a-width-full a-row-div a-search-div a-radius"
                  style={{ padding: 2 }}
                >
                  <img src={search} className="a-ml-24" alt="search-imagesss" />
                  <input
                    type="text "
                    id="myInput"
                    className="a-search-input a-radius a-22-txt"
                    style={{ width: "90%", height: "99%" }}
                    onChange={(data) => this.onValueChange(data)}
                  />
                  <button className={`m-l-550 a-search-btn a-radius searchBtnMargin ${(this.state.enableSearchButton)?"highlight-button":""}`} ref="searchBtn" onClick={NavUtil.goToSearchListing}>
                    <h5 className={`a-brand a-14-txt a-mb-0 a-mt-0 ${(this.state.enableSearchButton)?"only-color-white":""}`} ref="searchBtn">Search</h5>
                  </button>
                </div>
                <p className="a-14-txt a-mt-8 a-mb-0">
                  Trending Searches: Ikat, Cotton Sarees, Silver Jewellery,
                  Dresses, Nose Pins
              </p>
              </div>
            </div>
          </div>
          <div className="a-back-white a-store-center innerHomeWidth hm-br-5">
            <div className="a-row-div">
              {this.state.exploreImages.map(i => (
                <div>
                  <img src={i} width={265} height="128px" alt="home-img" />
                </div>
              ))}
            </div>
            <h5 className="a-32-txt a-mt-32 a-mb-0 explore_component cl-ml-0">
              Our First Ever Offline Store Is Here!
          </h5>
            <h5 className="a-16-txt a-mt-16 a-mb-0 a-r-txt explore_componenth5 cl-ml-0">
              Drop by for an immersive shopping experience
          </h5>
            <button
              className=" a-back-brand a-radius a-p-10 a-pl-pr-24 a-mb-29 a-mt-29"
              style={{ width: "260px", height: 50 }} onClick={NavUtil.goToCategoryListing}
            >
              <p
                className="a-txt-20 a-color-white font-size-14"
                style={{ margin: 0 }}
              >
                Explore
            </p>
            </button>
          </div>
          <div className='bg-white' style={{ height: 32 }} />
          <div>
            <div className='tabBarTop' ref='categoryTab' >
              <div class='container'>
                {
                  this.state.curationList.map((item, index) => (
                    <div className={this.state.selectedCuration===item?'selected-curation':'unselected-curation'}
                    onClick={()=>this.changeCuration(item)}
                    >
                        {item}
                    </div>
                  ))
                }
              </div>

            </div>
            <div id="Best Selling Curation" className='contentMainContainer bg-white' 
            ref='Best Selling Curation'>
              <div className='container'>
                <table className='collectionTable'>
                  {this._renderCuration()}
                </table>
              </div>
            </div>
            <div id="Most Recent Curation" 
            ref='Most Recent Curation'
            className='contentMainContainer a-mt-16 bg-white a-pt-48 a-pb-48'>
              <div className='container a-txt-left'>
                <div className='font-size-22 a-sb-txt'>
                  Most Recent Curation
            </div>

                <ShowCollectionView />
                <ShowCollectionView />
                <ShowCollectionView />
              </div>
            </div>
            <div className='contentMainContainer hm-mt-20 bg-white a-pt-48 a-pb-48"'>
              <div className='container a-txt-left'>
                <div className='font-size-22 a-sb-txt m-b-16'>
                  New Arrivals
            </div>
                <NewArrivalView />
              </div>
            </div>
            <div id="Recommended Curation" 
            ref='Recommended Curation'
            className='contentMainContainer a-mt-16 bg-white a-pt-48 a-pb-48"'>
              <div className='container a-txt-left'>
                <div className='font-size-18 a-sb-txt m-b-16'>
                  Recommended Curation
            </div>
                <table className='collectionTable'>
                  {this._renderCuration()}
                </table>
              </div>
            </div>




            <div className='contentMainContainer a-pt-48 a-pb-48 margin-bottom-48"'>
              <div className='container a-txt-left'>
                <div className='font-size-18 a-sb-txt m-b-16'>
                  Popular Categories
            </div>
                <div className='a-row a-sp-bwt'>

                  <PopularItem data={popularCategories1} />
                  <PopularItem data={popularCategories2} />
                  <PopularItem data={popularCategories3} />
                  <PopularItem data={popularCategories4} />
                </div>
              </div>
            </div>


            <div className='contentMainContainer a-mt-16 bg-white a-pt-48 a-pb-48 p-b-48"'>
              <div className='container a-txt-left'>
                <div className='font-size-18 a-sb-txt'>
                  All Other Curation
            </div>

              <ShowCollectionView />
              <ShowCollectionView />
              <ShowCollectionView />
              <button className="a-view-btn a-radius loadMoreCurationsBtn" onClick={NavUtil.goToCategoryListing}>
                Load more curation...
              </button>
            </div>
            </div>

            <div className='contentMainContainer a-mt-16 bg-white a-pt-48 margin-bottom-48"'>
              <div className='container a-txt-left'>
                <div className='font-size-18 a-sb-txt m-b-16'>
                  Best Sellers
            </div>
                <NewArrivalView />
              </div>
            </div>
          </div>
          <div className='contentMainContainer a-mt-16 bg-white a-pb-48"'>
            <div className="a-back-white a-pl-pr-80 a-pt-48 a-pb-48 container">
              <div className="a-row">
                <img
                  src={Jlogo}
                  style={{ marginRight: 10, marginLeft: 5 }}
                  height="44px"
                  width="44px"
                  alt="home-images"
                />
                <h5 className="a-22-txt a-mt-8 a-mb-0 semiBold cl-ml-0">
                  What's been happening at Jaypore!
            </h5>
              </div>
              <div className="a-row a-sp-bwt a-mt-24 ">
                <div className="a-insta-card a-pr-pl-56 a-pb-48 a-radius">
                  <a href="#instagram"><div className="a-row s-mb--5">
                    <img
                      src={insta}
                      style={{ marginRight: 10 }}
                      alt="home-images"
                    />
                    <p className="a-16-txt regular" style={{ marginTop: 15 }}>
                      Instagram
                </p>
                  </div>
                  </a>
                  <div id="instagram" className="modal-window">
                    <InstagramModal />
                  </div>
                  <InstagramItem
                    instagramitemimage={this.state.instagramitemimage}
                  />
                  <InstagramItem
                    instagramitemimage={this.state.instagramitemimage}
                  />
                  <InstagramItem
                    instagramitemimage={this.state.instagramitemimage}
                  />
                  <InstagramItem
                    instagramitemimage={this.state.instagramitemimage}
                  />
                </div>
                <div className="a-pin-card a-pr-pl-48 a-center a-radius">
                  <h5 className="a-24-txt a-mt-16 a-mt-0 a-mb-16 storyTeller">
                    STORYTELLERS OF WONDER
              </h5>
                  <Carousel
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    className="a-width-full story storyTeller"
                  >
                    {this.state.carouselWonderImages.map(i => (
                      <img src={i} alt="home-images" />
                    ))}
                  </Carousel>

                  <div className="a-mt-32">
                    <div className="a-row">
                      <a href="#pintrest"><img
                        src={pin}
                        style={{ width: 25, height: 25 }}
                        alt="home-images"
                      /></a>
                      <div id="pintrest" className="modal-window">
                        <PintrestModal />
                      </div>
                      <p className="a-16-txt regular">Fascinating Pins</p>
                    </div>
                    <div className="a-row">
                      <div class="s-pr-7" style={{ width: "50%" }}>
                        <img
                          style={{ height: "54%", width: "100%" }}
                          className="a-radius margin-bottom-3-5"
                          src={this.state.pinimg1}
                          alt="home-images"
                        />

                        <img
                          style={{ height: "40%", width: "100%" }}
                          className="a-radius margin-top-3-5"
                          src={this.state.pinimg2}
                          alt="home-images"
                        />
                      </div>
                      <div style={{ width: "50%" }}>
                        <img
                          style={{ width: "100%", height: "40%" }}
                          className="a-radius margin-bottom-3-5"
                          src={this.state.pinimg3}
                          alt="home-images"
                        />
                        <img
                          style={{ height: "54%", width: "100%" }}
                          className="a-radius margin-top-3-5"
                          src={this.state.pinimg4}
                          alt="home-images"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className='contentMainContainer a-back-white hm-pb-30 hm-mt-20 hm-pt-30'>
            <div className="container  a-txt-left">
              <div className='font-size-18 a-sb-txt m-b-16'>
                Happy Customers
            </div>
              <HappyView />
              <HappyView />
            </div>
          </div>

          {/* <div className="a-mt-48 a-back-white a-pl-pr-80 a-pt-48 a-pb-48">
          <div className="a-row a-sp-bwt a-mt-8">
            <CollectionCard StatelySilver={this.state.StatelySilver} />
            <CollectionCard StatelySilver={this.state.KhadiCut} />
          </div>
          <div className="a-row a-sp-bwt a-mt-4">
            <ItemView itemCardImage={this.state.itemCardImage} />
            <ItemView itemCardImage={this.state.itemCardImage} />
          </div>
          <div className="a-row a-sp-bwt a-mt-8">
            <CollectionCard StatelySilver={this.state.StatelySilver} />
            <CollectionCard StatelySilver={this.state.KhadiCut} />
          </div>
          <div className="a-row a-sp-bwt a-mt-4">
            <ItemView itemCardImage={this.state.itemCardImage} />
            <ItemView itemCardImage={this.state.itemCardImage} />
          </div>
          <div className="a-row a-sp-bwt a-mt-8">
            <CollectionCard StatelySilver={this.state.StatelySilver} />
            <CollectionCard StatelySilver={this.state.KhadiCut} />
          </div>
          <div className="a-row a-sp-bwt a-mt-4">
            <ItemView itemCardImage={this.state.itemCardImage} />
            <ItemView itemCardImage={this.state.itemCardImage} />
          </div>
        </div>
        <div className="a-mt-24 a-back-white a-pl-pr-80 a-pt-48 a-pb-48">
          <h5 className="a-22-txt a-mt-0 a-mb-0 semiBold">
            Most Recent Curation
          </h5>
          {this.state.showcollectioncardimages.map(i => (
            <ShowCollectionView showcollectioncardimages={i} />
          ))}
        </div>
        <div className="a-mt-24 a-back-white a-pl-pr-80 a-pt-48 a-pb-48">
          <h5 className="a-22-txt a-mt-0 s-mb-16 semiBold">New Arrivals</h5>
          <NewArrivalView itemCardImage={this.state.itemCardImage} />
        </div>
        <div className="a-mt-24 a-back-white a-pl-pr-80 a-pt-48 a-pb-48">
          <h5 className="a-22-txt a-mt-0 s-mb-16 semiBold">
            Recommended Curation
          </h5>
          <div className="a-row a-sp-bwt a-mt-8">
            <CollectionCard StatelySilver={this.state.StatelySilver} />
            <CollectionCard StatelySilver={this.state.KhadiCut} />
          </div>
          <div className="a-row a-sp-bwt a-mt-4">
            <ItemView itemCardImage={this.state.itemCardImage} />
            <ItemView itemCardImage={this.state.itemCardImage} />
          </div>
          <div className="a-row a-sp-bwt a-mt-8">
            <CollectionCard StatelySilver={this.state.StatelySilver} />
            <CollectionCard StatelySilver={this.state.KhadiCut} />
          </div>
          <div className="a-row a-sp-bwt a-mt-4">
            <ItemView itemCardImage={this.state.itemCardImage} />
            <ItemView itemCardImage={this.state.itemCardImage} />
          </div>
          <div className="a-row a-sp-bwt a-mt-8">
            <CollectionCard StatelySilver={this.state.StatelySilver} />
            <CollectionCard StatelySilver={this.state.KhadiCut} />
          </div>
          <div className="a-row a-sp-bwt a-mt-4">
            <ItemView itemCardImage={this.state.itemCardImage} />
            <ItemView itemCardImage={this.state.itemCardImage} />
          </div>
        </div>
        <div className="a-mt-32 a-pl-pr-80 ">
          <h5 className="a-22-txt a-mb-0 a-mt-0 semiBold">
            Popular Categories
          </h5>
          <div className=" a-mt-16 a-row a-sp-bwt">
            <PopularItem popularitemimage={this.state.popularitemimage} />
            <PopularItem popularitemimage={this.state.popularitemimage} />
            <PopularItem popularitemimage={this.state.popularitemimage} />
            <PopularItem popularitemimage={this.state.popularitemimage} />
          </div>
        </div>
        <div className="a-mt-24 a-back-white a-pl-pr-80 a-pt-48 a-pb-48">
          <h5 className="a-22-txt a-mt-0 a-mb-16 semiBold">
            All Other Curation
          </h5>
          {this.state.showcollectioncardimages.map(i => (
            <ShowCollectionView showcollectioncardimages={i} />
          ))}

          <button className="a-view-btn a-mt-16 a-radius">
            <p className="a-brand viewAllBtn a-16-txt medium">
              Load more curation...
            </p>
          </button>
        </div>
        <div className="a-mt-24 a-back-white a-pl-pr-80 a-pt-48 a-pb-48">
          <h5 className="a-22-txt a-mt-0 a-mb-16 semiBold">Best Sellers</h5>
          <NewArrivalView itemCardImage={this.state.itemCardImage} />
        </div>
            </div>
          </div>
        </div>

        <div className="a-mt-24 a-back-white a-pl-pr-80 a-pt-48 a-pb-48">
          <h5 className="a-22-txt a-mb-0 a-mt-0 semiBold">Happy Customers</h5>
          <HappyView happyitem={this.state.happyitem} />
          <HappyView happyitem={this.state.happyitem} />
        </div> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomeMain;
