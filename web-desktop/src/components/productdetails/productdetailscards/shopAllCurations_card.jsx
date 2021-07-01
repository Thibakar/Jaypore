import React, { Component } from 'react';
import showcollection from "../../../assets/01 Icons/02 Home Page/Show Collection.svg";
import savecollection from "../../../assets/01 Icons/02 Home Page/Save Collection.svg";
import { Carousel } from 'react-responsive-carousel';
import { NavUtil } from '../../common/navutil';
import CollectionModal from '../../homepage/homepagecards/collection_modal'


class ShopAllCurationsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSet: [
                {
                    title: "A Festive Sprit",
                    content: "Pastel and jewel-toned kurtas,pants,blouses",
                    img: "https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/s/n/sntjwj000042825-1_2.jpg",
                },

                {
                    title: "A Crystal Confluence",
                    content: "Pastel and jewel-toned kurtas,pants,blouses",
                    img: "https://i.pinimg.com/originals/0a/f0/e1/0af0e13c26c047cd700a8bcb2cc4140c.jpg",

                },
                {
                    title: "A Radiant Celebration",
                    content: "Pastel and jewel-toned kurtas,pants,blouses",
                    img: "https://i.pinimg.com/474x/28/6b/0c/286b0ca3bb01906b6ce6ba18b7aeea0a.jpg",

                },

            ]
        }
    }
    render() {
        return (
            <div>
                <div id="collections" className="modal-window">
                <CollectionModal />
            </div>
            <Carousel
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
                infiniteLoop={false}
                className='a-width-full carousel-slider-Newarrival'
            >
                <div className='a-row a-back-white a-sp-bwt '>
                    {this.state.dataSet.map((i) => (
                        <CurationCard h='33.33333%' saveFlag={false} img={i.img} title={i.title} content={i.content} />
                    ))}
                </div>
                <div className='a-row a-back-white a-sp-bwt '>
                    {this.state.dataSet.map((i) => (
                        <CurationCard h='33.33333%' saveFlag={false} img={i.img} title={i.title} content={i.content} />
                    ))}
                </div>
            </Carousel>
            </div>
        );
    }


}

export default ShopAllCurationsCard;


let dataSet = [
    {
        title: "A Festive Sprit",
        content: "Pastel and jewel-toned kurtas,pants,blouses",
        img: "https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/s/n/sntjwj000042825-1_2.jpg",
    },

    {
        title: "A Crystal Confluence",
        content: "Pastel and jewel-toned kurtas,pants,blouses",
        img: "https://i.pinimg.com/originals/0a/f0/e1/0af0e13c26c047cd700a8bcb2cc4140c.jpg",

    },
    {
        title: "A Radiant Celebration",
        content: "Pastel and jewel-toned kurtas,pants,blouses",
        img: "https://i.pinimg.com/474x/28/6b/0c/286b0ca3bb01906b6ce6ba18b7aeea0a.jpg",

    },

]

function CurationCard(props) {
    return (

        <div className=" m-b-20 bg-white shop-all-curation-card a-rel  ">
            <img
                className="mostRecentImages"
                src={props.img}
                width="100%"
                height="100%"
                alt="home-images"
            />
            <a onClick={(event) => { event.stopPropagation() }} className="a-abs showIcon" 
            style={{ top: 12, right: 12 }} 
            href="#collections">
                <img src={showcollection} alt="home-images" /></a>
            
            <div className="a-abs a-banner-event-content cl-banner-content a-p-16">
                <h5 className="a-color-white a-24-txt a-mt-0 a-mb-0 cl-banner-title Pt-b"> {props.title}</h5>
                <div className="a-row a-sp-bwt">
                    <div className="a-color-white a-14-txt a-mt-8 a-mb-0 lineHeight-1 cl-ml-0 cl-banner-subtitle a-r-txt">
                        {props.content}</div>
                    <img src={savecollection} className="saveIconSize" alt="home-images" />
                </div>
            </div>

        </div>
    );
}


// function ShowAppCurationView(props) {
//     return (

//     );
// }