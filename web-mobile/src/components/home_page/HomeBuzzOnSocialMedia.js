import React, { Component } from 'react'
import instagramImage from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Instagram.svg'

class HomeBuzzOnSocialMedia extends Component {
    render() {
        return (
            <div className="">
                <div className="mt-24 sb-txt pl-16 pr-16 mb-16 font-18">Buzz on the Social Media</div>
                <div className="insta-row mb-16 card ml-16 mr-16">

                    <div className="row mt-4">
                        
                        <div className="col-1 ml-16">
                            <img src={instagramImage} alt="" />
                        </div>
                        <div className="col-8 ">
                            <h3>Instagram</h3>
                        </div>
                    </div>

                    <div className="pl-16 pr-16 mb-14">
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuRzJ5TZ6okVExV6yjHCwsZimWjNJuF4QXG46-z6DXhAZ8ECEzA&s" />
                        
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8YT3IBZDTOSqgSuSMiWcmMOZyqAnCTYG2RZs75XaYZITN4DOpA&s" />
                        
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6Hhoa-_reO2rBmwQmQppj8YGHdKw9wZr0Ffx6gR4TJERmIZR&s" />
                        
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrJiTirISGhWWO4Ndz_mJdCCWy-xw2F9k_wNWfg0KXM-PNfGf&s" />
                        
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYMZddWt2rf1_9M3MXYn3ZYmA3XfrdbqM8mgjESlHpJ4rBIrbZw&s" />
                        
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuRzJ5TZ6okVExV6yjHCwsZimWjNJuF4QXG46-z6DXhAZ8ECEzA&s" />
                        
                        
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8YT3IBZDTOSqgSuSMiWcmMOZyqAnCTYG2RZs75XaYZITN4DOpA&s" />
                        
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStOfNe3nRXTtnEFWraEEzMquVqgIQrR3STgNQotYwK55VE313&s" />
                        
                        <img className="instagramImage" alt="" variant="top" 
                        onClick={()=>this.props.toggleInsta()}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuRzJ5TZ6okVExV6yjHCwsZimWjNJuF4QXG46-z6DXhAZ8ECEzA&s" />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeBuzzOnSocialMedia
