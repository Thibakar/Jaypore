import React, { Component } from 'react'
import Share from '../../assets/Jaypore Assets/01 Icons/04 PDP/Share.svg'
import Email from '../../assets/Jaypore Assets/01 Icons/04 PDP/Email.svg'
import Facebook from '../../assets/Jaypore Assets/01 Icons/04 PDP/Facebook.svg'
import Twitter from '../../assets/Jaypore Assets/01 Icons/04 PDP/Twitter.svg'
import Send from '../../assets/Jaypore Assets/01 Icons/04 PDP/Send.svg'
import Copy from '../../assets/Jaypore Assets/01 Icons/04 PDP/Copy.svg'



class ShareItem extends Component {
    render() {
        return (
            <div>
                <div className="col-12">

                    <div className="row mt-24 mb-16">
                        <div className="col-2 pl--15">
                            <img src={Share} alt="shareimage" height="25px" width="20px" />
                        </div>
                        <div className="col-10 pl-0 ml--10">
                            <h3><strong>Share this item with friends</strong></h3>
                        </div>
                    </div>


                    <div className="col-12 text-center pl-0 ml--15">
                        <div className="displayFlex">
                            <div className="">
                                <img src={Email} alt="Emailimage" className="pdpSocialImages" />
                                <p className="mt-8">Email</p>
                            </div>&nbsp;&nbsp;
                        <div className="">
                                <img src={Facebook} alt="Facebookimage" className="pdpSocialImages" />
                                <p className="mt-8">Share</p>
                            </div>&nbsp;&nbsp;
                        <div className="">
                                <img src={Twitter} alt="Twitterimage" className="pdpSocialImages" />
                                <p className="mt-8">Twitter</p>
                            </div>&nbsp;&nbsp;
                        <div className="">
                                <img src={Send} alt="Sendimage" className="pdpSocialImages" />
                                <p className="mt-8">Send</p>
                            </div>&nbsp;&nbsp;
                        <div className="">
                                <img src={Copy} alt="Copyimage" className="pdpSocialImages" />
                                <p className="mt-8">Copy Link</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShareItem
