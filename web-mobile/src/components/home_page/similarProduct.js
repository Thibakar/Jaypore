import React, { Component } from 'react'
import Modal from 'react-modal'
import ImageCard from '../common/homePageCard'

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
        marginBottom: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'100%',
        top:'auto',
        bottom:0,
        left:0,
        right:0,
        padding: '24px 0px 16px 16px',
        backgroundColor: 'rgba(255,255,255,255)'
    }
};

export class SimilarProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
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
                onRequestClose={this.closeModal}
            >
                <div className='font-12 a-sky-blue-color f-right pr-16  m-txt'>VIEW ALL</div>
                <div className='font-18 colr-21 sb-txt pt-b'>A Festive Sprit</div>
                <div className='font-14 colr-21'>Pastel and jewel-toned kurta, pants, blouses to...</div>
                <div className="bg-white pt-16 image-container">
                    <div className='a-scroll-div'>
                        <div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div>
                        <div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div><div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div><div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div>
                    </div>
            </div>
            </Modal>
        )
    }
}

export default SimilarProduct
