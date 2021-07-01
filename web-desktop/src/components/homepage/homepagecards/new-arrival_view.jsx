import React, {Component} from 'react';
import { Carousel } from "react-responsive-carousel";
import ItemCard from "../homepagecards/item_card";

export class NewArrivalView extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          className="a-width-full itemCard "
        >
          <div className="a-row a-back-white a-sp-bwt a-back-white">
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
          </div>
          <div className="a-row a-back-white a-sp-bwt a-back-white">
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
            <ItemCard
              h="19.5%"
              saveFlag={false}
              itemCardImage={this.props.itemCardImage}
            />
          </div>
        </Carousel>
      );
    }
  }
  