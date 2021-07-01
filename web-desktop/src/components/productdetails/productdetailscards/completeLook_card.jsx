import React, { Component } from 'react';
import favicon from "../../../assets/01 Icons/02 Home Page/Wishlist.svg"
class Completelookcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSet: [
            {
              imgurl:
                "https://static.jaypore.com/media/events/307X363/191211YAT012_YAT_YTity_RELAUNCH_moodshot.jpg",
              name: "JAYPORE",
              color: "Ivory-Blue Handsome Cotton",
              rupess: "Rs. 2290",
              
            },
            {
              imgurl:
                "https://static.jaypore.com/media/events/307X363/200109EKY008_Ekaya_RustCollection_moodshotU.jpg",
              name: "JAYPORE",
              color: "Ivory-Blue Handsome Cotton",
              rupess: "Rs. 2290",
              
            },
            {
              imgurl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwnsdecShxDajwLfvcoRIYfL_7ajxpmq0YaR9hGYKXusOoPs6o",
              name: "JAYPORE",
              color: "Ivory-Blue Handsome Cotton",
              rupess: "Rs. 2290",
                          },
            {
              imgurl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwnsdecShxDajwLfvcoRIYfL_7ajxpmq0YaR9hGYKXusOoPs6o",
              name: "JAYPORE",
              color: "Ivory-Blue Handsome Cotton",
              rupess: "Rs. 2290",
              
            
            },
           
          ]
        };
      }
    
      render() {
        return (
          <React.Fragment>
            <div class="flex">
              {this.state.dataSet.map(i => (
                <div className=" complete-look-card">
                  <div>
                    <img
                      className=" complete-look-favicon category-fav-icon cu-ptr"
                      src={favicon}
                      alt="fav-icon"
                    />
                    {/* <img
                      className="category-similar-icon"
                      src={similaricon} 
                      alt="similar-icon"
                    />
                    <img
                      className="category-readytoship-icon"
                      src={readyToShip}
                      alt="readytoship-icon"
                    /> */}
                    <img
                      className="complete-card-images "
                      src={i.imgurl}
                      alt="category-listing-card"
                    />
                  </div>
                  <div>
                    <h6 className=" dress-name a-14-txt semiBold ">{i.name}</h6>
                    <p className=" clr-name  category-dress-color a-14-txt regular">{i.color}</p>
                    <div className="row ">
                      <p className=" dress-rate a-14-txt semiBold">{i.rupess} </p>
                      {/* <span className="offer a-14-txt regular">{i.offer}</span> */}
                      {/* <span className="offer-label"> 30% OFF</span> */}
                    </div>
                    <p className="size">{i.size}</p>
                    <button  className="add-bag" type="button">Add to bag</button>
                  </div>
                </div>
              ))}
            </div>
            </React.Fragment>
        );
    }
}


export default Completelookcard;