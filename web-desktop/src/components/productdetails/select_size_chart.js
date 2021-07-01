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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '9999'
    },

    content: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 600,
        height: 455,
        padding: 0,
        border: 'solid 1px #e9c0a8',
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(to bottom, #ffffff, #ffffff), linear-gradient(127deg, #007aff, #2d5be3 102%)',
    }
};

export class SelectSizeModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
            SizeTabValue:'in'
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {
            isVisible: props.visible,
            
        }
    }

    changeSizeTab(data){
        this.setState({
            SizeTabValue:data
        })
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
                <div className='header-size'>
                    <div className="a-colr-42"> Ivory-Grey Handloom Ikat Cotton Top
                <img src={Close} className='size-chart-close' onClick={() => this.closeModal()} /></div>
                    <div className='a-mt-8 a-r-txt a-colr-75'> Size Options</div>
                </div>
                <div className='text-center size-tab'>
                    <div 
                    className={this.state.SizeTabValue==='in'?'size-tab-select cu-ptr a-b-txt a-16-txt':'size-tab-not-select cu-ptr a-m-txt a-16-txt'}
                    onClick={()=>this.changeSizeTab('in')}                    
                    >in</div>
                    <div className=''
                    className={this.state.SizeTabValue==='cm'?'size-tab-select cu-ptr a-b-txt a-16-txt':'size-tab-not-select cu-ptr a-m-txt a-16-txt'}
                    onClick={()=>this.changeSizeTab('cm')}
                    >cm</div>
                </div>
                <table className='size-table size-table-chart' cellSpacing={0}>
                    <tr>
                        <th>Size</th>
                        <th>Bust</th>
                        <th>Waist</th>
                        <th>Sleeve</th>
                        <th>Hip</th>
                    </tr>
                    <tr>
                        <td>XS</td>
                        <td>34.0</td>
                        <td>30.0</td>
                        <td>50.0</td>
                        <td>36.0</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td>36.0</td>
                        <td>32.0</td>
                        <td>50.0</td>
                        <td>38.0</td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td>38.0</td>
                        <td>34.0</td>
                        <td>50.0</td>
                        <td>40.0</td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td>40.0</td>
                        <td>36.0</td>
                        <td>50.0</td>
                        <td>42.0</td>
                    </tr>
                    <tr>
                        <td>XL</td>
                        <td>42.0</td>
                        <td>38.0</td>
                        <td>50.0</td>
                        <td>44.0</td>
                    </tr>
                    <tr>
                        <td>XXL</td>
                        <td>44.0</td>
                        <td>40.0</td>
                        <td>50.0</td>
                        <td>46.0</td>
                    </tr>
                </table>
                <div className='text-center font-12 a-r-txt a-mt-8 a-colr-61'>Showing garment measurements in  {" "}
                <span className=' a-sb-txt a-colr-42'>{this.state.SizeTabValue==='in'?'inches':'centimeter'}</span></div>
            </Modal>
        )
    }
}

export default SelectSizeModal
