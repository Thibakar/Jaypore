import React, { Component } from 'react';
import '../../../assets/css/custom.css';
import Logo from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg';
import Menubar from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/icons8-menu.svg'
import search from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/Searchbl.svg'
import Beg from "../../../assets/Jaypore Assets/01 Icons/01 Login Signup/Bag.svg";
import NA from '../../navigation_drawer/navigationDrawer'
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            originalBodyOverflow: ''
        };
    }
    onSetSidebarOpen = (open) => {
        if (this.state.sidebarOpen) {
            this.setState({
              sidebarOpen: open
            });
            document.body.style.overflow = this.state.originalBodyOverflow;
            document.body.style.position="static";
          }
          else {
            this.setState({
              sidebarOpen: true,
              originalBodyOverflow: document.body.style.overflow
            });
            document.body.style.overflow = "hidden";
            document.body.style.position="fixed";
          }      
    }


  navigate=(path)=>{
      console.log("this")
    document.body.style.overflow = this.state.originalBodyOverflow;
    document.body.style.position="static";    
    this.props.props.history.push(path)
  }


    render() {
        return (
            <div className="header-jaypore">
                <Sidebar
                    sidebar={<NA originalBodyOverflow={this.state.originalBodyOverflow} />}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white", width: '304' } }}
                    sidebarClassName='nav-height'
                >
                </Sidebar>
                <div className="header-menu-bar zindex">
                    <img src={Menubar} alt="Menubar" onClick={() => this.onSetSidebarOpen(true)} />
                </div>
                <div className="jaypore-header-div">
                    <img src={Logo} alt="logo" style={{ marginLeft: '3em' }}
                        onClick={() => this.props.goHome()} />
                </div>
                <div className='shop-bag-div-head zindex'>
                    <img src={search} alt="search" className='pad-5' width='30px' height='30px' style={{marginRight:4}} />

                    <Link to={{ pathname: '/myBag', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                        <img src={Beg} alt="shopping-beg" className='pad-5'></img></Link>
                </div>
            </div>
        )
    }
}
