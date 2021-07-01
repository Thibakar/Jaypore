import React from 'react'
import Footer from '../../common/footer/footer'
import CancelItem from '../../mybag/CancelItem'
import PdpSelectSize from '../../product_details/PdpSelectSize';
 import '../../../assets/css/common_Mobile.css';
import '../../../assets/css/akash.css';
import img1 from '../../../assets/Jaypore Assets/01 Icons/logo/01p.jpeg';
import img2 from '../../../assets/Jaypore Assets/01 Icons/logo/03p.jpeg';
import img3 from '../../../assets/Jaypore Assets/01 Icons/logo/08p.jpeg';
import img4 from '../../../assets/Jaypore Assets/01 Icons/logo/10p.jpeg';
import img5 from '../../../assets/Jaypore Assets/01 Icons/logo/11p.jpeg';
import img6 from '../../../assets/Jaypore Assets/01 Icons/logo/13p.jpeg';
import img7 from '../../../assets/Jaypore Assets/01 Icons/logo/My Wishlist.svg';
import Wishlist from '../../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg'
import ReactDOM from 'react-dom'
import img8 from '../../../assets/Jaypore Assets/01 Icons/logo/Close.svg';
import img9 from '../../../assets/Jaypore Assets/01 Icons/logo/dress1.jpg';
import img10 from '../../../assets/Jaypore Assets/01 Icons/logo/dress2.jpg';
import img11 from '../../../assets/Jaypore Assets/01 Icons/logo/dress3.jpg';
import img12 from '../../../assets/Jaypore Assets/01 Icons/logo/dress4.jpg';
import img13 from '../../../assets/Jaypore Assets/01 Icons/logo/earrings.jpg';
import img14 from '../../../assets/Jaypore Assets/01 Icons/logo/Facebook.svg';
import img16 from '../../../assets/Jaypore Assets/01 Icons/logo/Group 3.svg';
import img17 from '../../../assets/Jaypore Assets/01 Icons/logo/Instagram.svg';
import img18 from '../../../assets/Jaypore Assets/01 Icons/logo/jaypore.png';
import img19 from '../../../assets/Jaypore Assets/01 Icons/logo/necklace.jpg';
import img20 from '../../../assets/Jaypore Assets/01 Icons/logo/necklace1.jpg';
import img21 from '../../../assets/Jaypore Assets/01 Icons/logo/Pinterest.svg';
import img22 from '../../../assets/Jaypore Assets/01 Icons/logo/Show Collection.svg';
import img23 from '../../../assets/Jaypore Assets/01 Icons/logo/Twitter.svg';
import { Overlay } from 'react-bootstrap';



