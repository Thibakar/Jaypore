import React from 'react';
import Footer from '../../common/footer/footer';
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



class recentlyViewedItems extends React.Component{
     /*
      constructor(props) {
        super(props);
        this.state = {
            color: true,
            recentitemsdata:
            {
                availablecredits: "Available Credits",
                totalcreditsrecieved: "Rs. 15000",
                creditSummaryText: "You can apply your credits at the time of checkout.",
                creditSummary: [
                    {

                        recievedOn: "Apr 13 2018",
                        expiresOn: "Apr 13 2019",
                        details: "Refund Points",
                        amount: "Rs. 5000"
                    },
                    {

                        recievedOn: "May 28 2017",
                        expiresOn: "May 28 2018",
                        details: "Refund Points",
                        amount: "Rs. 617"
                    },
                    {

                        recievedOn: "May 28 2017",
                        expiresOn: "May 28 2018",
                        details: "Gift Voucher",
                        amount: "Rs. 617"
                    },
                    {

                        recievedOn: "May 28 2017",
                        expiresOn: "May 28 2018",
                        details: "Refund Points",
                        amount: "Rs. 617"
                    },
                    {

                        recievedOn: "May 28 2017",
                        expiresOn: "May 28 2018",
                        details: "Gift Voucher",
                        amount: "Rs. 617"
                    }
                ],
                Creditusedtext: "Here is your used credi details.",
                credituseddata: ["Amount", "Used On", "Order No."],
                creditused: [
                    {
                        amount: "Rs. 617",
                        usedon: "Dec 20 2017",
                        orderno: "200318396"
                    },
                    {
                        amount: "Rs. 500",
                        usedon: "Jun 15 2016",
                        orderno: "200122943"
                    },
                    {
                        amount: "Rs. 500",
                        usedon: "Jun 15 2016",
                        orderno: "200122943"
                    },
                    {
                        amount: "Rs. 500",
                        usedon: "Jun 15 2016",
                        orderno: "200122943"
                    },
                    {
                        amount: "Rs. 500",
                        usedon: "Jun 15 2016",
                        orderno: "200122943"
                    }
                ]
            }

        }
    */

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
        
           
render() {
    return(
        <div className="screen-box">
         
            <div class="mobile-fixed-header">
                <div class="mobile-container">
                    <a><img src={img16} height="15" onClick={()=>this.props.history.push("/myAccount")}></img></a>
                    <label className="mobile-label-name">Recently Viewed Items</label>
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
                            {/* <a className="closea" href="#popup1"><img class="card-grid-cancel" src={img8}></img></a> */}
                        
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
                    
                
                <Footer /> 
        </div>
    )
}
}

export default recentlyViewedItems