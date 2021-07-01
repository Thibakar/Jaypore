import React, { Component } from 'react'
import Modal from 'react-modal'
import Close from "../../assets/01 Icons/05 My Bag/Close.svg"


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

export class UsPinCodeModel extends Component {

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
                    {/* <div className="as_close_icon_div" onClick={() => this.closeModal()}>

                        <img className="as_close_icon" src={Close} width='16' height='16' alt="listing-images"></img>
                    </div> */}
                   <div>
                       <h4><strong>B</strong></h4>

                       <div className="row regular uspincodeBg uspinSection" onClick={() => this.closeModal()}>
                           <div className="col-6">
                                <p>Bahamas</p>
                           </div>
                           <div className="col-6">
                                <p className="text-right">242</p>
                           </div>
                       </div>
                       <div className="row regular uspinPadding uspinSection" onClick={() => this.closeModal()}>
                           <div className="col-6">
                                <p>Bahrain</p>
                           </div>
                           <div className="col-6">
                                <p className="text-right">973</p>
                           </div>
                       </div>
                       <div className="row regular uspinPadding uspinSection" onClick={() => this.closeModal()}>
                           <div className="col-6">
                                <p>Bangladesh</p>
                           </div>
                           <div className="col-6">
                                <p className="text-right">880</p>
                           </div>
                       </div>
                   </div>

                </div>

            </Modal>
        )
    }
}

export default UsPinCodeModel
