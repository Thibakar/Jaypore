import React, { Component } from 'react'
import ShowCollection from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Show Collection.svg'



class HomeMostRecentCurations extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }
    //TODO: this still needs to be fixed 

    

    render() {
        let recentCurations = [
            'https://files.lbb.in/78814909_596221037879125_5520118888517556005_n_1578901433140.jpg',
            'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/m/k/mkksaj50040068-2_3.jpg',
            'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/k/a/kahsaj50040031-2_1.jpg',
            'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/b/a/bansaj500389541-2_2.jpg',
            'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/b/a/bansaj500389543-2_2.jpg',
            'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/v/rvcsaj50039192-2_3.jpg'
        ]
        return (
            <div className="card" style={{marginTop:16,paddingTop:24,paddingLeft:12,paddingRight:12}}>
                <div className='sb-txt font-18' style={{marginBottom:12}}>Most Recent Curation</div>
                <div style={{ paddingBottom: '25px' }}>
                    {
                        recentCurations.map((curation) => (

                            <div style={{ width: '50%', float: "left", padding: 4 }}>
                                <div style={{ margin: 'auto', height: '220px' }} className='div-rel'>
                                    <img src={curation} alt="productimage"
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        
                                        />
                                    <img src={ShowCollection} alt="hearticon"
                                        style={{
                                            top: 8,
                                            left: 'auto',
                                            right: 8
                                        }}
                                        className=" div-abs"
                                        onClick={()=>this.props.toggleSimilar()} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default HomeMostRecentCurations
