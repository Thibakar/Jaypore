import React from "react";
import { BaseComponent } from "../common/BaseComponent";
import tooltip from "../../assets/01 Icons/01 Login Signup/Tooltip.svg";


class ShowPassword extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      score: "",
      email: '',
      tooltip: false,
      
      
    };
  }

  showHide = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  };

  passwordStrength = e => {
    this.props.onValueChange(e.target.value)
    this.setState({
      email: e.target.value
    });
  };

  ontipshow = () => {
    this.setState({
      tooltip: true
    })
  }
  ontiphide = () => {
    this.setState({
      tooltip: false
    })
  }


  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
 

  render() {
    
    return (
      <div>
        <div className="form-group">
        <div className='a-rel a-mb-8'>
          <div className={this.state.tooltip ? "arrowtxt right" : 'd-none'} ><img src={tooltip} className='mt-t'/><div className='d-in-blk mg-t' style={{ lineHeight: '10px',paddingLeft:'5px' }}> Minimum 8 characters & 1<br /><div className='tool-tip-img'>special character</div></div></div>
          <input
            type={this.state.type}
            className="mt-0  input-email border-radius"
            value={this.state.email}
            onChange={this.passwordStrength}
            pattern=".{6,}"
            title="Six or more characters"
            onFocus={() => this.ontipshow()}
            onBlur={() => this.ontiphide()}
           
          />
          
          </div>
          <span className={this.state.email === "" ? 'd-none' : "mt-0 border-radius cu-ptr"} onClick={this.showHide}>
            <p
              className={this.state.score === null ? "d-none" : "showPassword"}
            >
              {this.state.type === "password"
                ? "Show Password"
                : " Hide Password"}
            </p>
          </span>
          <span className="mt-0  border-radius" data-score={this.state.score} />
        </div>
      </div>
    );
  }
}

export default ShowPassword;
