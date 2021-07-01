import React, { Component } from 'react'
import close from '../../assets/Jaypore Assets/01 Icons/03 Listing/close.svg'
export class selectSize extends Component {
    render() {
        return (
            <div className='back-color-pink h-full'>
                <div className='head-pdp-div'>
                    <img src={close} className='close-pdp-size' onClick={()=>this.props.history.goBack()} />
                    <div className='sizeTitle'>
                        <div className='title-size'>Size Chart</div>
                        <div className='description-size'>Ivory-Grey Handloom Ikat Cotton Top</div>
                    </div>
                </div>

                <div className='text-center size-tab'>
                    <div className='size-tab-select cu-ptr a-b-txt a-16-txt'>in</div>
                    <div className='size-tab-not-select cu-ptr a-m-txt a-16-txt'>cm</div>
                </div>
                <div className='p-30'>
                    <table className='size-table size-table-chart' cellSpacing={0}>
                        <tr>
                            <th>Size</th>
                            <th>Bust</th>
                            <th>Waist</th>
                            <th>Sleeve</th>
                            <th>Hip</th>
                        </tr>
                        <tr>
                            <td>XS</td>
                            <td>34.0</td>
                            <td>30.0</td>
                            <td>50.0</td>
                            <td>36.0</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>36.0</td>
                            <td>32.0</td>
                            <td>50.0</td>
                            <td>38.0</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>38.0</td>
                            <td>34.0</td>
                            <td>50.0</td>
                            <td>40.0</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>40.0</td>
                            <td>36.0</td>
                            <td>50.0</td>
                            <td>42.0</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>42.0</td>
                            <td>38.0</td>
                            <td>50.0</td>
                            <td>44.0</td>
                        </tr>
                        <tr>
                            <td>XXL</td>
                            <td>44.0</td>
                            <td>40.0</td>
                            <td>50.0</td>
                            <td>46.0</td>
                        </tr>
                    </table> 
                </div>

                <div className='text-center font-12 a-r-txt a-mt-8 a-colr-61'>Showing garment measurements in <span className=' a-sb-txt a-colr-42'>inches</span></div>


            </div>
        )
    }
}

export default selectSize
