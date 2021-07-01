import React, {Component} from 'react';
export default class InstagramItem extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div
          className="a-row a-sp-bwt"
          style={{ marginTop: "6px", height: "20%" }}
        >
          {this.props.instagramitemimage.map(i => (
            <img
              src={i}
              className="a-width-24-4 "
              height="100%"
              alt="home-images"
            />
          ))}
        </div>
      );
    }
  }
  
