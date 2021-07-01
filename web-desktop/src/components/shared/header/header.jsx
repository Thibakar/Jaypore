import React, { Component } from "react";
// import "./header.css";
import { Link } from "react-router-dom";
import NavigationDrawer from "../../shared/navigation/NavigationDrawer";
import saleicon from "../../../assets/01 Icons/01 Login Signup/Sale.svg";
import jaypore from "../../../assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg";
import bagicon from "../../../assets/01 Icons/01 Login Signup/Bag.svg";
import hamburger from "../../../assets/images/hamburger.svg";
import shamburger from "../../../assets/01 Icons/09 Navigation Drawer - Desktop/hamburger_selected.svg";
import Reedem from "../../../assets/01 Icons/01 Login Signup/Giftcard.svg";
// import Reedem from "../../../assets/icons/redeem.svg";
import Sidebar from "react-sidebar";
import DropdownArrow from "../../../assets/01 Icons/01 Login Signup/Dropdown Arrow.svg";
import Search from "../../../assets/01 Icons/01 Login Signup/Search_Back.svg";
import search from "../../../assets/01 Icons/01 Login Signup/Search.svg";
import MegaMenu from "../../megamenu/megaMenu";
import JayporeLabel from "../../megamenu/jayporeLabel";
import AddBag from "./addBag";
import { NavUtil } from "../../common/navutil";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Thiba",
      sidebarOpen: false,
      originalBodyOverflow: "",
      showCurrency: false,
      currency: "",
      currencyDrawer: false,
      shopByStatus: false,
      jayporeLabel: false,
      addBagCard: false,
      inBagValue:2
    };
  }

  onSetSidebarOpen() {
    if (this.state.sidebarOpen) {
      this.setState({
        sidebarOpen: false
      });
      document.body.style.overflow = this.state.originalBodyOverflow;
    } else {
      this.setState({
        shopByStatus: false,
        jayporeLabel: false,
        currencyDrawer: false,
        addBagCard: false,
        sidebarOpen: true,
        originalBodyOverflow: document.body.style.overflow
      });
      document.body.style.overflow = "hidden";
    }
  }

  onSidebarClose = open => {
    this.setState({ sidebarOpen: open });
    document.body.style.overflow = this.state.originalBodyOverflow;
  };

  open = () => {
    this.setState({
      jayporeLabel: false,
      currencyDrawer: false,
      sidebarOpen: false,
      addBagCard: false,
      shopByStatus: !this.state.shopByStatus
    });
  };

  jayporeLabelopen = () => {
    this.setState({
      shopByStatus: false,
      currencyDrawer: false,
      sidebarOpen: false,
      addBagCard: false,
      jayporeLabel: !this.state.jayporeLabel
    });
  };
  addBagToggle = () => {
    this.setState({
      shopByStatus: false,
      jayporeLabel: false,
      currencyDrawer: false,
      sidebarOpen: false,
      addBagCard: !this.state.addBagCard
    });
  };
  navigate = path => {
    document.body.style.overflow = this.state.originalBodyOverflow;
    this.props.props.history.push(path);
    window.scrollTo(0, 0)
  };

  currencyopen = () => {
    this.setState({
      shopByStatus: false,
      jayporeLabel: false,
      sidebarOpen: false,
      currency: !this.state.currency
    });
  };
  currencyCloser = () => {
    var modal = document.getElementById("as_currency_as");
    if (modal.style.display === "block") {
      modal.style.display = "none";
    }
    if (this.state.currency) {
      this.setState({ currency: false });
    }
  };
  componentWillMount() {
    document.addEventListener("mousedown", this.currencyCloser, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.currencyCloser, false);
  }

  setCurrency = value => {
    this.setState({
      selectedCurrency: value,
      currency: false
    });
  };

  render() {
    let view = this.state.sidebarOpen ? (
      <div className="containerNavigationDrawer">
        <Sidebar
          sidebar={<NavigationDrawer navigate={path => this.navigate(path)} />}
          open={this.state.sidebarOpen}
          pullRight={true}
          onSetOpen={this.onSidebarClose}
          styles={{
            sidebar: {
              background: "white",
              marginTop: 93,
              width: 300,
              zIndex: 3,
              float: "right"
            },
            overlay: { marginTop: 93 }
          }}
        ></Sidebar>
      </div>
    ) : (
        <div />
      );

    let shopBy = (
      <div className={this.state.shopByStatus ? "ShopByCategory " : "d-none"}>
        <MegaMenu />
      </div>
    );

    let jayporeLabel = (
      <div className={this.state.jayporeLabel ? "jayporeLabeldiv " : "d-none"}>
        <JayporeLabel />
      </div>
    );
    let addBagCard = (
      <div className={this.state.addBagCard ? "addBagdiv" : "d-none"}>
            <div className='add-bag-tip'/>
        <AddBag />
      </div>
    );

    let currencyView = (
      <div
        id="as_currency_as"
        // className="currencyDiv"
        className={this.state.currency ? "currencyDiv" : "d-none"}
      >
        <p className="a-mt-8 a-mr-8 a-ml-8">
          <b>POPULAR</b>
        </p>
        <div className="a-row a-sp-bwt curr  a-mt-4">
          <p className="a-mt-8 a-mb-8 font-16 a-colr-42">Indian Rupee</p>
          <p className="a-mt-8 a-mb-8">
            <b>INR</b>
          </p>
        </div>
        <div className="a-row a-sp-bwt curr a-mt-4">
          <p className="a-mt-8 a-mb-8 font-16 a-colr-42">
            United States Dollar
          </p>
          <p className="a-mt-8 a-mb-8">
            <b>USD</b>
          </p>
        </div>
      </div>
    );

    return (
      <React.Fragment>
        {view}
        {currencyView}
        <div className="header-parent">
          <div className="headerTop bg-white">
            <div className="headerTopInfo  ">
              <div className="container">
                <a
                  className="m-l-1"
                  onClick={this.currencyopen}
                  style={{ cursor: "pointer" }}
                >
                  Indian Rupee (INR)
                  {this.state.selectedCurrency}
                  <img
                    src={DropdownArrow}
                    style={{ marginLeft: 3 }}
                    className={
                      this.state.currency ? "line-clr a-rot-180" : "line-clr"
                    }
                    alt="down-images"
                  />
                  {currencyView}
                </a>

                <a className="m-l-1" href="">
                  Contact Us <span className="line-clr">|</span>
                </a>

                <a className="text-red m-l-1" href="">
                  Reedem Gift Card <span className="line-clr">|</span>
                </a>
                <a href="">
                  <img className="" src={Reedem} alt="redeem" />
                </a>
              </div>
            </div>
            <div class="topNavMain">
              <div class="innerTopNav">
                <div className="container">
                  <div class="logoDivColumn">
                    <Link to="" onClick={NavUtil.goToHome}>
                      <img src={jaypore} alt="icon" />
                    </Link>
                  </div>
                  <div class="menuCategoriesColumn">
                    <ul>
                      <li>
                        <a href="#" onClick={this.open}>
                          Shop by Category
                          <img
                            src={DropdownArrow}
                            className={
                              this.state.shopByStatus
                                ? "ml-6 a-rot-180"
                                : "ml-6"
                            }
                            alt="icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">What's New</a>
                      </li>
                      <li>
                        <a href="#" onClick={this.jayporeLabelopen}>
                          Jaypore label
                          <img
                            src={DropdownArrow}
                            className={
                              this.state.jayporeLabel
                                ? "ml-6 a-rot-180"
                                : "ml-6"
                            }
                            alt="icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">luxe</a>
                      </li>
                      <li>
                        <a href="#">
                          Sale{" "}
                          <img src={saleicon} className="mt--2 " alt="icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="menuProfileColumn">
                    <ul>
                      {/* 
                      Hiding this component from UI as per latest feedback from client
                      <li>
                        <a href="#">
                          <img
                            className="search-icon"
                            src={search}
                            alt="serachicon"
                          />
                          <input
                            className="bg-pink header-text"
                            type="text"
                            name="firstname"
                          />
                        </a>
                      </li> */}
                      <li>
                        <a className='a-rel'
                         className={this.state.inBagValue>0?'value-bag':''}  bag={this.state.inBagValue}
                        href="#" onClick={() => this.addBagToggle()}>
                          <img src={bagicon} alt="icon"
                          
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className=""
                            src={this.state.sidebarOpen?shamburger:hamburger}
                            width={this.state.sidebarOpen?30:20}
                            alt="saleicon"
                            onClick={() => this.onSetSidebarOpen()}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {shopBy}
            {jayporeLabel}
            {addBagCard}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
