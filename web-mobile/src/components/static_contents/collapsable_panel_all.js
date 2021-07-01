import React, { Component } from 'react'

export class Collapsable_panel_all extends Component {
    render() {
        return (
            <div>
                        <div>
                    <section className="accordion mb-0 footer-accordion-background footer-accordion-shadow b-s-none">
                        <input type="checkbox" name="collapse1" id="Departments" />
                        <label id="as_icon_chng" for="Departments" className="font-17 footer-accordion-background accordion-label">
                            <div className="flex-center">Departments<span id="as_icon_plus_minus" className="float-right brandcolor-txt white footer-accordion-icon">+</span></div>
                        </label>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Clothing</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Jewelry</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Accessories</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Gift &amp; More</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Jaypore Label</p></div>
                    </section><section className="accordion mb-0 footer-accordion-background footer-accordion-shadow b-s-none"><input type="checkbox" name="collapse1" id="categories1" /><label for="categories1" className="font-17 footer-accordion-background accordion-label">
                        <div>Most Searched Categories <span id="as_icon_plus_minus_2" className="float-right brandcolor-txt white footer-accordion-icon">+</span></div>
                    </label><div className="content b-s-none font-17"><p className="left-align ml-20-rev">Potli</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Nose Pins</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Chokers</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Tie And Dye</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Embroidered Kurta</p></div>
                    </section><section className="accordion mb-0 footer-accordion-background footer-accordion-shadow b-s-none"><input type="checkbox" name="collapse1" id="company" /><label for="company" className="font-17 footer-accordion-background accordion-label">
                        <div>Company <span id="as_icon_plus_minus_3" className="float-right brandcolor-txt white footer-accordion-icon">+</span></div></label>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">About Us</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Contact Us</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Shipping</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Returns</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Help</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Term</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Privacy</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Career</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Archive</p></div>
                        <div className="content b-s-none font-17"><p className="left-align ml-20-rev">Blog</p></div>
                    </section>
                </div> 
            </div>
        )
    }
}

export default Collapsable_panel_all
