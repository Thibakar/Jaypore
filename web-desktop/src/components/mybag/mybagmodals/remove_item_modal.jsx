import React, { Component } from 'react'
import Modal from 'react-modal'
import Close from "../../../assets/01 Icons/05 My Bag/Close.svg"


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
        minHeight: '20%',
        maxHeight: '148%',
        width: 328,
        height: 332,
        border: 'solid 1px #e9c0a8',
        backgroundColor: '#ffffff',
        overflow: 'hidden'
    }
};

export class RemoveItemConfModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,

        }
    }
    static getDerivedStateFromProps(props, state) {
        return {
            isVisible: props.visible,

        }
    }


    closeModal = () => {
        console.log("this")
        this.props.toggleVisible();
    }


    render() {
        return (
            <Modal
                isOpen={this.state.isVisible}
                style={customStyles}
            >
                <div className="as_kjk">
                    <div className="as_close_icon_div" onClick={() => this.closeModal()}>

                        <img className="as_close_icon" src={Close} width='16' height='16' alt="listing-images"></img>
                    </div>
                    <div className="as_prod_img_div">
                        <img className="as_prod_img" src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/e/k/ekyapj40014494-2_2.jpg" alt="listing-images" ></img>
                    </div>
                    <div className="as_txt_modal">
                        <p className="">Are you sure want to remove this item from your bag?</p>
                    </div>
                    <div>
                        <button className="as_btn_1">Yes, remove this item</button>
                        <button className="as_btn_2">Move to my wishlist</button>
                    </div>

                </div>

            </Modal>
        )
    }
}

export default RemoveItemConfModal