class myWishlist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: true,
            cross:"img8",
            outoofstock:"OUT OF STOCK",
            data:[
                {
                    brand:"JAYPORE",
                    name: "Linen Loven",
                    namedis:"Whisper-Lightyard...'",
                    price: "Rs. 1740",
                    imgurl: "https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/2501202005540125012020_d_Easy_separates_for_carefree_days.jpg",
                    size:"XS, S, M, L, XL", 
                    stock: "in"  
               },
               {
                brand:"JAYPORE",
                name: "A Crystal",
                namedis:"Contemporary silver..",
                price: "Rs. 1740",
                imgurl: "https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/3001202008543420200130_Ritu_Kumar_Desktop.jpg",
                size:"XS, S, M, L, XL",
                stock: "out"       
           },
           {
            brand:"JAYPORE",
            name: "A Radiant",
            namedis:"Traditional styles..",
            price: "Rs. 1840",
            imgurl: "https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/2301202008485020200123_Anantaa_Desktop.jpg",
            size:"XS, S, M, L, XL",
            stock: "out"       
          }, 
         {
        brand:"JAYPORE",
        name: "Garden Fresh",
        namedis:"Collectible jewelry...",
        price: "Rs. 1850",
        imgurl: "https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/2501202005550825012020_d_Elegant_blouses_to_complement_your_sarees.jpg",
        size:"XS, S, M, L, XL", 
        stock: "in"       
         },
         {
            brand:"JAYPORE",
            name: "Paisley To Pr...",
            namedis:"Bagh printed cotton..",
            price: "Rs. 1940",
            imgurl: "https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/0603202008552720200306_Exquisite_precious_jewelry_Desktop.jpg",
            size:"XS, S, M, L, XL", 
            stock: "in"       
             },
             {
                brand:"JAYPORE",
                name: "A Regal Affair",
                namedis:"Precious stone-studd..",
                price: "Rs. 2740",
                imgurl: "https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/2501202005544325012020_d_Exquisite_jewelry_for_endless_accessorizing.jpg",
                size:"XS, S, M, L, XL", 
                stock: "out"       
                 },
                 {
                    brand:"JAYPORE",
                    name: "A Striped Soj",
                    namedis:"cotton khadi..",
                    price: "Rs. 2840",
                    imgurl: "https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/0603202008545720200306_Elegant_separates_accessories_Desktop.jpg",
                    size:"XS, S, M, L, XL",
                    stock: "out"     
                     },
                     {
                        brand:"JAYPORE",
                        name: "A Gypsy Sta...",
                        namedis:"tribal,coin an.",
                        price: "Rs. 2740",
                        imgurl: "https://static.jaypore.com/tr:w-302,h-527,e-sharpen/media/cms_component/2301202008500820200123_Daily_Objects_Desktop.jpg",
                        size:"XS, S, M, L, XL",
                        stock: "in"     
                         }
    
            ],
            selectedSize:''
        }
    }

    changeSizeSelect=(val)=>{
        this.setState({
            selectedSize:val
        })
        let continue_button_dom = ReactDOM.findDOMNode(this.refs.donebtn)
        if (val == '') {
            continue_button_dom.style.backgroundColor = '#babcbf'
        }
        else {
            continue_button_dom.style.backgroundColor = '#BB4225'
        }
    }

    toggleVisible=()=>{
        this.setState({
            visible:!this.state.visible
        })
    }

    toggle = () => {
        this.setState(
            {
                select: !this.state.select
            }
        )
    }

    render() {
        console.log("this is size",this.state.selectedSize)

        return(
            <div className="screen-box">
             <CancelItem
                toggleVisible={()=>this.toggleVisible()}
                visible={this.state.visible}
                imgurl='https://static.jaypore.com/media/events/307X363/191112SSN030_SSN_Sailesh_Singhania_Moodshot.jpg'
                />
                <div class="mobile-fixed-header">
                    <div class="mobile-container">
                        <a><img src={img16} height="15" onClick={()=>this.props.history.push("/myAccount")}></img></a>
                        <label className="mobile-label-name">My Wishlist&nbsp;&nbsp;&nbsp;<span className="sub-heading-txt">(7 items)</span></label>
                    </div>
                    </div>
                    <div className="mobile-fixed-header-back"></div>
                   

                <div className="new-mobile-body">
                
                    {
                        this.state.data.map((item, i) => (
        
                    <div className="card-grid">
                        <div className="image-box">
                            <img className="card-image" src={item.imgurl}></img>
                            {item.stock === 'out' ? <div className="not-available">OUT OF STOCK</div> : ''}
                            
                        </div>
                                <img class="card-grid-cancel" src={img8} onClick={()=>this.toggleVisible()}></img>
                            
                                <div className="card-grid-details">
                                <div className="title-bold">{item.brand}</div>
                                <div className="font-13 grey-txt">{item.name}</div>
                                <div className="font-13 grey-txt">{item.namedis}</div>
                                <div className="title-bold ">{item.price}</div>
                                <div className="font-b13 grey-txt">{item.size}</div>
                                {item.stock === 'out' ? <a className="closea" href="#popup3"><button class="show-similar-products" >Show Similar Products</button></a> : <a className="closea" href="#popup2"><button class="move_to_bag">Move To Bag</button></a>}
                                
                                
                                </div>
                    </div>

                        ))}
                </div>
                   
                   

                    <div id="popup2" className="mobile-overlay-down">
                        <div className="length-popup-size">
                        <a className="close-pop" href="#">&times;</a>
                            <div className="selector">
                            <PdpSelectSize {...this.props} 
                            changeSizeSelect={(val)=>this.changeSizeSelect(val)}
                            />
                            </div>
                                <button class="size-done-btn"
                                ref='donebtn'
                                onClick={()=>this.props.history.goBack()}>Done</button>
                        </div>
                    </div>

                    <div id="popup3" class="mobile-overlay-down">
                        <div class="similar-card">
                            <div className="similar-heading">
                            <div className="simiar-left-heading">Similar Products</div>
                            <div className="simiar-right-heading" onClick={()=>this.props.history.goBack()}>&times;</div>
                            </div>
                            <div class="similar-show-content">
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                   
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                                <div class="mobile-show-content-class">
                                    <div className="similar-box">
                                    <img src={img1} class="similar-img-box"></img>
                                    <img class="similar-like" src={Wishlist}></img>
                                    </div>
                                    <h5 class="similar-brand-name">HAMSINI</h5>
                                    <p class="similar-content">Indigo cotton saree..</p>
                                    <p class="similar-content">cover(130x740)</p>
                                    <h5 class="similar-brand-name">Rs. 740</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* <div className="mt-20">
                        <div className="length-heading">Select Size</div>
                        <div className="length-sub-heading">SIZE CHART</div>
                        </div>
                        <div className="size-icon">
                            <a className="mobile-size-rounda">S</a><a class="mobile-size-round">M</a><a class="mobile-size-roundb">L</a><a class="mobile-size-roundc">XL</a>
                            </div>
                            <div className="size-helper-box">
                            Size not available?<a class="size-helper-content" href="#popup3"> View similar products</a>
                        </div> */}
                       */}
                
                    {/* <PdpSelectSize/> */}
            
            
            
                    {/* <div id="popup1" className="mobile-overlay">
                        <div className="cancel-popup">
                        <a className="close-pop" href="#">&times;</a>
                            <img className="pop-image" src="https://static.jaypore.com/media/events/307X363/200220DDN019_DivineDesign_moodshot.jpg"></img>
                            <div className="pop-content">
                                <center><b>Are you sure you want to remove this collection from the wishlist?</b></center>
                                <button className="remove-item-button" onClick={()=>this.props.history.goBack()}>Yes, remove this item</button><br/>
                                <button className="keep-item-button" onClick={()=>this.props.history.goBack()}>Add to Bag</button>
                            </div>
                        </div>
                    </div>  */}

                    
                    <Footer /> 
            </div>
        )
    }
}

export default myWishlist