import React, { Component } from 'react'
import Delete from '../../assets/01 Icons/06 Shipping & Payment/Delete.svg'
import Modal from 'react-modal'
import Check from '../../assets/01 Icons/07 Order Confirmation/Order Confirmation.svg'
import { BaseComponent } from '../common/BaseComponent';


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
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:280,
        padding:10,
        backgroundColor: 'rgba(255,255,255,255)',
        width: 380,
        maxWidth: 400
    }
};

const successModalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },

    content: {
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:200,
        padding:10,
        backgroundColor: 'rgba(255,255,255,255)',
        width: '100%',
        maxWidth: 400
    }
    
};
const cancelModalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },

    content: {
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:518,
       
        // backgroundColor: 'rgba(255,255,255,255)',
        width: 328
       
    }
};

export class ItemCancellation extends BaseComponent {

    constructor(props) {
        super(props)
        this.state={
            gender:"",
            disableNext:true,
            nextButtonClass:"form-control footer-next-button-disabled",
            isVisible:false,
            successModalVisible:false,
            cancelModal:false
        }
    }

    goToback = () => {
        this.props.history.back();
    }
    goToNext = () => {
        console.log("open and close")
        //alert("clicked on next");
        this.props.goToItemCancellation();
        this.setState({
            cancelModal:false,
            isVisible: true
        });
     
    }

    static getDerivedStateFromProps(props, state){
        return{
            cancelModal:props.visible
        }
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
            },()=>{})
        }, 3000);
      
    }
    closeModal = () => {
        console.log("this")
        this.props.goToItemCancellation();
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
            
            <div className='container-div back-color-pink'>
                <Modal isOpen={this.state.isVisible} style={customStyles} >
                  <div className='' >
                  </div>
                  <div className=' r-txt'>

                  <h6 className='sub-heading'>Choose a return type</h6>
                  <div className="flex-center as_slct_paymnt regular">
                        <input className="radio-custom" name="radio-group" type="radio" value="" defaultChecked={true} />
                        <h4 className="radio-custom-label orderlabelwidth-100"  >Refund Rs. 9288 as Jaypore Credits</h4>
                    </div>        
                    <div className="flex-center as_slct_paymnt regular">
                        <input className="radio-custom" name="radio-group" type="radio" value="" defaultChecked={true} />
                        <h4 className="radio-custom-label orderlabelwidth-100"  >Refund Rs. 9288 to my bank account</h4>
                    </div> 
                    <div className="modal-button-div">       
                    <input type="button" className="as_btn_321" onClick={this.onSubmit} placeholder="Search" value="Submit" />
            
                    <button className="btn_as_prv"> Previous</button>
                    
                    </div>
                  </div>
              </Modal>
              <Modal isOpen={this.state.successModalVisible} style={successModalStyles} >
                  <div className='right-center as_chck_icon' >
                   <img className="as_chck_icon" src={Check} alt="check"/>
                  </div>
                  <div className='right-center r-txt'>

                  
                  <div className="right-center">
                        <p className="main-message">Your Order has been cancelled successfully. Rs. 9288 has been refunded to your bank account</p>
                                                <p className="warning-message">This Amount will be reflect in next 5 to 7 days</p>
               
                        </div>        
                  </div>
              </Modal>
              <Modal className="as_prnt_cncl_mdl" isOpen={this.state.cancelModal} style={cancelModalStyles}>
              <div className="cncl_itm_mdl myorder-modal-marginTop">          
                    <div className='as_icon_bin'>
                    <img src={Delete} width='24px' height='24px' className='as_img_trash img-fluid' alt="back"
                        onClick={() => this.props.history.goBack()}
                    />
                </div>
                <div className='allOrder margin-top-80 margin-bottom-40'>
                    <div className='orderDetailCard'>
                        <div className="as_prod_img_div">
                            <img className="as_prod_img_1 rounded" src={'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/e/k/ekyapj40014527-2_1.jpg'} alt="Genericplaceholderimage" />
                            </div>
                            <div>
                                <p className="as_are_you">Are you sure you want to cancel this item?</p>
                            </div>
                       
                        <div className="as_radio_pink">
                            <div className="as_p_as"><b>Please select a reason:</b></div>
                            <div>
                            {
                                reasons.map((item) =>{
                                    counter+=1
                                    return (
                                        <div className="flex-center as_radio_orng" key={counter}>
                                                <input className="radio-custom" name="radio-group" type="radio" value={item} checked={this.state.gender === item} onChange={() => this.handleChange(item)} />
                                                <label className="radio-custom-label" onClick={() => this.handleChange(item)} >{item}</label>
                                            </div>                
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer row as_ftr">
                <div className="col-sm-3"> 
                <input type="button" className="btn_as_1 btn  btn_bordr_none" onClick={() => this.closeModal()} placeholder="Search" value="Cancel"/>
               </div>
               <div className="col-sm-3" onClick={()=>this.goToNext()}>
                <input type="button" id="as_nxt" className={this.state.nextButtonClass?'btn btn_bordr_none':'btn btn_bordr_none as'}  placeholder="Search" value="Next" disabled={this.state.disableNext} />
                </div>
                </div>
            </div>
            </Modal>
            </div>
            

        )
    }
}

export default ItemCancellation
