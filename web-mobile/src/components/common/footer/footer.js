import React, { Component } from 'react';
import '../../../assets/css/custom.css';
import jayporeLogo from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg'
import Facebook from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/Facebook.svg';
import Instagram from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/Instagram.svg';
import Pinterest from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/Pinterest.svg';
import Twitter from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/Twitter.svg';
import { Link } from 'react-router-dom'


export default class Footer extends Component {
    // js code for icone(+/-) toggle  in footer//

    constructor(props) {
        super(props)
        this.state = {
            openfooter: ''
        }
    }

    onchangefooter = (data) => {
        if (data === this.state.openfooter) {
            this.setState({
                openfooter: ''
            })
        }
        else {
            this.setState({
                openfooter: data
            })
        }
    }

    changeIcon = () => {
        var x = document.getElementById("as_icon_plus_minus");
        if (x.innerHTML === "+") {
            x.innerHTML = "-";
        } else {
            x.innerHTML = "+";
        }
    }

    changeIcon2 = () => {
        var y = document.getElementById("as_icon_plus_minus_2");
        if (y.innerHTML === "+") {
            y.innerHTML = "-";
        } else {
            y.innerHTML = "+";
        }
    }

    changeIcon3 = () => {
        var z = document.getElementById("as_icon_plus_minus_3");
        if (z.innerHTML === "+") {
            z.innerHTML = "-";
        } else {
            z.innerHTML = "+";
        }
    }


    render() {
        return (
            <div>
                <div>
                    <section className="accordion mb-0 footer-accordion-background footer-accordion-shadow b-s-none"
                        onChange={() => this.onchangefooter('Departments')}>
                        <input type="checkbox" name="collapse1" id="Departments"
                            checked={this.state.openfooter === 'Departments' ? true : false} />
                        <label id="as_icon_chng" htmlFor="Departments" className="font-17 footer-accordion-background accordion-label">
                            < div className="flex-center">Departments
                            <span id="as_icon_plus_minus" className="float-right brandcolor-txt white footer-accordion-icon">
                                    {this.state.openfooter === 'Departments' ? '-' : '+'}</span></ div></label>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Clothing</p>
                        </div>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Jewelry</p>
                        </div>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Accessories</p>
                        </div>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Gift & More</p>
                        </div>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Jaypore Label</p>
                        </div>
                    </section>
                    <section className="accordion mb-0 footer-accordion-background footer-accordion-shadow b-s-none"
                        onChange={() => this.onchangefooter('categories1')}>
                        <input type="checkbox" name="collapse1" id="categories1"
                            checked={this.state.openfooter === 'categories1' ? true : false} />
                        <label htmlFor="categories1" className="font-17 footer-accordion-background accordion-label">
                            < div>Popular Searches <span id="as_icon_plus_minus_2" className="float-right brandcolor-txt white footer-accordion-icon">
                                {this.state.openfooter === 'categories1' ? '-' : '+'}</span></ div></label>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Potli</p>
                        </div>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Nose Pins</p>
                        </div>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Chokers</p>
                        </div>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Tie And Dye</p>
                        </div>
                        <div className="content b-s-none font-17">
                            <p className='left-align ml-20-rev'>Embroidered Kurta</p>
                        </div>
                    </section>
                    <section className="accordion mb-0 footer-accordion-background footer-accordion-shadow b-s-none"
                        onChange={() => this.onchangefooter('company')}>
                        <input type="checkbox" name="collapse1" id="company"
                            checked={this.state.openfooter === 'company' ? true : false} />
                        <label htmlFor="company" className="font-17 footer-accordion-background accordion-label">
                            < div>Company <span id="as_icon_plus_minus_3" className="float-right brandcolor-txt white footer-accordion-icon">
                                {this.state.openfooter === 'company' ? '-' : '+'}</span></ div></label>
                        <div className="content b-s-none font-17">
                          <Link to="/aboutUs" className="abt-u-ftv-p-d" >  <p className='left-align ml-20-rev'>About Us</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                           <Link to="/contactUs"  className="abt-u-ftv-p-d"> <p className='left-align ml-20-rev'>Contact Us</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                         <Link to="/shippingpolicy" className="abt-u-ftv-p-d">   <p className='left-align ml-20-rev'>Shipping</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                          <Link to="/returnspage" className="abt-u-ftv-p-d"> <p className='left-align ml-20-rev'>Returns</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                          <Link to="/helped"  className="abt-u-ftv-p-d" > <p className='left-align ml-20-rev'>Help</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                        <Link to="/termcondition" className="abt-u-ftv-p-d" > <p className='left-align ml-20-rev'>Term</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                         <Link to="/privacyPage" className="abt-u-ftv-p-d" >  <p className='left-align ml-20-rev'>Privacy</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                         <Link to="/careers"  className="abt-u-ftv-p-d" > <p className='left-align ml-20-rev'>Career</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                         <Link to="/archiveContent" className="abt-u-ftv-p-d"> <p className='left-align ml-20-rev'>Archive</p></Link>
                        </div>
                        <div className="content b-s-none font-17">
                          <Link to="/blogs" className="abt-u-ftv-p-d"> <p className='left-align ml-20-rev'>Blog</p></Link>
                        </div>
                    </section>
                </div>

                <div className='right-center footer-background'>
                    <h4 className="pt-33 mb-8 ml--15 white l-txt font-17">Follow us on</h4>
                    <div className='row-div'>
                        <img src={Facebook} alt="facebook-icon" className="footerSocialIcons" />
                        <img src={Instagram} alt="instagram-icon" className="footerSocialIcons" />
                        <img src={Pinterest} alt="pintrest-icon" className="footerSocialIcons" />
                        <img src={Twitter} alt="twitter-icon" className="footerSocialIcons" />
                    </div>
                    <h3 className='mt-32 mb-8 white l-txt font-17'>Questions?</h3>
                    <h3><span className="white l-txt font-17">Mail us at</span> <Link to="#" className="footer-contact l-txt">hello@jaypore.com</Link></h3>
                    <img src={jayporeLogo} alt="jaypore-logo" className='jayporeLogoImage mt-46 mb-80' />
                </div>
            </div>
        )
    }
}
