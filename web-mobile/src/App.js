import React, { Component } from 'react';
import './App.css';
import Login from './components/login_components/Login';
import LoginPassword from './components/login_components/LoginPassword';
import SignLogin from './components/login_components/SignLogin';
import OneLastStep from './components/login_components/OneLastStep';
import SetAccounts from './components/login_components/SetAccounts';
import OTPEnter from './components/login_components/OTPEnter';
import CategoryMain from './components/category/CategoryMain';
import FilterMain from './components/category/FilterMain';
import OrderConfirmation from './components/order_confirmation/OrderConfirmation'
import '../src/assets/css/custom.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResetPassword from './components/login_components/reset_password/ResetPassword';
import ProductDetailPage from './components/product_details/ProductDetailPage';
import switchCurrency from './components/switch_currency/switchCurrency'
import home_age from './components/home_page/MainHomePage';
import SelectSize from './components/product_details/selectSize'
import MYBag from './components/mybag/bag'
import ForgotPassword from './components/login_components/forgotPassword'
import shippingPayment from './components/shipping_payment/saveAddresses'
import MyAccount from './components/account/MyAccount'
import NeedHelp from './components/order_confirmation/NeedHelp'
import DeleteModel from './components/shipping_payment/deleteModel'
import CardDetailsPayment from './components/shipping_payment/cardDetailsForPayment'
import PaymentOptions from './components/shipping_payment/paymentOptions'
import MakePaymentOptions from './components/shipping_payment/makePaymentFirst'
import './assets/css/required.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { MyOrders } from "./components/account/MyOrders";
import ItemCancellation from "./components/account/ItemCancellation";
import ReturnItem from "./components/account/returnItem";
import CategoryNavigation from "./components/category_navigation/category_navigation";
import staticContent from "./components/static_contents/termconditions";
import shippingPolicy from "./components/static_contents/shippingpolicy";
import helped from "./components/static_contents/helped";
import careers from "./components/static_contents/careers";
import aboutUs from "./components/static_contents/about_us";
import returnsPaGe from "./components/static_contents/returns_page";
import contactusPage from "./components/static_contents/contact_us";
import privacyPolicies from "./components/static_contents/privacypolicyjay";
import referEarn from './components/account/refer&Earn/referEarn';
import myCredits from './components/account/myCredits/myCredits';
import myCoupons from './components/account/myCoupons/myCoupons';
import  myWishlist from './components/account/myWishlist/myWishlist';
import  recentlyViewedItems from './components/account/recentlyViewedItems/recentlyViewedItems';
import savedAddress from './components/account/savedAddress/savedAddress';
import savedCollections from './components/account/savedCollections/savedCollections';
import loginScreen1 from './components/account/loginSecurity/loginScreen1';
import archiveContent from "./components/static_contents/archivecontents";
import blogs from "./components/static_contents/blogs";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
            
              <Route exact path="/blogs" component={blogs}/>
              <Route exact path="/archiveContent" component={archiveContent}/>
              <Route exact path="/privacyPage" component={privacyPolicies}/>
              <Route exact path="/contactUs" component={contactusPage}/>
                <Route exact path="/returnspage" component={returnsPaGe}/>
              <Route exact path="/aboutUs" component={aboutUs}/>
              <Route exact path="/careers" component={careers}/>
              <Route exact path="/helped" component={helped}/>
            <Route exact path="/shippingpolicy" component={shippingPolicy}/>
              <Route exact path="/termcondition" component={staticContent}/>
              <Route exact path="/" name="Home" component={home_age} />
              <Route exact path='/login' name='Login Page' component={Login} />
              <Route exact path='/loginPassword' name='Login Page' component={LoginPassword} />
              <Route exact path='/signin' name='Login Page' component={SignLogin} />
              <Route exact path='/login/onelaststep' name='Login Page' component={OneLastStep} />
              <Route exact path='/login/setAccounts' name='Login Page' component={SetAccounts} />
              <Route exact path='/login/OtpEnter' name='Login Page' component={OTPEnter} />
              <Route exact path='/category/filter' name='Login Page' component={FilterMain} />
              <Route exact path='/shipingPayment' name='shiping payment' component={shippingPayment} />
              <Route exact path='/productDetail' name='Product Detail Page' component={ProductDetailPage} />
              <Route exact path='/productListing' name='Listing Page' component={CategoryMain}/>
              <Route exact path='/resetPassword' name='Listing Page' component={ResetPassword}/>
              <Route exact path='/forgotPassword' name='Listing Page' component={ForgotPassword}/>
              <Route exact path='/currency' name='Listing Page' component={switchCurrency}/>
              <Route exact path='/orderConfirmation' name='Listing Page' component={OrderConfirmation}/>
              <Route exact path='/myBag' name='Listing Page' component={MYBag}/>
              <Route exact path='/myAccount' name='Listing Page' component={MyAccount}/>
              <Route exact path='/myAccount/myOrders' name='Listing Page' component={MyOrders}/>
              <Route exact path='/myAccount/itemCancellation' name='Item Cancellation Page' component={ItemCancellation}/>
              <Route exact path='/myAccount/returnItem' name='Return Item Page' component={ReturnItem}/>
              <Route exact path='/productDetail/size' name='Select Size' component={SelectSize}/>
              <Route exact path='/orderConfirmationNew/help' name='Help Page' component={NeedHelp}/> 
              <Route exact path='/deleteModel' name='Delete Model' component={DeleteModel}/>
              <Route exact path='/cardDetailsPayment' name='Card Details Payment' component={CardDetailsPayment}/>
              <Route exact path='/paymentOptions' name='Payment Options' component={PaymentOptions}/>
              <Route exact path='/makePaymentOptions' name='Make Payment Options' component={MakePaymentOptions}/>  
			        <Route exact path="/CategoryNavigation" name="CategoryNavigation" component={CategoryNavigation} />
              <Route exact path='/referearn' name='refer and earn' component={referEarn}/>  
              <Route exact path='/myAccount/myCredits' name='my credits' component={myCredits}/>  
              <Route exact path='/myAccount/myCoupons' name='my coupons' component={myCoupons}/>
              <Route exact path='/myAccount/myWishlist' name='my myWishlist' component={myWishlist}/>
              <Route exact path='/myAccount/recentlyViewedItems' name='my recentlyViewedItems' component={recentlyViewedItems}/>
              <Route exact path='/myAccount/referEarn' name='referEarn' component={referEarn}/>
              <Route exact path='/myAccount/savedAddress' name='savedAddress' component={savedAddress}/>
              <Route exact path='/myAccount/savedCollections' name='savedCollections' component={savedCollections}/>
               <Route exact path='/myAccount/loginScreen1' name='loginScreen1' component={loginScreen1}/>
            
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
