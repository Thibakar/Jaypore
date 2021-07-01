import React, { Component } from 'react';



class CollapsablePannel extends Component {
    render() {
        return (
            <div>
                <section className="accordion mb-0">
                    <input type="checkbox" name="collapse1" id="Departments" />
                    <label htmlFor="Departments" className="m-txt font-16">Departments <span className="float-right brandcolor-txt">+</span></label>
                    <div className="content">
                        <p>Departments Content here</p>
                    </div>
                </section>
                <section className="accordion mb-0">
                    <input type="checkbox" name="collapse1" id="Departments1" />
                    <label htmlFor="Departments1" className="m-txt font-16">Most Searched Categories <span className="float-right brandcolor-txt">+</span></label>
                    <div className="content">
                        <p>Most Searched Categories Content here</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default CollapsablePannel
