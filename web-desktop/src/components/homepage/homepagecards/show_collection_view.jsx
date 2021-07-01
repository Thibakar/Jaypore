import React, {Component} from 'react';
import ShowCollectionCard from './show_collection_card'

export default class ShowCollectionView extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div className="a-row a-sp-bwt a-mt-14 margin-top-20" style={{ width: "100%" }} >
          <ShowCollectionCard showcollectioncardimages={this.props.showcollectioncardimages} />
          <ShowCollectionCard showcollectioncardimages={this.props.showcollectioncardimages} />
          <ShowCollectionCard showcollectioncardimages={this.props.showcollectioncardimages} />
        </div>
      );
    }
  }