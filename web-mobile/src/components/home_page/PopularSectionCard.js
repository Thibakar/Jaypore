import React, { Component } from 'react'
import ForwardArrow from '../navigation_drawer/navigation_drawer_icon/Dropdown Arrow.svg';


class PopularSectionCard extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/14012020_Brand_Bestselling_slider.jpg" 
                    alt="popularimage" className="popularImages a-img-top-border" />

                    <section className="accordion mb-0"  onClick={()=>this.props.props.history.push('/productListing')}>
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="Sarees" />
                        <label className="font-size-14 bg-white pl-24 m-txt" htmlFor="Sarees">Sarees <span className="float-right"><img src={ForwardArrow} alt="" className='forward-Logo-StylePopular'></img></span></label>
                        {/* <div className="content">
                            <p>Sarees Content here</p>
                        </div> */}
                    </section>

                    <section className="accordion mb-0"  onClick={()=>this.props.props.history.push('/productListing')}>
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="Kurtas" />
                        <label className="  font-size-14 bg-white pl-24 m-txt" htmlFor="Kurtas">  Kurtas <span className="float-right"><img src={ForwardArrow} alt="" className='forward-Logo-StylePopular'></img></span>  </label>
                        {/* <div class="content">
                            <p>Kurtas Content here</p>
                        </div> */}
                    </section>
                    <section className="accordion mb-0"  onClick={()=>this.props.props.history.push('/productListing')}>
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="Tunics" />
                        <label className="  font-size-14 bg-white pl-24 m-txt" htmlFor="Tunics">  Tunics <span className="float-right"><img src={ForwardArrow} alt="" className='forward-Logo-StylePopular'></img></span>  </label>
                        {/* <div className="content">
                            <p>Tunics Content here</p>
                        </div> */}
                    </section>

                    <section class="accordion mb-0"  onClick={()=>this.props.props.history.push('/productListing')}>
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="Tops" />
                        <label className="  font-size-14 bg-white pl-24 m-txt" htmlFor="Tops">  Tops <span className="float-right"><img src={ForwardArrow} alt="" className='forward-Logo-StylePopular'></img></span>  </label>
                        {/* <div class="content">
                            <p>Tops Content here</p>
                        </div> */}
                    </section>
                    <section class="accordion mb-0"  onClick={()=>this.props.props.history.push('/productListing')}>
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="Dresses" />
                        <label className="  font-size-14 bg-white pl-24 m-txt" htmlFor="Dresses">  Dresses <span className="float-right"><img src={ForwardArrow} alt="" className='forward-Logo-StylePopular'></img></span>  </label>
                        {/* <div class="content">
                            <p>Dresses Content here</p>
                        </div> */}
                    </section>
                    <section class="accordion mb-0"  onClick={()=>this.props.props.history.push('/productListing')}>
                        <input type="checkbox" className="popularChecvkBox" name="collapse2" id="Categories" />
                        <label className="  font-size-14 bg-white pl-24 m-txt">  Kaftans <span className="float-right"><img src={ForwardArrow} alt="" className='forward-Logo-StylePopular'></img></span>  </label>
                        <div class="content mb-14">
                            {/* <p>Kaftans Content here</p> */}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default PopularSectionCard
