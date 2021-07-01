import React, { Component } from 'react'
import selected from '../../assets/Jaypore Assets/01 Icons/04 PDP/size_selected.svg'
import available from '../../assets/Jaypore Assets/01 Icons/04 PDP/size_available.svg'
import notavailable from '../../assets/Jaypore Assets/01 Icons/04 PDP/size_notavailable.svg'

class PdpSelectSize extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: {
                size: [
                    {
                        sizeName: 'S',
                        availablity: false
                    }, {
                        sizeName: 'M',
                        availablity: true
                    }, {
                        sizeName: 'L',
                        availablity: true
                    }, {
                        sizeName: 'Xl',
                        availablity: true
                    },
                ]
            },
            selectedSizeValue: ''
        }
    }





    selectedSize = (size) => {
        let s = size.availablity ? size.sizeName : '';
        this.setState({
            selectedSizeValue: s
        },()=>this.props.changeSizeSelect(s))
    }

    getSizeBack = (size) => {
        let imageSource = '';
        if (size.availablity === false) {
            imageSource = notavailable
        } else {
            if (size.sizeName === this.state.selectedSizeValue) {
                imageSource = selected
            }
            else {
                imageSource = available
            }
        }
        return imageSource;
    }

    _size_row = () => {
        let data = [];
        this.state.data.size.map((item) => {
            data.push(
                <div className='sizeChart' onClick={() => this.selectedSize(item)}>
                    <img src={this.getSizeBack(item)}  alt="size" width='100%' height='100%' />
                    <div className={this.state.selectedSizeValue === item.sizeName ? 'selected-size-txt a-r-txt' : 'a-r-txt unselected-size-txt'}>
                        {item.sizeName}</div>
                </div>
            )
        })
        return data;
    }

    goToSize=()=>{
        this.props.history.push('/productDetail/size');
    }

    render() {
        return (
            <div className="">
                {/* <div className="col-12 pl-0">
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-16 mb-16 font-18 m-txt colr-42">Select Size</div>
                        </div>
                        <div className="col-6">
                            <div className="float-right text-blue mt-16 mb-16 sb-txt font-12">SIZE CHART</div>
                        </div>
                    </div>
                    <div className="sizes mb-24 ml--8">
                            <button class="btn-sizeChart pdp-sizeBthSize font-16" style={{paddingLeft:0,paddingRight:0}}>S</button>
                            <button class=" pdp-sizeBthSize btn-sizeChart font-16" style={{paddingLeft:0,paddingRight:0}}>M</button>
                            <button class="btn-sizeChart pdp-sizeBthSize font-16" style={{paddingLeft:0,paddingRight:0}}>L</button>
                            <button class="btn-sizeChart pdp-sizeBthSize font-16" style={{paddingLeft:0,paddingRight:0}}>XL</button>
                    </div>
                </div>
                <div>
                    <p className="font-size-14 mt-16 mb-24">Size not available? <span className="a-sky-blue-color sb-txt">View similar products</span></p>
                </div> */}
                <div className="col-12 pl-0">
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-16 mb-16 font-18 m-txt colr-42">Select Size</div>
                        </div>
                        
                        <div className="col-6" >
                            <div className="float-right text-blue mt-16 mb-16 sb-txt font-12" onClick={()=>this.goToSize()}>SIZE CHART</div>
                        </div>
                    </div>
                    {this._size_row()}
                </div>
                <div>
                    <p className="font-size-14 mt-16 mb-24">Size not available? <span className="a-sky-blue-color sb-txt">View similar products</span></p>
                </div>
            </div>
        )
    }
}

export default PdpSelectSize
