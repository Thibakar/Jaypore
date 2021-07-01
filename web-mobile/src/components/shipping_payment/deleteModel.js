import React, { Component } from 'react'
import CrossLogo from './shipping_payment_icon/close.svg';
import DeleteModelLogo from './shipping_payment_icon/Delete on Modal.svg';
import Modal from 'react-modal'
import '../../assets/css/shipping_payment_new.css'

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
        left: 16,
        right: 16,
        height: '82%',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,255)',
    }
};


export default class DeleteModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
        }
    }


    render() {
        return (
            <Modal
                isOpen={this.state.isVisible}
                style={customStyles}
            >
                <div>
                    <div className='delete-cross-div'>
                        <img src={CrossLogo} alt="" onClick={() => this.props.history.goBack()}/>
                    </div>

                    <div className='delete-Delete-div'>
                        <img src={DeleteModelLogo} alt="" />
                    </div>

                    <p className='delete-confirmation-msg'>Are you sure want to detele this address?</p>

                    <div className='address-box-div'>
                        <p className='delete-user'>Shahnawaz Alam</p>
                        <p className='delete-user-Address'>#234, 1st Floor, HSR 2 Sector  bangalore -560034 </p>
                        <p className='delete-user-home'>Home</p>
                    </div>

                    <div className='keep-address-btn'>
                        <p className='keep-address-txt'>Keep this address</p>

                    </div>

                    <div className='keep-address-btn' style={{ background: '#bb4225', marginTop: 8 }}>
                        <p className='delete-address-txt'>Yes, detele</p>
                    </div >


                </div>
            </Modal>
        )
    }
}