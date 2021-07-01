import React, { Component } from 'react';
import blackOval from "../../../assets/01 Icons/02 Home Page/Oval.png";


export default class HappyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  truncate(input) {
    if (input.length > 79)
      return input.substring(0, 79) + '...';
    else
      return input;
  };

  render() {
    return (
      <div className="a-happy-card a-radius" style={{ width: '24%' }}>
        <div className="a-row">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLsHlKuwKfntKBscKs7hY27YlTDf2898JjTPciwlIiu-aqL_Q3'
            height={60}
            width={60}
            className="a-mt-8 a-happy-img"
            alt="home-images"
          />
          <div className="a-mt-16 a-ml-9 ">
            <h3 className="a-18-txt a-mb-0 a-mt-0 semiBold">
              Vasundhara Anand
              </h3>
            <h5 className="a-14-txt a-mb-0 a-mt-0 medium">
              Mumbai
                <img
                src={blackOval}
                style={{ margin: 3, marginLeft: 5, marginRight: 5 }}
                alt="home-images"
              />
                Age: 27 years
              </h5>
          </div>
        </div>
        <h3 className="a-16-txt a-mt-16 a-ml-8 a-mb-8 a-mt-0 semiBold">
          Corporate Lawyer
          </h3>
        <p className="a-ml-8 a-mr-8 a-14-txt a-mb-0 a-mt-0 regular a-colr-61 happyCustomer">
          {this.truncate('I have received the third kurta from Jaypore and am very happy with the quality, fit and look. So far')}
        </p>

      </div>
    );
  }
}

