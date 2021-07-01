import React, { Component } from 'react';
import '../../../assets/css/custom.css';
import Logo from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg';
import Back from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg'
import search from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/Searchbl.svg'
import Beg from "../../../assets/Jaypore Assets/01 Icons/01 Login Signup/Bag.svg";
import {Link} from 'react-router-dom'


export default class HeaderBack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
    }




    // goHome=()=>{
    //     this.props.history.push('/');
    // }



    render() {



        return (
            <div className="header-jaypore">


                <div className="header-menu-bar zindex">
                    <img src={Back} alt="Go Back" width='30px' height="25px"
                        onClick={() => this.props.headerGoBack()}
                    />

                </div>
                <div className="jaypore-header-div">
                    <img src={Logo} alt="logo" style={{ marginLeft: '3em' }}
                        onClick={() => this.props.goHome()}
                    />
                </div>
                <div className='shop-bag-div-head'>
                    <img src={search} alt="search" className='pad-5' width='30px' height='30px' />
                    <Link to={{ pathname: '/myBag', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                        <img src={Beg} alt="shopping-beg" className='pad-5 ml-3' />
                    </Link>
                </div>
            </div>




        )
    }
}
