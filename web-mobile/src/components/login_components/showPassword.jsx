import React from "react";

class ShowPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      score: "",
      email:''
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

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type={this.state.type}
            value={this.state.email}
            className='btn-radius'
            onChange={this.passwordStrength}
            pattern=".{6,}"
            title="Six or more characters"
          />
          <span className={this.state.email===""?'d-none':"mt-0 border-radius cu-ptr"} onClick={this.showHide}>
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
