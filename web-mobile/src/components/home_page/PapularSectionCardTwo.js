import React, { Component } from 'react'
import ForwardArrow from '../../components/navigation_Drawer/navigation_drawer_icon/Dropdown Arrow.svg';


class PapularSectionCardTwo extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/14012020_Brand_Bestselling_slider.jpg" alt className="popularImages" />

                    <section className="accordion mb-0">
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="SareesTwo" />
                        <label className="font-size-16 bg-white pl-24" htmlFor="SareesTwo"><strong>Sarees <span className="float-right"><img src={ForwardArrow} className='forward-Logo-StylePopular'></img></span></strong></label>
                        <div className="content">
                            <p>Sarees Content here</p>
                        </div>
                    </section>

                    <section class="accordion mb-0">
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="KurtasTwo" />
                        <label className="font-size-16 bg-white pl-24" htmlFor="KurtasTwo"><strong>Kurtas <span className="float-right"><img src={ForwardArrow} className='forward-Logo-StylePopular'></img></span></strong></label>
                        <div class="content">
                            <p>Kurtas Content here</p>
                        </div>
                    </section>
                    <section className="accordion mb-0">
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="TunicsTwo" />
                        <label className="font-size-16 bg-white pl-24" htmlFor="TunicsTwo"><strong>Tunics <span className="float-right"><img src={ForwardArrow} className='forward-Logo-StylePopular'></img></span></strong></label>
                        <div className="content">
                            <p>Tunics Content here</p>
                        </div>
                    </section>

                    <section class="accordion mb-0">
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="TopsTwo" />
                        <label className="font-size-16 bg-white pl-24" htmlFor="TopsTwo"><strong>Tops <span className="float-right"><img src={ForwardArrow} className='forward-Logo-StylePopular'></img></span></strong></label>
                        <div class="content">
                            <p>Tops Content here</p>
                        </div>
                    </section>
                    <section class="accordion mb-0">
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="DressesTwo" />
                        <label className="font-size-16 bg-white pl-24" htmlFor="DressesTwo"><strong>Dresses <span className="float-right"><img src={ForwardArrow} className='forward-Logo-StylePopular'></img></span></strong></label>
                        <div class="content">
                            <p>Dresses Content here</p>
                        </div>
                    </section>
                    <section class="accordion mb-0">
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="CategoriesTwo" />
                        <label className="font-size-16 bg-white pl-24" htmlFor="CategoriesTwo"><strong>Kaftans <span className="float-right"><img src={ForwardArrow} className='forward-Logo-StylePopular'></img></span></strong></label>
                        <div class="content mb-14">
                            <p>Kaftans Content here</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default PapularSectionCardTwo
