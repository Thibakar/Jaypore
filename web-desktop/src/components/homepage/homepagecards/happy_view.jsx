import React, { Component } from 'react';
import HappyItem from '../../homepage/homepagecards/happy_Item';

export default class HappyView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>




        <div className="a-row a-sp-bwt a-mt-16">
          <HappyItem />
          <HappyItem />
          <HappyItem />
          <HappyItem />
        </div>
      </React.Fragment>
    );
  }
}

