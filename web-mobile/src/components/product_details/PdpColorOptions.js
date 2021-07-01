import React, { Component } from 'react'

class PdpColorOptions extends Component {
    render() {
        return (
            <div className="col-12 pl-0">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-24 font-18 m-txt colr-42">Color Options</div>
                    </div>
                        <div className="color-btns mb-16 mt-16 ml-8">
                                <button class=" colorbtnSize btn-colorOptions1"></button>
                                <button class="btn-colorOptions2 colorbtnSize"></button>
                                <button class="btn-colorOptions3 colorbtnSize"></button>
                                <button class="btn-colorOptions4 colorbtnSize"></button>
                        </div>
                </div>
            </div>
        )
    }
}

export default PdpColorOptions
