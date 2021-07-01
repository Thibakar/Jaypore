import React, { Component } from 'react'
import Modal from 'react-modal'
import '../../assets/css/ayush.css'
import close from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Close.svg'
import Pin from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Pinterest.svg'
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99,
        padding: 0,
        margin: 0,
    },

    content: {
        height: '100%',
        width: '100%',
        padding: 0,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
};

export class InstaModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
            pinImgages: [
                'https://i.pinimg.com/originals/b4/30/c3/b430c3b63769abda65b7b8319271988c.jpg',
                'https://i.pinimg.com/736x/1b/f2/f2/1bf2f2d4962fe0528760860fed67e128.jpg',
                'https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.106.1180.1180a/s640x640/82573386_548173695774027_3054892006291548691_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=YjdrytoXjNkAX9Hy6jq&oh=3a0acb433e855618b560bc897ea043a9&oe=5ECE8FDE',
            ]
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isVisible: props.visible,
        }
    }

    closeModal=()=> {
        console.log("this",this.props)
        this.props.closeSimilar();
      }


    render() {
        return (
            <Modal
                isOpen={this.state.isVisible}
                style={customStyles}
                onRequestClose={this.closeModal}>
                <div>
                    <img src={close} className='close-insta' onClick={()=>this.closeModal()}/>
                    <div className='pin-head sticky' ref='insta-head'>
                        <span><img src={Pin} className='insta-img' /></span>
                        Follow us on Pintrest
                    </div>
                    <div className='bg-white'>
                        {
                            this.state.pinImgages.map((imgurl) => (
                                <img src={imgurl} key={imgurl} width='100%' className='mb-8' />
                            ))
                        }
                    </div>

                </div>

            </Modal>
        )
    }
}

export default InstaModal
