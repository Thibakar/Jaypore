import React, { Component } from 'react'
import Modal from 'react-modal'
import '../../assets/css/ayush.css'
import LoadingSpinner from './LoadingSpinner';

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
        maxHeight: '40%',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,255)',
        left:20,
        right:20

    }
};

export class BasicModal extends Component {

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
            isVisible: props.visible,
            heading: props.heading,
            title: props.title,
            subTitle: props.subTitle
        }
    }


    render() {
        return (
            <Modal
                isOpen={this.state.isVisible}
                style={customStyles}
            >
                <div className='right-center'
                    style={{ paddingTop: 80,paddingBottom:32 }}
                >
                    <LoadingSpinner />
                    {/* <img src={Load}
                      alt='load'
                      height='30px'
                      width='30px'
                      className='mt-20'
                      />
                      className='mt-30'
                      /> */}
                </div>
                <div className='right-center r-txt'>

                    <h5 className='sub-heading mt-20 colr-24'>{this.state.heading}</h5>
                    <h5 className='title mt-10 colr-21'>{this.state.title}</h5>
                    <h5 className='title-bold mt-10 colr-34'>{this.state.subTitle}</h5>
                </div>
            </Modal>
        )
    }
}

export default BasicModal
