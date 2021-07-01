import React, { Component } from 'react'
import Modal from 'react-modal'
import '../../assets/css/ayush.css'

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    content: {
        marginTop: 'auto',
        marginBottom: 'auto',
        height: 230,
        padding: 0,
        backgroundColor: 'rgba(255,255,255,255)',
    }
};



export class Range extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
            sortData: [
                "Price - High to Low",
                "Price - Low to High",
                "Popularity",
                "Newest Arrivals"
            ],
            price:'',
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isVisible: props.visible,
        }
    }


    closeModal = () => {
        this.props.priceToggle()
    }
    onchangePrice=(e)=>{
        this.setState({
            price:e.target.value
        })
    }
    onInput() {
        var input = document.getElementById("typeinp");
        var currentVal = input.value;
        this.setState({
            price: currentVal
        })
    }

    render() {
        return (
            <Modal
                isOpen={this.state.isVisible}
                style={customStyles}
                onRequestClose={() => this.closeModal()}
            >
                <div className='back-color-pink a-height-48 right-center'
                    style={{ paddingTop: 12 }}
                >
                    <h5 className='brandcolor-txt font-16 sb-txt '>Price-Range</h5>
                </div>
                <div className='right-center' style={{ paddingRight: 16, paddingLeft: 16 }}>
                    <div className='slidecontainer'>
                        {/* <input type="range" min="1" max="100" value="20" class="slider" id="myRange"
                        onmousemove="rangevalue1.value=value"
                        /> */}
                        {/* <input type="range" id="vol" name="vol" min="0" max="500"
                        onInput={(e)=>this.onchangePrice(e)}
                        ></input> */}
                        <input id="typeinp" type="range" min="0" max="5" step="1" defaultValue="3" onInput={this.onInput.bind(this)}/>
                        <div className="font-12 m-txt">Rs. {this.state.value}</div>
                    </div>
                    <button className='btn-radius brandcolor' style={{ width: '100%', padding: 8, marginTop:30 }}>
                        <h5 className='white-color font-16' style={{ marginBottom: 0 }}>Apply</h5>
                    </button>
                </div>
            </Modal>
        )
    }
}

export default Range
