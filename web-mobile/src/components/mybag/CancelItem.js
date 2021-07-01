import React, { Component } from 'react'
import Modal from 'react-modal'
import '../../assets/css/ayush.css'
import close from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Close.svg'

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    content: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        // minHeight: '54%',
        // maxHeight: '60%',
        height:'320px',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,255)',
    
    }
};



export class CancelItem extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            imgUrl: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isVisible: props.visible,
            imgUrl: props.imgurl
        }
    }

    Proceed = () => {
        this.props.toggleVisible()
    }

    render() {
        return (
            <Modal
                isOpen={this.state.isVisible}
                style={customStyles}
            >
                {/* <div className='right-center'
                    style={{ padding: 75,paddingBottom:30 }}
                >
                    <img src={Confirmation}/>
                </div> */}
                <div className='right-align'>
                <img src={close} alt="close" className='e-crossIcon' onClick={() => this.Proceed()} />
                </div>
                <div className='right-center mt-10'>
                    <img alt="" src={this.state.imgUrl} 
                        height='100px'
                    />
                </div>

                <div className='right-center r-txt'>

                    <div className=' sb-txt mt-16 font-14'>Are you sure you want to remove this item from your bag?</div>
                    <div className="m-l-10 m-r-10">
                    <button className='p-10 sb-txt mt-10 brand-border-color white-back-color brandcolor-txt btn-radius' onClick={() => this.Proceed()}>
                        Yes, remove this item
                    </button>
                    </div>
                    <div className="m-l-10 m-r-10">
                    <button className='p-10 sb-txt mt-8 brandcolor white-color btn-radius' onClick={() => this.Proceed()}>
                        Move to my wishlist
                    </button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default CancelItem
