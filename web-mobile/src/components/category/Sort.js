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



export class Sort extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            sortData: [
                "Price - High to Low",
                "Price - Low to High",
                "Popularity",
                "Newest Arrivals"
            ]
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isVisible: props.visible,
        }
    }


    closeModal = () => {
        this.props.sortToggle()
    }

    render() {
        return (
            <Modal
                isOpen={this.state.isVisible}
                style={customStyles}
                onRequestClose={() => this.closeModal()}
            >
                <div className='back-color-pink a-sheight-48 right-center'
                    style={{ paddingTop: 12 }}
                >
                    <div className='brandname sb-txt font-16'>Sort By</div>
                </div>
                <div className='right-center'>
                    {
                        this.state.sortData.map((item) => (
                            <div className='m-txt font-16' style={{ marginTop: 20 }}>{item}</div>
                        ))
                    }
                </div>
            </Modal>
        )
    }
}

export default Sort
