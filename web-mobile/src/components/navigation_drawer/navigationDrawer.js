import React, { Component } from "react";
import UserIcon from "./navigation_drawer_icon/Profile.svg";
import ForwardArrow from "./navigation_drawer_icon/Dropdown Arrow.svg";
import ReferEarn from "../../assets/Jaypore Assets/01 Icons/10 Navigation Drawer - Mobile/RefernEarn.svg";
import SendGiftCardLogo from "./navigation_drawer_icon/Send Gift cards.svg";
import RedeemGiftCardLogo from "./navigation_drawer_icon/Redeem Gift card.svg";
import MyAccountLogo from "./navigation_drawer_icon/My Account.svg";
import RupeeLogo from "./navigation_drawer_icon/Indian Rupee.svg";
import FranchiseeLogo from "./navigation_drawer_icon/Become a Franchisee.svg";
import "./navigation_drawer.css";
import { Link } from "react-router-dom";
import JayporeLogo from "../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg";

export default class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickChangeBodyStyle = () => {
    console.log("called");
    document.body.style.overflow = this.props.originalBodyOverflow;
    document.body.style.position = "static";
  };

  render() {
    return (
      <div className="navigation-content">
        <div className="navigation-Drawer-header ml-16 mt-24 mb-24">
          <img
            src={JayporeLogo}
            className="jayporeLogoImage"
            alt="jayporeLogo"
          />
        </div>
        <Link
          to={"/login"}
          activeClassName="active"
          onClick={() => this.onClickChangeBodyStyle()}
        >
          <div className="Rectangle-9">
            <div style={{ display: "flex" }}>
              <img
                src={UserIcon}
                alt=""
                className="login-user-icon mt-16"
              ></img>
              <h5 className="login-user-guestUser  pt-2 mb-0 black-color">
                Guest User
              </h5>
            </div>
            <p className="login-user-notLogged black-color">
              You are not logged in
            </p>
            <p className="login-user-loginSignup">LOGIN / SIGNUP</p>
          </div>
        </Link>
        <Link
          to={{
            pathname: "/CategoryNavigation",
            category: "clothing",
            state: {
              category: "Clothing"
            }
          }}
          params={{ value: "all" }}
          activeClassName="active"
        >
          <div
            className="navLinkHeadings"
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <h6 className="clothing ml-16 mt-16">Clothing</h6>
            <img
              src={ForwardArrow}
              alt=""
              className="forward-Logo-Style "
            ></img>
          </div>
        </Link>
        <Link
          to={{
            pathname: "/CategoryNavigation",
            category: "Jewelry",
            state: {
              category: "Jewelry"
            }
          }}
          params={{ value: "all" }}
          activeClassName="active"
        >
          <div
            className="navLinkHeadings"
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <h6 className="clothing ml-16 mt-16">Jewelry</h6>
            <img src={ForwardArrow} alt="" className="forward-Logo-Style"></img>
          </div>
        </Link>

        <Link
          to={{
            pathname: "/CategoryNavigation",
            category: "Accessories",
            state: {
              category: "Accessories"
            }
          }}
          params={{ value: "all" }}
          activeClassName="active"
        >
          <div
            className="navLinkHeadings"
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <h6 className="clothing ml-16 mt-16">Accessories</h6>
            <img src={ForwardArrow} alt="" className="forward-Logo-Style"></img>
          </div>
        </Link>

        <Link
          to={{
            pathname: "/CategoryNavigation",
            category: "Home Decor",
            state: {
              category: "Home Decor"
            }
          }}
          params={{ value: "all" }}
          activeClassName="active"
        >
          <div
            className="navLinkHeadings"
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <h6 className="clothing ml-16 mt-16">Home & Decor</h6>
            <img src={ForwardArrow} alt="" className="forward-Logo-Style"></img>
          </div>
        </Link>

        <Link
          to={{ pathname: "/CategoryNavigation", state: "event" }}
          params={{ value: "Event" }}
          activeClassName="active"
        >
          <div
            className="navLinkHeadings"
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <h6 className="clothing ml-16 mt-16">Sale</h6>
            <img src={ForwardArrow} alt="" className="forward-Logo-Style"></img>
          </div>
        </Link>

        <Link
          to={{ pathname: "/CategoryNavigation", state: "Cover" }}
          params={{ value: "Cover" }}
          activeClassName="active"
        >
          <div
            className="navLinkHeadings"
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <h6 className="clothing mt-16 ml-16">Trending</h6>
            <img src={ForwardArrow} alt="" className="forward-Logo-Style"></img>
          </div>
        </Link>

        <Link
          to={{ pathname: "/CategoryNavigation", state: "Brand" }}
          activeClassName="active"
        >
          <div
            className="navLinkHeadings"
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <h6 className="clothing ml-16 mt-16">Brands</h6>
            <img src={ForwardArrow} alt="" className="forward-Logo-Style"></img>
          </div>
        </Link>

        <hr className="custom-jayporeHrTag mt-0 mb-0" />

        <div
          className="navLinkHeadings"
          style={{ display: "flex", color: "#BB4225" }}
          onClick={() => this.onClickChangeBodyStyle()}
        >
          <img
            src={ReferEarn}
            alt=""
            className="login-user-ReferEarnIcon ml-16 mt-12"
          ></img>
           <Link to={{pathname:'/referearn',state:'brand'}} activeClassName="active">
          <h6 className="referEarn mt-16">Refer and Earn</h6></Link>
        </div>

        <div
          className="navLinkHeadings"
          style={{ display: "flex", color: "#BB4225" }}
          onClick={() => this.onClickChangeBodyStyle()}
        >
          <img
            src={SendGiftCardLogo}
            alt=""
            className="login-user-ReferEarnIcon ml-16 mt-12"
          ></img>
          <h6 className="referEarn mt-16">Send Gift Cards</h6>
        </div>

        <div
          className="navLinkHeadings"
          style={{ display: "flex", color: "#BB4225" }}
          onClick={() => this.onClickChangeBodyStyle()}
        >
          <img
            src={RedeemGiftCardLogo}
            alt=""
            className="login-user-ReferEarnIcon mt-12 ml-16"
          ></img>
          <h6 className="referEarn mt-16">Redeem Gift Card</h6>
        </div>
        <hr className="custom-jayporeHrTag mt-0 mb-0" />

        <Link
          to={{ pathname: "/myAccount", state: "brand" }}
          activeClassName="active"
        >
          <div
            className="navLinkHeadings"
            style={{ display: "flex", color: "#BB4225" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <img
              src={MyAccountLogo}
              alt=""
              className="login-user-ReferEarnIcon ml-16 mt-12"
            ></img>
            <h6 className="referEarn mt-16">My Account</h6>
          </div>
          <hr className="custom-jayporeHrTag mt-0 mb-0" />
        </Link>

        <Link to={"/currency"} activeClassName="active">
          <div
            className="navLinkHeadings"
            style={{ display: "flex", color: "#BB4225" }}
            onClick={() => this.onClickChangeBodyStyle()}
          >
            <img
              src={RupeeLogo}
              alt=""
              className="login-user-ReferEarnIcon ml-16 mt-12"
            ></img>
            <h6 className="referEarn mt-16">Indian Rupee (INR)</h6>
            <p className="changeCurency mt-16">CHANGE</p>
          </div>
        </Link>
        <div
          className="navLinkHeadings"
          style={{ display: "flex", color: "#BB4225" }}
          onClick={() => this.onClickChangeBodyStyle()}
        >
          <img
            src={FranchiseeLogo}
            alt=""
            className="login-user-ReferEarnIcon ml-16 mt-12"
          ></img>
          <h6 className="referEarn mt-16">Become a Franchisee</h6>
        </div>
      </div>
    );
  }
}
