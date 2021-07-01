import React, { Component } from "react";
import closeIcon from "../../../assets/icons/close.svg"

class CollectionModal extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="collection-modal ">
          <div className="container collection-modal-body cl-position-relative">
            <div className="collection-modal-header">
              <div className="a-abs collection-banner-content a-p-16 a-txt-left collection-banner jp-pl-0">
                <h5 className="a-color-white a-24-txt a-mt-0 a-mb-0 curation_productTitle jp-c-b1">A Festive Spirit</h5>
                <div className="a-row a-sp-bwt a-mt-8">
                  <h5 className="a-color-white a-14-txt a-mt-0 a-mb-0 curation_productdisc jp-c-b1">Pastel and jewel-toned kurtas, pants, blouses to start the revelries</h5>
                </div>
              </div>
            </div>
            <ul className="collection-modal-list">
              <div className="row jp-mr-0 jp-ml-0">
                <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div>
                {/* <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div>
                <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div>
                <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div>
                <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div>
                <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div>
                <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div>
                <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div>
                <div className="col-3">
                  <ItemCard width='100%' saveFlag={false} />
                </div> */}
              </div>
            </ul>
          </div>
        </div>
        <a href="#modal-close" onClick={(event) => { event.stopPropagation() }} title="Close" className="modal-close collection-modal-close">
          <img src={closeIcon} alt="brandcheck" />
        </a>
      </React.Fragment>
    );
  }
}



export  class ItemCard extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dataSet:[
        
      ]

    }
  }
  render() {
    return (
      <div>
         <div className='a-txt-left s-ml-0 s-mr-0 hm-mb-40 ' style={{ width: this.props.width, }}>

<div className='a-rel jp-mt-20'>
  <img src='https://static.jaypore.com/tr:w-252,h-334/media/catalog/product/r/c/rctapj20005182-1_1.jpg'
    alt="newcard-images" />
</div>
<div className='a-txt-left'>
  <div className=" a-mt-8 a-14-txt a-mb-0 semiBold font-color-212121 cl-ml-0">SILKWAVE</div>
  <div className="a-14-txt a-mt-0 a-mb-0 font-color-616161 wordSpacing lineHeight-1 a-r-txt hm-subtitle collection-card-subtitle">Black-White Block-printed Cotton Top</div>

  <div className=" a-14-txt a-mt-0 a-mb-0 font-color-212121 semiBold">Rs. 2290</div>

  {/* <div className="a-mt-8 font-14 a-r-txt a-colr-61">S,M,L,XL</div> */}
</div>
</div>
        
      </div>
    );
  }
}




export default CollectionModal;
