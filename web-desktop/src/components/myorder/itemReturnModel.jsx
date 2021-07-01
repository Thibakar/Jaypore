import React, { Component } from 'react'
import Modal from 'react-modal'
// import "../../assets/css/myOrders.css";
import Return from '../../assets/01 Icons/11 My Order/Return request Modal.svg'
// import SearchBlackLogo from '../switch_currency/switch_Currency_Icon/Search_black.svg';



const returnModalStyles = {
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
        height: 518,
        border: 1,
        backgroundColor: 'rgba(255,255,255,255)',
        width: 328,
        borderRadius:4

    }
}

const returnCnfrmModalStyles = {
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
        height:267,
        borderRadius:4,
        backgroundColor: 'rgba(255,255,255,255)',
        width: 328,
        maxWidth: 400
    }
}

export class ReturnItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gender: "",
            disableNext: true,
            nextButtonClass: "form-control footer-next-button-disabled",
            return_visible: false,
            returnCnfrmModal:false
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            return_visible: props.return_visible
        }
    }


    goToback = () => {
        this.props.history.back();
    }

    goToNext = () => {

        this.props.goToReturnItem();
        this.setState({
           
            returnCnfrmModal:true
        
        });
        setTimeout(() => {
            this.setState({
                return_visible: false,
            returnCnfrmModal:false
            },()=>{})
        }, 2800);
    }
    // goToNext = () => {
    //     this.props.goToReturnItem();
    //     this.setState({
    //         return_visible:true
    //     });
    // }

    handleChange = item => {
        //alert("welcome"+item);
        console.log("inside : handle change", item);
        this.setState({
            gender: item,
            disableNext: false,
            nextButtonClass: "form-control footer-next-button",

        })
        console.log(this.state);
    };
    render() {
        let reasons = ["Damaged Product", "Didn't Like The Product", "Incorrect Size", "Wrong Product Shipped", "Other"];
        let counter = 0;
        return (


            <div className='container-div back-color-pink'>
            <Modal className="as_prnt_return_mdl" isOpen={this.state.return_visible} style={returnModalStyles}>

                <div className="as_return_mdl">
                    <div className='as_icon_bin'>
                        <img src={Return} width='24px' height='24px' className='as_img_trash img-fluid' alt="back"
                            onClick={() => this.props.history.goBack()}
                        />
                    </div>
                    <div className='allOrder margin-top-80 margin-bottom-40'>
                        <div className='orderDetailCard'>
                            <div className="as_prod_img_div">
                                <img className="as_prod_img_1 rounded" src={'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/a/w/awrapj40014357-2_4.jpg'} alt="Genericplaceholderimage" />
                            </div>
                            <div>
                                <p className="as_are_you">Are you sure you want to cancel this item?</p>
                            </div>
                        </div>
                        <div className="returnCautions">
                            <ul className="as_gg_ul">
                                <li>Don't cut off the tags</li>
                                <li>Keep the packing</li>
                                <li>Keep it in original condition</li>
                            </ul>
                        </div>
                        <div className="as_radio_pink as_radio_pink_hight">
                            <div className="as_p_as"><b>Please select a reason:</b></div>
                            <div>
                                {
                                    reasons.map((item) => {
                                        counter += 1
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
                <div className="footer row as_ftr as_ftr_mrgn">
                    <div className="col-sm-3">
                        <input type="button" className="btn_as_1 btn  btn_bordr_none" onClick={this.goToback} placeholder="Search" value="Cancel" />
                    </div>
                    <div className="col-sm-3" >
                        <input id="as_nxt" type="button" className={this.state.nextButtonClass ? 'btn btn_bordr_none' : 'btn btn_bordr_none as'} onClick={this.goToNext} placeholder="Search" value="SUBMIT" disabled={this.state.disableNext} />
                    </div>
                </div>


                {/* </div> */}
            </Modal> 
            <Modal className="as_msg_return" isOpen={this.state.returnCnfrmModal} style={returnCnfrmModalStyles}>
            <div className="as_msg_return">
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
              </div>
                                    
            </Modal>
             </div >
        )
    }
}

export default ReturnItem
