import React, { Component } from 'react'
import "../../assets/css/staticcontent.css";
import FooterPage from "../../components/common/footer/footer";
import HeaderPage from "../../components/common/header/header";


export class Archivecontents extends Component {
    render() {
        return (
            <React.Fragment>
                
            <div>
                <div className="headerMenustyle01">
                    <div>
                    <HeaderPage />
                    </div>
                        <div className="sh-outer-coverd-c-pvp">
                        <div className="shipping_policymain_content">
                            <h5 className="shippin_policytxt">Archive Content page</h5>
                            <p>This is the react component...we need to work on it..</p>
                          
                        </div>
                   
                </div>
         </div>
            <div className="po-rl-ft-pa">
         <FooterPage/>
         </div>
         </div>
    </React.Fragment>
        )
    }
}

export default Archivecontents
