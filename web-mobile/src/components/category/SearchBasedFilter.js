import React, { Component } from 'react'
import "../../assets/css/ayush.css";
import checkempty from '../../assets/Jaypore Assets/01 Icons/03 Listing/Checkbox Empty.svg'
import checkfill from '../../assets/Jaypore Assets/01 Icons/03 Listing/checkbox Selected.svg'
import search from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/Search.svg'


export class SearchBasedFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }


    static getDerivedStateFromProps(props, state) {
        return {
            data: props.data
        }
    }

    render() {
        return (
            <div >
                {/* <div className='row-end-div margin-s-10 ml-2 mr-2 '>
                    <input type="text" className="border-radius" placeholder="Search"
                        style={{ position: 'relative' }}
                    ></input>
                    <img src={search} alt className='pad-5 searchImagePosition' width='30px' height='30px' />
                </div> */}
                <div class="form-group has-feedback has-search pl-2 padding-right-8 mb-0 bt-bottom-pink " style={{paddingTop:'5px',paddingBottom:'5px'}}>
                    <span class="glyphicon glyphicon-search form-control-feedback-2"><img src={search} alt="" className='pad-5 searchImagePosition' width='30px' height='30px' /></span>
                    <input type="text" class="form-control border-radius searchInput" placeholder="Search" />
                </div>
                {
                    this.state.data.map((item, i) => (
                        <ListFilter data={item} key={i} />
                    ))
                }
            </div>
        )
    }
}

export default SearchBasedFilter



export class ListFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            select: false
        }
    }

    toggle = () => {
        this.setState(
            {
                select: !this.state.select
            }
        )
    }

    render() {
        return (
            <button className='row-div-start  white-back-color bt-bottom-pink padding-12'
                onClick={() => this.toggle()}
            >
                <img alt="" src={this.state.select ? checkfill : checkempty} />
                <div className='black-color ml-10'>{this.props.data.name}</div>
            </button>
        )
    }
}


