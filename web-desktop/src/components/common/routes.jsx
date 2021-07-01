import React, { Component } from "react";
import Login from "../scenes/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OTPSent from "../scenes/otp_sent";
import OTPVerification from "../scenes/otp_verification";
import Confirmation from "../scenes/confirmation";
import WelcomeMessage from "../scenes/welcome_message";
import OTPNotRecieved from "../scenes/otp_notRecieved";
import WrongOTP from "../scenes/wrong_OTP";
import ResetPasswordLinkSent from "../scenes/restPassword_linkSent";
import ResetPassword from "../scenes/resetPassword";
import PasswordChangedMessage from "../scenes/passwordChanged_message";
import SignUpLanding from "../scenes/SignUp_landing";
import MyBag from "../mybag/myBag";
import HomeMain from "../homepage/home_main";
import LoginPassword from "../scenes/loginPassword";
import ForgotPassword from "../scenes/forgot_password";
import Accountsetup from "../scenes/accountSetup";
import BasicModal from "../scenes/loginModal";
import OrderConfirmation from "../orderconfirmation/order_confirmation";
import ProductDetails from "../productdetails/product_details_page";
import OneLastStep from "../scenes/one_lastStep";
import CategoryListing from "../listing/category_listing";
import EventListing from "../listing/event_listing";
import BrandListing from "../listing/brand_listing";
import SearchListing from "../listing/search_listing";
import MyorderFullLength from "../myorder/myOrder";
import categoryListing2 from "../listing/category_listing2";
import ShippingPayment from "../shippingpayment/shipping_payment";
import ShippingPaymentUS from "../shippingpayment/shipping_payment_us";
import DeleteModel from "../shippingpayment/delete_modal";
import EditModal from "../shippingpayment/edit_modal";
import CategoryListingSpecial from "../listing/category_special";
import ItemCancelationModel from "../myorder/itemCancelationModel";
import AccountsetupUS from "../scenes/accountSetup";
import EmptyCartMyOrder from "../myorder/emptyCartMyOrder";
import filter from "../listing/filter";
import aboutus from "../shippingpayment/aboutus";
import termcondition from "../shippingpayment/termcondition";
import careers from "../shippingpayment/careers";
import returnopt from "../shippingpayment/returnopt";
import policyshipping from "../shippingpayment/policyshipping";
import helpContent from "../shippingpayment/helpcontent";
import contacttus from "../shippingpayment/contactusjay";
import privacypolicy from "../shippingpayment/privacy";
import menucontent from "../shippingpayment/menustaticcontent";
import archivePage from "../shippingpayment/archivepage";
import aboutuscontent from "../../components/staticcontentcondition/aboutus";
import blogsPage from "../../components/shippingpayment/blogs";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/blogs" component={blogsPage} />
            <Route path="/antss" component={aboutuscontent} />
            <Route path="/archivecontent" component={archivePage} />
            <Route path="/menucontent" component={menucontent} />
            <Route path="/privacy" component={privacypolicy} />
            <Route path="/contactUs" component={contacttus} />
            <Route path="/helpcontent" component={helpContent} />
            <Route path="/shippingpolicy" component={policyshipping} />
            <Route path="/returnopt" component={returnopt} />
            <Route path="/careers" component={careers} />
            <Route path="/term" component={termcondition} />
            <Route path="/aboutUs" component={aboutus} />
            <Route path="/myBag" component={MyBag} />
            <Route path="/otpsent" name="OTP sent Page" component={OTPSent} />
            <Route path="/login" name="Login Page" component={Login} />
            <Route path="/loginModal" component={BasicModal} />
            <Route path="/loginPassword" component={LoginPassword} />
            <Route path="/accountsetup" component={Accountsetup} />
            <Route path="/accountsetupus" component={AccountsetupUS} />
            <Route path="/welcomeMessage" component={WelcomeMessage} />
            <Route path="/otpVerification" component={OTPVerification} />
            <Route path="/otpnotrecieved" component={OTPNotRecieved} />
            <Route path="/shippingPayment" component={ShippingPayment} />
            <Route path="/shippingPaymentUS" component={ShippingPaymentUS} />
            <Route path="/deleteModel" component={DeleteModel} />
            <Route path="/editModel" component={EditModal} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/wrongotp" component={WrongOTP} />
            <Route
              path="/resetpasswordlinksent"
              component={ResetPasswordLinkSent}
            />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route
              path="/passwordChanged_message"
              component={PasswordChangedMessage}
            />
            <Route path="/signuplanding" component={SignUpLanding} />
            <Route path="/oneLastStep" component={OneLastStep} />
            <Route path="/confirmation" component={Confirmation} />
            <Route exact path="/" component={HomeMain} />
            <Route path="/home_main" component={HomeMain} />
            <Route path="/categoryListing" component={CategoryListing} />
            <Route path="/CategoryListing2" component={categoryListing2} />
            <Route path="/eventListing" component={EventListing} />
            <Route path="/searchListing" component={SearchListing} />
            <Route path="/brandListing" component={BrandListing} />
            <Route path="/categorySpecial" component={CategoryListingSpecial} />
            <Route path="/orderConfirmation" component={OrderConfirmation} />
            <Route path="/productDetails" component={ProductDetails} />
            <Route path="/myorderFullLength" component={MyorderFullLength} />
            <Route
              path="/myAccount/itemCancellation"
              component={ItemCancelationModel}
            />
            <Route path="/myorderEmptycart" component={EmptyCartMyOrder} />
            <Route path="/filter" component={filter} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
