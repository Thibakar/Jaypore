import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../megamenu/megaMenu.css";
export default class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredbrands: [
        { name: "Anan" },
        { name: "Rangasutra" },
        { name: "Bandhej" },
        { name: "Avaran" }
      ],
      Women: [
        {
          name: "Kurtas"
        },
        { name: "Tunics" },
        { name: "Tops" },
        { name: "Blouses" },
        { name: "Tops" },
        { name: "Dresses" },
        { name: "Kaaftans" },
        { name: "Jackets" },
        { name: "Shrugs" }
      ],
      Sarees: [
        {
          name: "Woven"
        },
        { name: "Printed" },
        { name: "Embroidered" },
        { name: "Specials" }
      ],
      Men: [
        {
          name: "Shirts"
        },
        { name: "Kurtas" },
        { name: "Jackets" },
        { name: "Pants" },
        { name: "Trousers" }
      ],
      Kids: [
        {
          name: "Dresses and Jumsuits"
        },
        { name: "Tops" },
        { name: "Shirts" },
        { name: "Indian Wear" },
        { name: "NightWear" },
        { name: "Skrits" },
        { name: "Pants" }
      ],
      Imgurl: [
        {
          url:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/p/k/pkosaj50040869-1_4.jpg",
          name: "SAREES"
        },
        {
          url:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/m/d/mdaapj40014742-4_1.jpg",
          name: "KURTAS"
        },
        {
          url:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/m/r/mriapj40014634-4_1.jpg",
          name: "DRESSES"
        },
        {
          url:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/i/d/idsapj50039018-4_1.jpg",
          name: "BLOUSES"
        }
      ],

      url1:
        "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/a/sawsaj50038160-2_2.jpg",
      url2:
        "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/w/e/wexjwf30028791-1_1.jpg",
      url3:
        "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/i/ritacb40014652-1.jpg",
      url4:
        "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/h/h/hhihoj80068581-1_2.jpg"
    };
  }

  render() {
    return (
      <div className="container ">
        <div className=" bg-light-pink">
          <div className="row over-flow">
            <div className="col-md-7">
              <div className="row" >
                <div className="col-md-4 bg-white  ">
                  <div className=" row padding-menubar  menubar bg-light-pink ">
                    <Link to="/categoryListing">
                      <div className=" text-212121 a-sb-txt font-size-14 d-flex ">
                        <img
                          className="image-fit"
                          src={this.state.url1}
                          alt=""
                        />
                        <span className="font-size-16  a-sb-txt p-l-10 p-t-15 ">
                          CLOTHING
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className=" row padding-menubar menubar ">
                    <Link to="/eventListing">
                      <div className=" text-212121 a-sb-txt font-size-14 d-flex ">
                        <img
                          className="image-fit"
                          src={this.state.url2}
                          alt=""
                        />
                        <span className="font-size-16  a-sb-txt p-l-10 p-t-15 ">
                          JEWELRY
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className=" row padding-menubar menubar ">
                    <Link to="/brandListing">
                      <div className=" text-212121 a-sb-txt font-size-14 d-flex ">
                        <img
                          className="image-fit"
                          src={this.state.url3}
                          alt=""
                        />
                        <span className="font-size-16 a-sb-txt p-l-10 p-t-15 ">
                          ACCESORIES
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="row padding-menubar menubar ">
                    <Link to="/searchListing">
                      <div className=" text-212121 a-sb-txt font-size-14 d-flex ">
                        <img
                          className="image-fit"
                          src={this.state.url4}
                          alt=""
                        />
                        <span className="font-size-16  a-sb-txt p-l-10 p-t-15 ">
                          HOME & ART
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* <div className="over-flow"> */}
                <div className="col-md-4  background-color-pink p-l-9 ">
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22  p-b-16 a-sb-txt">
                      FEATURED BRANDS
                    </div>
                    {this.state.featuredbrands.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/brandListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      WOMEN
                    </div>
                    {this.state.Women.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-4  background-color-pink p-l-9">
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      SAREES
                    </div>
                    {this.state.Sarees.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      MEN
                    </div>
                    {this.state.Men.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      KIDS
                    </div>
                    {this.state.Kids.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="col-md-5 background-color-pink  ">
              <div className="image-border m-t-23">
                <div className="flex">
                  {this.state.Imgurl.map(i => (
                    <div>
                      <img className="image-size p-r-8" src={i.url} alt="" />
                      <div className="image-name">{i.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
