import React, { Component } from "react";
import ReactDOM from "react-dom";
import DownArrow from "../../assets/Jaypore Assets/01 Icons/01 Login Signup/Dropdown Arrow.svg";
import Search from "../../assets/Jaypore Assets/01 Icons/08 Header & Footer/Search.svg";
import close from "../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg";

import "../../assets/css/category_navigation.css";

export default class CategoryNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sarees: false,
      topwear: false,
      silver: false,
      fashion: false,
      category: "",
      data: {
        Clothing: [
          {
            name: "Saree",
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              },
              {
                name: "Printed",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/m/rmnsaj50031961-1_1.jpg"
              },
              {
                name: "Embroided",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/d/idhsaj50032820-1_3.jpg"
              },
              {
                name: "Specials",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/d/rdnsaj50032018-1_1.jpg"
              },
              {
                name: "Veiw All Sarees",
                url:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvH_v2DzFSITVoBhQ0K1SMFaJQiOVc6clTHR3DQ--Z7si3fR_M"
              }
            ],
          },
          {
            name: "Printed",

            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/m/rmnsaj50031961-1_1.jpg"
          },
          {
            name: "Embroided",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/d/idhsaj50032820-1_3.jpg"
          },
          {
            name: "Specials",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/d/rdnsaj50032018-1_1.jpg"
          },
          {
            name: "Veiw All Sarees",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvH_v2DzFSITVoBhQ0K1SMFaJQiOVc6clTHR3DQ--Z7si3fR_M"
          }
        ],
        Jewelry: [
          {
            name: "Kurtas",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://i.pinimg.com/originals/d1/55/c5/d155c5531c35a211cb67a6ded375a0fa.jpg"
          },
          {
            name: "Tunics",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/a/sawapj20012622-1_3.jpg"
          },
          {
            name: "Blouses",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/rodapj20006850-1_1.jpg"
          },
          {
            name: "Dresses",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/d/rdnsaj50032018-1_1.jpg"
          },
          {
            name: "Tops",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/d/rdnsaj50032018-1_1.jpg"
          },
          {
            name: "Kaltans",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/d/rdnsaj50032018-1_1.jpg"
          },
          {
            name: "Shrugs",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/d/rdnsaj50032018-1_1.jpg"
          },
          {
            name: "Veiw All Sarees",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvH_v2DzFSITVoBhQ0K1SMFaJQiOVc6clTHR3DQ--Z7si3fR_M"
          }
        ],
        Accessories: [
          {
            name: "Woven",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
          },
          {
            name: "Printed",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/m/rmnsaj50031961-1_1.jpg"
          },
          {
            name: "Embroided",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/d/idhsaj50032820-1_3.jpg"
          },
          {
            name: "Specials",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/d/rdnsaj50032018-1_1.jpg"
          },
          {
            name: "Veiw All Sarees",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvH_v2DzFSITVoBhQ0K1SMFaJQiOVc6clTHR3DQ--Z7si3fR_M"
          }
        ],
        "Home Decor": [
          {
            name: "Earrings",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://i.pinimg.com/736x/d1/0e/cb/d10ecb5f64d25eb43f64ee4404b48354.jpg"
          },
          {
            name: "Necklaces & Pendants",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://i.pinimg.com/originals/d9/59/f8/d959f81aed95dfa6d4a65c6d5ec309b2.jpg"
          },
          {
            name: "Cuffs / Bracelets  / Bangles",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://i.pinimg.com/originals/0b/39/4e/0b394e336fadee7d40b9b3426f477244.jpg"
          },
          {
            name: "Rings",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/o/joajwf30017619-1_1.jpg"
          },
          {
            name: "Nose Pins",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://s4.scoopwhoop.com/anj/eyhtdgb/ae1554b5-d4da-415c-9c3b-2a54dcf7a318.jpg"
          },
          {
            name: "Silver Accessories",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/04/25110643/Jaypore-3.jpg"
          }
        ],
        "Event": [
          {
            name: "Fluff Sleaves",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/a/sawapj20012622-1_3.jpg"
          },
          {
            name: "Long",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://i.pinimg.com/originals/f6/6d/21/f66d2157f622afdf5b6b2805e4d88376.jpg"
          },
          {
            name: "Silk",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/t/r/traapj40013475-1_3.jpg"
          },

          {
            name: "View All Tops",
            children: [
              {
                name: "Woven",
                url:
                  "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/d/sddsaj50032176-1_2.jpg"
              }],
            url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvH_v2DzFSITVoBhQ0K1SMFaJQiOVc6clTHR3DQ--Z7si3fR_M"
          }
        ]
      },

    };
  }


  _routeToListingPage = (data) => {
    console.log(data)
    let page = '';
    switch (data) {
      case "Clothing":
        page='all'
        break;
      case "Jewelry":
        page='simple'
        break;
      case "Accessories":
        page='cover'
        break;
      case "Home Decor":
        page='promo'
        break;
      case "Event":
        page='event'
        break;
      default:
        page='all'
        break;
    }
    this.props.history.push({
      pathname:'/productListing',
      state:page
    })
  }

  onChangeTab = (data) => {
    this.setState({
      category: data
    })
  }

  componentDidMount() {
    console.log("ssss", this.props.location.state.category);
    this.setState({ category: this.props.location.state.category });
  }

  changeNav = category => {
    this.setState({ category });
  };

  render() {
    let categories_tabs_value = Object.keys(this.state.data)
    return (
      <div>
        <div className="container-div border-grey  right-center">
          <div className="a-height-56 row-bwt-div  white-back-color p-13">
            <img
              src={close}
              alt=""
              width="32px"
              height="32px"
              className="a-icon-back"
              onClick={() => this.props.history.goBack()}
            />
            <div className="m-t-2 font-18 All-categories font-bold">
              All Categories
            </div>
            <img
              src={Search}
              alt=""
              width="32px"
              height="32px"
              className="a-icon-back"
              onClick={() => this.props.history.goBack()}
            />
          </div>
        </div>

        <div class="cat-tabs ">

          {
            categories_tabs_value.map((item, index) => (
              <div class="cat-tab" key={index} onClick={() => this.onChangeTab(item)}>
                <input name='category-tab' id={item} type="radio"
                  checked={this.state.category === item ? true : false} />
                <label for={item}>{item}</label>
                <div class="content">
                  {
                    this.state.data[item].map((catItem, i) => (
                      <CategoryItem data={catItem} key={i} 
                      _routeToListingPage={()=>this._routeToListingPage(item)}
                      name={item}
                      />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}


class CategoryItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  _gotoListing(){
    this.props._routeToListingPage()
  }

  _renderSubItem() {
    let sub_item = [];
    let  Listingname=this.props.name;
    if (this.props.data.children) {
      this.props.data.children.map((item, i) => {
        sub_item.push(
          <div className='category-sel' onClick={()=>this._gotoListing()}>
            <img src={item.url} className='category-img' />
            <div className='category-name m-txt colr-21'>{item.name}</div>
          </div>
        )
      })
    }
    return sub_item;
  }

  render() {
    return (
      <div>
        <div className={this.state.isOpen ? 'category-sel' : 'category-item'} onClick={() => this.toggleOpen()}>
          <img src={this.props.data.url} className='category-img' />
          <div className='category-name m-txt colr-21'>{this.props.data.name}</div>
          <img src={DownArrow} className={this.state.isOpen ? 'arrow-category rot-180' : 'arrow-category'} />
        </div>
        <div className={this.state.isOpen ? '' : 'd-none'}>
          {this._renderSubItem()}
        </div>
      </div>
    )
  }
}
