import React, { Component } from 'react'
import DownArrow from '../../assets/Jaypore Assets/01 Icons/01 Login Signup/Dropdown Arrow.svg'
import close from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Close.svg'
import CancelItem from './CancelItem'
import checkempty from '../../assets/Jaypore Assets/01 Icons/03 Listing/Checkbox Empty.svg'
import checkfill from '../../assets/Jaypore Assets/01 Icons/03 Listing/checkbox Selected.svg'

class BagCard extends Component {


    constructor(props){
        super(props)
        this.state={
            visible:false,
            select: false
        }
    }

    deletedBagItem = () => {
        
    }

    toggleVisible=()=>{
        this.setState({
            visible:!this.state.visible
        })
    }

    toggle = () => {
        this.setState(
            {
                select: !this.state.select
            }
        )
    }

    render() {
        return (
            <div className=''>
                <CancelItem
                toggleVisible={()=>this.toggleVisible()}
                visible={this.state.visible}
                imgurl='https://static.jaypore.com/media/events/307X363/191112SSN030_SSN_Sailesh_Singhania_Moodshot.jpg'
                />
                <div className="e-card mb-16">
                    <div className="e-cardFields">
                        <img className="e-imageStyle" alt="" src={'https://static.jaypore.com/media/events/307X363/191112SSN030_SSN_Sailesh_Singhania_Moodshot.jpg'} />
                        <div className="e-itemDetail">
                            <div className="elipsis">Ivory-Green Handloom Ikat</div>
                            <div className="e-SpaceFromTop sb-txt font-12 grey-color">
                                JAYPORE
                            </div>
                            <div className="e-spaceFromTop sb-txt">
                                <span><span className="grey-color">Qty</span>: 1</span>  <img src={DownArrow} alt="" className="ml-2" />
                                <span><span className="grey-color ml-5">Size</span>: M</span> <img src={DownArrow} alt="" className="ml-2" />
                            </div>
                            <div className="e-spaceFromTop">
                                <span className='sb-txt font-16 black-color-42'>Rs. 2990</span>
                            </div>
                        </div>
                        <div style={{ width: 27, height: 27, backgroundColor: '#f5e3d8', position: 'absolute', right: 0, top: 0 }}>
                            <img alt="" src={close} style={{ margin: 5 }} height="17px" onClick={()=>this.toggleVisible()} />
                        </div>
                    </div>
                    <div className="e-container">
                        <div className="e-section" >
                            <div className="e-textSection">
                                <div className='m-txt font-13'>Dispatched by: <span className='sb-txt'>17th Nov 2018</span></div>
                                <div className='m-txt font-13 ' style={{ color: '#f3a320' }}>Return accepted within 10 days of delivery</div>
                            </div>
                        </div>
                    </div>
                    <div className="e-container d-flex">
                        <div>
                        <img alt="" src={this.state.select ? checkfill : checkempty}  onClick={() => this.toggle()} />
                        </div>
                        <div className="ml-4 mt-1">
                            <div className='m-txt'>Gift wrap this item</div>
                            <div className='font-12 grey-color pb-3'>Rs. 50 will be charged.</div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default BagCard
