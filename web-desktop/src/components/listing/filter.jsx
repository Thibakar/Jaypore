import React, { Component } from "react";
import "../../assets/css/filter.css";
import checkIcon from "../../assets/01 Icons/03 Listing/Checkbox Empty.svg";
import BrandModal from "../listing/listingheader/brand_modal";
import refineResults from "../../assets/icons/refine-results.svg";
import { BaseComponent } from "../common/BaseComponent";

export default class filter extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      sizeList: [
        { size: "L" },
        { size: "M" },
        { size: "S" },
        { size: "XS" },
        { size: "XL" },
        { size: "XXL" }
      ],
      categoryList: [
        { name: "Woven Sarees" },
        { name: "Printed Sarees" },
        { name: "Embroidered Sarees" },
        { name: "Sarees" },
        { name: "Special Sarees" }
      ],
      barndList: [
        { name: "Avantan" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" },
        { name: "Abraham and Thakore" }
      ],
      readyToShipList: [{ name: "Ready To Ship" }]
    };
  }

  render() {
    return (
      <div>
        <div className="handle">
          <img
            className="accord-icon"
            src={refineResults}
            alt="refine-resulsts"
          />
          <label htmlFor="handle5" className="category-filter-header">
            Refine Results
          </label>
        </div>
        <div className="content bg-white show category-filter-content">
          <div className="tabs">
            <div className="tab">
              <input className="tabs-checkbox" type="checkbox" id="chck1" />
              <label
                htmlFor="chck1"
                className=" tab-label category-filter-label"
              >
                Size{" "}
              </label>
              <div className="tab-content">
                {this.state.sizeList.map(i => (
                  <div className="checkbox-group category-filter-list-item">
                    <input type="checkbox" id="html1" />

                    <label htmlFor="html1" className="checkbox-label">
                      <span className="checkbox-label-text">{i.size}</span>
                    </label>
                  </div>
                ))}

                {/* <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html2" />
                  <label htmlFor="html2" className="checkbox-label" ><span className="checkbox-label-text">M</span></label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html3" />
                  <label htmlFor="html3" className="checkbox-label" ><span className="checkbox-label-text">S</span></label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html4" />
                  <label htmlFor="html4" className="checkbox-label" ><span className="checkbox-label-text">XS</span></label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html5" />
                  <label htmlFor="html5" className="checkbox-label" ><span className="checkbox-label-text">XL</span></label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html6" />
                  <label htmlFor="html6" className="checkbox-label" ><span className="checkbox-label-text">XXL</span></label>
                </div>
                <hr /> */}
              </div>
            </div>
            <div className="tab">
              <input className="tabs-checkbox" type="checkbox" id="chck2" />
              <label
                htmlFor="chck2"
                className="tab-label category-filter-label"
              >
                Color
              </label>
              <div className="tab-content">
                <div>
                  <div className="row filter-color-row padding-top-10 cl-color-row text-center">
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-white color-border"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-grey"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-blue"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-black"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-violet"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-green"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-red"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-whitesmoke"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-purple"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-black"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-yellow"
                        type="button"
                      ></button>
                    </div>
                    <div className="col-sm-15 filter-color-col">
                      <button
                        className="cl-color-btn bg-pink"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <div className="padding-left-15  more-div">
                    <a className="text-center more-text more-color">
                      +32 more colors
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab">
              <input className="tabs-checkbox" type="checkbox" id="chck3" />
              <label
                htmlFor="chck3"
                className=" tab-label category-filter-label"
              >
                Category{" "}
              </label>
              <div className="tab-content">
                {this.state.categoryList.map(i => (
                  <div className="checkbox-group category-filter-list-item">
                    <input type="checkbox" id="html7" />
                    <label htmlFor="html7" className="checkbox-label">
                      <span className="checkbox-label-text">{i.name}</span>
                    </label>
                  </div>
                ))}
                {/* <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html8" />
                  <label htmlFor="html8" className="checkbox-label">
                    <span className="checkbox-label-text">Printed Sarees</span>
                  </label>
                </div>

                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html9" />
                  <label htmlFor="html9" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Embroidered Sarees
                    </span>
                  </label>
                </div>

                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html10" />
                  <label htmlFor="html10" className="checkbox-label">
                    <span className="checkbox-label-text">Sarees</span>
                  </label>
                </div>

                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html11" />
                  <label htmlFor="html11" className="checkbox-label">
                    <span className="checkbox-label-text">Special Sarees</span>
                  </label>
                </div>

                <hr /> */}
              </div>
            </div>
            <div className="tab">
              <input className="tabs-checkbox" type="checkbox" id="chck4" />
              <label
                htmlFor="chck4"
                className=" tab-label category-filter-label"
              >
                Brands{" "}
              </label>
              <div className="tab-content">
                {this.state.barndList.map(i => (
                  <div className="checkbox-group category-filter-list-item">
                    <input type="checkbox" id="html12" />
                    <label htmlFor="html12" className="checkbox-label">
                      <span className="checkbox-label-text">{i.name} </span>
                    </label>
                  </div>
                ))}

                {/* <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html13" />
                  <label htmlFor="html13" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Abraham and Thakore
                    </span>
                  </label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html14" />
                  <label htmlFor="html14" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Abraham and Thakore
                    </span>
                  </label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html15" />
                  <label htmlFor="html15" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Abraham and Thakore
                    </span>
                  </label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html16" />
                  <label htmlFor="html16" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Abraham and Thakore
                    </span>
                  </label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html17" />
                  <label htmlFor="html17" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Abraham and Thakore
                    </span>
                  </label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html18" />
                  <label htmlFor="html18" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Abraham and Thakore
                    </span>
                  </label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html19" />
                  <label htmlFor="html19" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Abraham and Thakore
                    </span>
                  </label>
                </div>
                <hr />
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html20" />
                  <label htmlFor="html20" className="checkbox-label">
                    <span className="checkbox-label-text">
                      Abraham and Thakore
                    </span>
                  </label>
                </div>

                <hr /> */}
                <div className="padding-left-15 more-div">
                  <a className=" text-center more-color" href="#open-modal">
                    +100 more brands
                  </a>
                </div>
              </div>
              {/*********************************modal**********************************************/}
              <div id="open-modal" className="modal-window">
                <BrandModal />
              </div>
            </div>
          </div>
          <div className="tab">
            <input className="tabs-checkbox" type="checkbox" id="chck5" />
            <label htmlFor="chck5" className=" tab-label category-filter-label">
              Shipping{" "}
            </label>
            <div className="tab-content">
              {this.state.readyToShipList.map(i => (
                <div className="checkbox-group category-filter-list-item">
                  <input type="checkbox" id="html21" />
                  <label htmlFor="html21" className="checkbox-label">
                    <span className="checkbox-label-text">{i.name} </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
