
import React, { Component } from 'react'
import DeleteOnModal from '../../assets/shipping_payment_icon/Delete on Modal.svg'
import CloseIcon from "../../assets/shipping_payment_icon/Close.svg"
import Modal from 'react-modal'
import { BaseComponent } from '../common/BaseComponent';
// import "../../assets/css/shipping-payment.css";

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
        paddingLeft:20,
        paddingRight:20,
        left: '35%',
        right: '30%',
        height: 416,
        width: 328,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,255)',

    }
};


export default class DeleteModel extends BaseComponent {
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
                style={customStyles} >
                <div className="delete section a-r-txt" style={{ width: '100%' }}>

                    <div className="d-flex">
                        <img src={DeleteOnModal} alt="welcom.in" className="deletIconEdt4 cu-ptr" />
                        <img src={CloseIcon} alt="welcom.in" className="closedIcon89" onClick={() => this.closeModal()} />

                    </div>
                    <h5 className="areYousuretag"> Are you sure you want to delete this address?</h5>
                    <div className="card crdAlamLast">
                        <p><b className="shahwazfontsiz">Shahnawaz Alam</b></p>
                        <p>Flat-207, Hill View Apartment Mehta Chowk, Mehrauli, New Delhi, 121003 India</p>
                        <p><b>Home</b></p>
                    </div>
                    <div className="card crdAlamLast9">
                        <p className="keepThisadd">Keep this address</p>

                    </div>
                    <div>
                        <button class="blockYes a-m-txt">Yes, delete</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

