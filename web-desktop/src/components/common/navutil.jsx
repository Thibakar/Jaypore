export class NavUtil {
    static props

    static setProps(props) {
        if (!NavUtil.props || Object.keys(NavUtil.props).length === 0) {
            console.log('input props', props)
            NavUtil.props = props
            console.log('props', NavUtil.props)
        }
    }

    static goToHome() {
        NavUtil.props.history.push("");
        window.scrollTo(0, 0)
    }

    static goToProductDetails() {
        NavUtil.props.history.push('/productDetails')
        window.scrollTo(0, 0)
    }

    static goToMyBag() {
        NavUtil.props.history.push('/myBag')
        window.scrollTo(0, 0)
    }

    static goToOtpSent() {
        NavUtil.props.history.push('/otpsent')
        window.scrollTo(0, 0)
    }

    static goToLogin() {
        NavUtil.props.history.push('/login')
        window.scrollTo(0, 0)
    }

    static goToLoginModal() {
        NavUtil.props.history.push('/loginModal')
        window.scrollTo(0, 0)
    }

    static goToLoginPassword() {
        NavUtil.props.history.push('/loginPassword')
        window.scrollTo(0, 0)
    }

    static goToAccountSetup() {
        NavUtil.props.history.push('/accountsetup')
        window.scrollTo(0, 0)
    }

    static goToAccountSetupUs() {
        NavUtil.props.history.push('/accountsetupUS')
        window.scrollTo(0, 0)
    }

    static goToWelcomeMessage() {
        NavUtil.props.history.push('/welcomeMessage')
        window.scrollTo(0, 0)
    }

    static goToOtpVerification() {
        NavUtil.props.history.push('/otpVerification')
        window.scrollTo(0, 0)
    }

    static goToOtpNotReceived() {
        NavUtil.props.history.push('/otpnotrecieved')
        window.scrollTo(0, 0)
    }

    static goToShippingPayment() {
        NavUtil.props.history.push('/shippingPayment')
        window.scrollTo(0, 0)
    }

    static goToShippingPaymentUS() {
        NavUtil.props.history.push('/shippingPaymentUS')
        window.scrollTo(0, 0)
    }

    static goToDeleteModal() {
        NavUtil.props.history.push('/deleteModel')
        window.scrollTo(0, 0)
    }

    static goToEditModal() {
        NavUtil.props.history.push('/editModel')
        window.scrollTo(0, 0)
    }

    static goToForgotPassword() {
        NavUtil.props.history.push('/forgotpassword')
        window.scrollTo(0, 0)
    }

    static goToWrongOtp() {
        NavUtil.props.history.push('/wrongotp')
        window.scrollTo(0, 0)
    }

    static goToResetPasswordLinkSent() {
        NavUtil.props.history.push('/resetpasswordlinksent')
        window.scrollTo(0, 0)
    }

    static goToResetPassword() {
        NavUtil.props.history.push('/resetpassword')
        window.scrollTo(0, 0)
    }

    static goToPasswordChangedMessage() {
        NavUtil.props.history.push('/passwordChanged_message')
        window.scrollTo(0, 0)
    }

    static goToSignupLanding() {
        NavUtil.props.history.push('/signuplanding')
        window.scrollTo(0, 0)
    }

    static goToHomeMain() {
        NavUtil.props.history.push('/home_main')
        window.scrollTo(0, 0)
    }

    static goToCategoryListing() {
        NavUtil.props.history.push('/categoryListing')
        window.scrollTo(0, 0)
    }

    static goToCategoryListing2() {
        NavUtil.props.history.push('/CategoryListing2')
        window.scrollTo(0, 0)
    }

    static goToEventListing() {
        NavUtil.props.history.push('/eventListing')
        window.scrollTo(0, 0)
    }

    static goToSearchListing() {
        NavUtil.props.history.push('/searchListing')
        window.scrollTo(0, 0)
    }

    static goToBrandListing() {
        NavUtil.props.history.push('/brandListing')
        window.scrollTo(0, 0)
    }

    static goToCategorySpecial() {
        NavUtil.props.history.push('/categorySpecial')
        window.scrollTo(0, 0)
    }
    static goToOrderConfirmation() {
        NavUtil.props.history.push('/orderConfirmation')
        window.scrollTo(0, 0)
    }

    static goToMyOrderFullLength() {
        NavUtil.props.history.push('/myorderFullLength')
        window.scrollTo(0, 0)
    }

    static goToMyAccountItemCancellation() {
        NavUtil.props.history.push('/myAccount/itemCancellation')
        window.scrollTo(0, 0)
    }

    static goToMyOrderEmptycart() {
        NavUtil.props.history.push('/myorderEmptycart')
        window.scrollTo(0, 0)
    }

    static goToFilter() {
        NavUtil.props.history.push('/filter')
        window.scrollTo(0, 0)
    }

    static goToOneLastStep() {
        NavUtil.props.history.push('/oneLastStep')
        window.scrollTo(0, 0)
    }

    static goToConfirmation() {
        NavUtil.props.history.push('/confirmation')
        window.scrollTo(0, 0)
    }

}