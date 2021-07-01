import React, { Component } from 'react'
import "../../assets/css/ayush.css";
import checkempty from '../../assets/Jaypore Assets/01 Icons/03 Listing/Checkbox Empty.svg'
import checkfill from '../../assets/Jaypore Assets/01 Icons/03 Listing/checkbox Selected.svg'

export class ListBasedFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: '1',
                    name: 'XXL'
                }, {
                    id: '2',
                    name: 'XL'
                }, {
                    id: '3',
                    name: 'L'
                }, {
                    id: '4',
                    name: 'M'
                }, {
                    id: '5',
                    name: 'S'
                }, {
                    id: '6',
                    name: 'XS'
                },
            ],
            name: ''
        }
    }



    static getDerivedStateFromProps(props, state) {
        return {
            data: props.data,
            name: props.name
        }
    }




    render() {
        return (
            <div >
                {/* <div className='row-end-div margin-s-10 margin-m-10'>
                    <input type="text" placeholder="Search"
                        style={{ position: 'relative' }}
                    ></input>
                </div> */}
                {
                    this.state.data.map((item, i) => (
                        <ListFilter data={item} key={i}
                            name={this.state.name}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ListBasedFilter



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
            <button className='row-div-start white-back-color border-bootom-pink vh-5 padding-12'
                onClick={() => this.toggle()}
            >
                <img alt="" src={this.state.select ? checkfill : checkempty} />

                <div className={this.props.name === 'Colors' ? 'color-display' : 'd-none'}
                    style={{ backgroundColor: this.props.data.name }}
                >

                </div>

                <div className='black-color title ml-10 margin-top-2'>{this.props.data.name}</div>
            </button>
        )
    }
}


