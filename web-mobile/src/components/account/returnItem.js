import React, { Component } from 'react'
import Modal from 'react-modal'
import "../../assets/css/myOrders.css";
import close from '../../assets/Jaypore Assets/01 Icons/03 Listing/close.svg'
// import SearchBlackLogo from '../switch_currency/switch_Currency_Icon/Search_black.svg';
import YellowImage from './images/yellow.png';
import Return from '../../assets/Jaypore Assets/01 Icons/11 My Order/Return request Modal.svg'




const returnCnfrmModalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex:999
      },
      content: {
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:332,
        borderRadius:4,
        backgroundColor: 'rgba(255,255,255,255)',
        width: 328,
        maxWidth: 400
    }


}
export class ReturnItem extends Component {

    constructor(props) {
        super(props)
        this.state={
            gender:"",
            disableNext:true,
            nextButtonClass:"form-control footer-next-button-disabled"
        }
        
    }

    goToback = () => {
        this.props.history.back();
    }
    goToNext = () => {

        
        this.setState({
           
            returnCnfrmModal:true
        
        });
        setTimeout(() => {
            this.setState({
                return_visible: false,
            returnCnfrmModal:false
            },()=>{this.props.goToReturnItem()})
        }, 2800);
    }

    handleChange = item => {
        //alert("welcome"+item);
        console.log("inside : handle change",item);
        this.setState({
            gender: item,
            disableNext:false,
            nextButtonClass:"form-control footer-next-button",
            returnCnfrmModal:false
        })
        console.log(this.state);
      };
    render() {
        let reasons = ["Damaged Product","Didn't Like The Product","Incorrect Size","Wrong Product Shipped","Other"];
        let counter = 0;
        return (
            
            <div className='container-div back-color-pink h-100-vh'>

                <div className='myorders-header row-div-start white-back-color p-13 '>
                    <img src={close} width='24px' height='24px' className='a-icon-padding' alt="back"
                        onClick={() => this.props.history.goBack()}
                    />
                    <h4 className='MyAccount-header'>Return Item</h4>
                </div>
                <div className='allOrder margin-top-80 margin-bottom-40'>
                    <div className='orderDetailCard'>
                        <div className="media">
                            <img className="cancellation-image" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body cancelation-title-body">
                                <h4 className="mt-0 a-txt-19">Are you sure you want to cancel this item?</h4>
                            </div>
                        </div>
                        <div className="returnCautions">
                            <ul className="custom-bullet-myorder">
                                <li>Don't cut off the tags</li>
                                <li>Keep the pacaking</li>
                                <li>Keep it in original condition</li>
                                </ul>
                        </div>
                        <div>
                            <div className="margin-bottom-10 font-14"><b>Please select a reason:</b></div>
                            <div>
                            {
                                reasons.map((item) =>{
                                    counter+=1
                                    return (
                                        <div className="flex-center" key={counter}>
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
                <div className='myorders-footer row-div-start white-back-color p-10 '>
                    
                <input type="button" className="form-control footer-cancel-button" onClick={this.goToback} placeholder="Search" value="Cancel"/>
                <input type="button" className={this.state.nextButtonClass} onClick={this.goToNext} placeholder="Search" value="Next" disabled={this.state.disableNext} />
                </div>
                <Modal  isOpen={this.state.returnCnfrmModal} style={returnCnfrmModalStyles}>
            {/* <div className="as_msg_return"> */}
          <div className="as_icon_bin">
              <img  className="as_img_trash img-fluid" src={Return} alt="modal"/>
          </div>
          <div className="as_prod_img_div">
         <img className="as_prod_img_1 rounded" src={'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/a/w/awrapj40014357-2_4.jpg'} alt="abx"/>
          </div>
          <div>
              <p className="as_are_you as_are_you_11">
                  Your  return  request  has been  initiated  someone from our team  will contact you shortly.
              </p>
              </div>
              <div className="as_rt_rq as_p_rt_rq">
                  <br/><b>
                Your  return request  ID  is : 12345
              </b>
                 
              </div>
              {/* </div> */}
                                    
            </Modal>

            </div>
        )
    }
}

export default ReturnItem
