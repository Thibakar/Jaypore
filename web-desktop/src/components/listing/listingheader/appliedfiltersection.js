import React, { Component } from 'react'
import closeIcon from '../../../assets/icons/close.svg'

export class Appliedfiltersection extends Component {
    render() {
        return (
            <div>
                <div className="bg-white mb-3 ml--13">
                    <div className="ml-3 pt-3">
                        <p className="regular">APPLIED FILTERS</p>
                    </div>
                    <div className="row">

                        <div className="d-flex ml-4">
                            <div className="ml-1">
                                <p className="selectedFilterLabel labelPadding regular"><span className="mt-1">S</span> <img className="filterCloseIcon ml-1 mt--1 cu-ptr" src={closeIcon} /></p>
                            </div>
                            <div className="ml-1">
                                <p className="selectedFilterLabel labelPadding regular"><span className="mt-1">Abraham and Thakore</span> <img className="filterCloseIcon ml-1 mt--1 cu-ptr" src={closeIcon} /></p>
                            </div>
                            <div className="ml-1">
                                <p className="selectedFilterLabel labelPadding regular"><span className="mt-1">Addoz</span> <img className="filterCloseIcon ml-1 mt--1 cu-ptr" src={closeIcon} /></p>
                            </div>
                            <div className="ml-1">
                                <p className="selectedFilterLabel colorLabelPadding regular"><button className="mt-1 smallSquareCard"></button> <img className="filterCloseIcon ml-1 mt--10 cu-ptr" src={closeIcon} /></p>
                            </div>
                            <div className="mt-2 ml-2">
                                <a href="#" className="text-blue">Clear All</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Appliedfiltersection
