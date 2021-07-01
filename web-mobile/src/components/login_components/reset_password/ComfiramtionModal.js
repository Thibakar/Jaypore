import React, { Component } from 'react'
import Modal from 'react-modal'
import Confirmation from '../../../assets/Jaypore Assets/01 Icons/07 Order Confirmation/Order Confirmation.svg'

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex:99
    },

    content: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: '20%',
        maxHeight: '50%',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,255)',
        left:20,
        right:20
    }
};



export class ComfiramtionModal extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            subTitle: '',
            heading: '',
            title: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isVisible: props.visible
        }
    }

    Proceed=()=>{
        this.props.goToNextPage();
        this.props.closeModal();
    }

    render() {
        return (
            <Modal
                isOpen={this.state.isVisible}
                style={customStyles}
            >
                <div className='right-center'
                    style={{ paddingTop: 70,paddingBottom:20 }}
                >
                    <img alt="" src={Confirmation}/>
                </div>
                <div className='right-center r-txt'>

                    <div className='sub-heading-txt'>Your password has been successfully changed.</div>

                    <button className='mt-24 brandcolor white-color btn-radius btn-margin-64'  onClick={()=>this.Proceed()}>
                    Proceed to Log In
                    </button>
                </div>
            </Modal>
        )
    }
}

export default ComfiramtionModal
