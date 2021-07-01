import React, { Component } from 'react'
import "../../assets/css/myOrders.css";
import close from '../../assets/Jaypore Assets/01 Icons/03 Listing/close.svg'
import YellowImage from './images/yellow.png';
import Modal from 'react-modal'


const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },

    content: {
       
        marginBottom:'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:'auto',
        maxHeight:251,
        padding:18,
        backgroundColor: 'rgba(255,255,255,255)',
        width: '90%',
        maxWidth: 400,
        marginTop: 175,
        left: 18
    }
};

const successModalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },

    content: {
      
        marginBottom:'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:'auto',
        maxHeight:243,
        padding:10,
        backgroundColor: 'rgba(255,255,255,255)',
        width: '90%',
        maxWidth: 400,
        marginTop: 175,
        left: 18
        
    }
};

export class ItemCancellation extends Component {

    constructor(props) {
        super(props)
        this.state={

            gender:"",
            disableNext:true,
            nextButtonClass:"form-control footer-next-button-disabled",
            isVisible:false,
            successModalVisible:false
        }
    }

    goToback = () => {
        this.props.history.goBack();
    }
    goToNext = () => {
        //alert("clicked on next");
        this.setState({
            isVisible: true
        });
        // setTimeout(() => {
        //     this.setState({
        //         isVisible: false
        //     },()=>{})
        // }, 2000);
    }

    onSubmit= () => {
        this.setState({
            isVisible: false,
            successModalVisible: true
        });
        setTimeout(() => {
            this.setState({
                successModalVisible: false,
                isVisible: false
            },()=>{this.props.history.push('/myAccount/myOrders')})
        }, 1500);
    }

    handleChange = item => {
        //alert("welcome"+item);
        console.log("inside : handle change",item);
        this.setState({
            gender: item,
            disableNext:false,
            nextButtonClass:"form-control footer-next-button"
        })
        console.log(this.state);
      };
    render() {
        let reasons = ["Duplicate Order","Wrong size selected","Do not want the product","Discount not selected","Re-ordering using credits","Delivery Delayed","Customs / Duty charges not accepted","Better offer jaypore","Better offer competition","Other","I don't wish to specify"];
        let counter = 0;
        return (
            
            <div className='container-div back-color-pink h-100-vh'>
                <Modal isOpen={this.state.isVisible} style={customStyles} >
                  <div className='' >
                  </div>
                  <div className=' r-txt'>

                  <h5 className='sub-heading a-txt-22 m-b-15 m-t-15'>Choose a return type</h5>
                  <div className="flex-center">
                        <input className="radio-custom width-80" name="radio-group" type="radio" value="" defaultChecked={true} />
                        <label className="radio-custom-label"  >Refund Rs. 9288 as Jaypore Credits</label>
                    </div>        
                    <div className="flex-center">
                        <input className="radio-custom width-80" name="radio-group" type="radio" value="" defaultChecked={true} />
                        <label className="radio-custom-label"  >Refund Rs. 9288 to my bank account</label>
                    </div> 
                    <div className="modal-button-div">       
                    <input type="button" className="form-control footer-next-button margin-left-0" onClick={this.onSubmit} placeholder="Search" value="Submit" />
                    </div>
                  </div>
              </Modal>
              <Modal isOpen={this.state.successModalVisible} style={successModalStyles} >
                  <div className='right-center m-t-b-24-16' >
                    <span className="checkmark">
                        <div className="checkmark_circle"></div>
                        <div className="checkmark_stem"></div>
                        <div className="checkmark_kick"></div>
                    </span>
                  </div>
                  <div className='right-center r-txt'>

                  
                  <div className="right-center">
                        <p className="main-message font-15 ">Your Order has been cancelled successfully. Rs. 9288 has been refunded to your bank account</p>
                        <p className="warning-message font-15 semibold m-t-15">This Amount will be reflect in next 5 to 7 days</p>
                    </div>        
                  </div>
              </Modal>
                <div className='myorders-header row-div-start white-back-color p-13 '>
                    <img src={close} width='24px' height='24px' className='a-icon-padding' alt="back"
                        onClick={() => this.props.history.goBack()}
                    />
                    <h4 className='MyAccount-header'>Item Cancellation</h4>
                </div>
                <div className='allOrder margin-top-80 margin-bottom-40'>
                    <div className='orderDetailCard'>
                        <div className="media">
                            <img className="cancellation-image" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body cancelation-title-body">
                                <h5 className="mt-0 a-txt-19">Are you sure you want to cancel this item?</h5>
                            </div>
                        </div>
                        <div>
                            <div className="margin-bottom-10 font-1_5-em"><b>Please select a reason:</b></div>
                            <div>
                            {
                                reasons.map((item) =>{
                                    counter+=1
                                    return (
                                        <div className="flex-center" key={counter}>
                                                <input className="radio-custom width-80" name="radio-group" type="radio" value={item} checked={this.state.gender === item} onChange={() => this.handleChange(item)} />
                                                <label className="radio-custom-label a-txt-16" onClick={() => this.handleChange(item)} >{item}</label>
                                            </div>                
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='myorders-footer row-div-start white-back-color p-10 '>
                    
                <input type="button" className="form-control footer-cancel-button" onClick={()=>this.goToback()} placeholder="Search" value="Cancel"/>
                <input type="button" className={this.state.nextButtonClass} onClick={this.goToNext} placeholder="Search" value="Next" disabled={this.state.disableNext} />
                </div>
            </div>
        )
    }
}

export default ItemCancellation
