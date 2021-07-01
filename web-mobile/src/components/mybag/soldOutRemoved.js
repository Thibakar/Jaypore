import React, { Component } from 'react';

class SoldOutRemoved extends Component {
    render() {
        return (
            <div>
                <div className="sold-out-removed">
                    <div className="sold-out-item-box">
                        <p className="sold-out-message left-align">Soldout items have been removed from your bag</p>
                        <p className="font-12 sb-txt text-blue left-align">OK, GOT IT</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SoldOutRemoved;