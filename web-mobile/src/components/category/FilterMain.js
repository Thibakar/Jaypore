import React, { Component } from 'react'
import "../../assets/css/ayush.css";
import ListBasedFilter from './ListBasedFilter'
import SearchBasedFilter from './SearchBasedFilter'
import close from '../../assets/Jaypore Assets/01 Icons/03 Listing/close.svg'
import Range from './Range'
export class FilterMain extends Component {

    constructor(props) {
        super(props)
        this.state = {
            FilterData: [
                {
                    id: '1',
                    name: 'Size',
                    type: 'list',
                    data: [
                        {
                            id: '1',
                            name: 'XS'
                        }, {
                            id: '2',
                            name: 'S'
                        }, {
                            id: '3',
                            name: 'M'
                        }, {
                            id: '4',
                            name: 'L'
                        }, {
                            id: '5',
                            name: 'XL'
                        }, {
                            id: '6',
                            name: 'XXL'
                        }, {
                            id: '7',
                            name: 'XXXL'
                        }
                    ]
                }, {
                    id: '2',
                    name: 'Categories',
                    type: 'search',
                    data: [
                        {
                            id: '1',
                            name: 'Category 1'
                        }, {
                            id: '2',
                            name: 'Category 2'
                        }, {
                            id: '3',
                            name: 'Category 3'
                        }, {
                            id: '4',
                            name: 'Category 4'
                        }, {
                            id: '5',
                            name: 'Category 5'
                        }, {
                            id: '6',
                            name: 'Category 6'
                        },
                    ]
                },
                {
                    id: '3',
                    name: 'Price',
                    type: 'range'
                }, {
                    id: '4',
                    name: 'Brands',
                    type: 'search',
                    data: [
                        {
                            id: '1',
                            name: 'Bailou'
                        }, {
                            id: '2',
                            name: 'Bibaar'
                        }, {
                            id: '3',
                            name: 'Blue Lotus'
                        }, {
                            id: '4',
                            name: 'Chitrika'
                        }, {
                            id: '5',
                            name: 'Dama'
                        }, {
                            id: '6',
                            name: 'Blue Lotus'
                        },
                    ]
                },
                {
                    id: '5',
                    name: 'Colors',
                    type: 'list',
                    data: [
                        {
                            id: '1',
                            name: 'Blue'
                        }, {
                            id: '2',
                            name: 'Pink'
                        }, {
                            id: '3',
                            name: 'Green'
                        }, {
                            id: '4',
                            name: 'Black'
                        }, {
                            id: '5',
                            name: 'Yellow'
                        }, {
                            id: '6',
                            name: 'Brown'
                        },
                    ]
                }, {
                    id: '6',
                    name: 'Discount',
                    type: 'list',
                    data: [
                        {
                            id: '1',
                            name: 'UPTO 10% OFF'
                        }, {
                            id: '2',
                            name: 'UPTO 20% OFF'
                        }, {
                            id: '3',
                            name: 'UPTO 25% OFF'
                        }, {
                            id: '4',
                            name: 'UPTO 30% OFF'
                        }, {
                            id: '5',
                            name: 'UPTO 35% OFF'
                        }, {
                            id: '6',
                            name: 'UPTO 40% OFF'
                        }, {
                            id: '7',
                            name: 'UPTO 50% OFF'
                        },
                    ]
                }, {
                    id: '7',
                    name: 'Shipping',
                    type: 'switchs'
                }
            ],
            selectedFilter: 'Size',
            selectedType: 'list',
            data: [
                {
                    id: '1',
                    name: 'XS'
                }, {
                    id: '2',
                    name: 'S'
                }, {
                    id: '3',
                    name: 'M'
                }, {
                    id: '4',
                    name: 'L'
                }, {
                    id: '5',
                    name: 'XL'
                }, {
                    id: '6',
                    name: 'XXL'
                }, {
                    id: '7',
                    name: 'XXXL'
                }
            ]
        }
    }

    onChangeHandle = (value, type, data) => {
        this.setState({
            selectedFilter: value,
            selectedType: type,
            data: data,
            showPriceModal: true
        })
    }

    _renderFilterItem = () => {
        let item = ''
        switch (this.state.selectedType) {
            case 'list': {
                item =
                    <div className="">
                        <ListBasedFilter name={this.state.selectedFilter}
                            data={this.state.data}
                        />
                    </div>
                break;
            }
            case 'search': {
                item = <SearchBasedFilter name={this.state.selectedFilter}
                    data={this.state.data}
                />

                break;
            }
            case 'range': {
                item =
                    <Range visible={this.state.showPriceModal}
                        priceToggle={() => this.priceToggle()} />
            }
                break;
            case 'switchs': {
                item = <Slider />


                break;
            }
        }
        return item;
    }


    priceToggle = () => {
        console.log("ookokoko")
        this.setState({
            showPriceModal: !this.state.showPriceModal
        })
    }



    render() {
        return (

            <div className='back-color-darkpink'>
                <div className='white-back-color row-div-start' style={{ width: '100%', height: 42 }} >
                    <img src={close} alt="" style={{ marginLeft: 16 }} onClick={() => this.props.history.goBack()} />
                    <div className='m-txt grey-color' style={{ marginLeft: 24, marginTop: 10, fontSize: 15 }}>REFINE RESULTS BY</div>
                </div>
                <div className='filter-row-div-40-60 border-top-pink'>
                    <div className='filter-col-div-40 white-back-color' >

                        {
                            this.state.FilterData.map((item, i) => (
                                <button className={this.state.selectedFilter === item.name ? 'filter-sel-button' : 'filter-button'}
                                    key={i} onClick={() => this.onChangeHandle(item.name, item.type, item.data)}>
                                    <div className='left-align'>
                                        <div className={this.state.selectedFilter === item.name ? 'white-color m-txt' : 'black-color m-txt'}>{item.name}</div>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
                    <div className='filter-col-div-60 white-back-color margin-s-5'>
                        {this._renderFilterItem()}
                    </div>
                </div>
                <div className='footer-f top-footer-margin m-txt'
                >
                    <div className="row-even-div p-8-px">

                        {/*     <button className='btn-radius pb-10-pt-10 sort-btn white-back-color brand-border-color'

                        >
                            <p className=' brandcolor-txt'
                                style={{ marginBottom: 0 }}
                            >Reset</p>
                        </button>
                         <button className='btn-radius pb-10-pt-10  filter-btn brandcolor brand-border-color' disabled
                        >
                            <p className=' brandcolor-txt white-color'
                                style={{ marginBottom: 0 }}
                            >Apply</p>

                        </button> */}

                        <button style={{ backgroundColor: 'white' }}className='btn-radius pb-10-pt-10 sort-btn white-back-color brand-border-grey-color'

                        >
                            <p
                                style={{ marginBottom: 0, color:'#babcbf', fontSize:16  }}
                            >Reset</p>
                        </button>

                        <button style={{ backgroundColor: '#babcbf' }} className='btn-radius pb-10-pt-10  filter-btn  brand-border-grey-color' disabled
                        >
                            <p className=' brandcolor-txt white-color'
                                style={{ marginBottom: 0, fontSize:16  }}
                            >Apply</p>

                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterMain




function Slider(props) {
    return (
        <div className='row-bwt-div bt-bottom-pink p-2 bg-white'>
            <h5 className='ml-10 mt-12 font-size-14'>Ready to Ship</h5>
            <label class="switch-n mt-10"
                style={{ marginRight: '10px' }}
            >
                <input type="checkbox" />
                <span class="slider round">
                </span>
            </label>
        </div>
    )
}