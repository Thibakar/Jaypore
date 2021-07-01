import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../megamenu/megaMenu.css";
export default class JayporeLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Collection: [
        { name: "Kurta Crush" },
        { name: "Under The Moonlight" },
        { name: "Like A Summer Breeze" },
        { name: "Gold Kissed Silver" },
        { name: "Every Day Effortless" },
        { name: "Gem Of A Find" },
        { name: "The Blouse Project:Tie Dye And Block" },
        { name: "Print Edit" },
        { name: "The Embroidery Edit" },
        { name: "For The Love Of Juttis" },
        { name: "The Bhag Chronicles" },
        { name: "Treat Your Feet" },
        { name: "Flatter In Faddat" },
        { name: "Earthy Notes" },
        { name: "The Blouse Project:Ikat Edit" },
        { name: "Spring Lyric" }
      ],
      footwear: [{ name: "Juttis/Mojris" }, { name: "Shoes/Heels" }],
      wellness: [{ name: "Bath & Body" }],
      summerSale: [
        { name: "Upto 30% Off" },
        { name: "Upto 40% Off" },
        { name: "Upto 50% Off" }
      ],
      topPicks: [{ name: "" }],
      socialMediaChic: [{ name: "" }],
      madeToMixAndMatch: [
        { name: "Brunching Vibes" },
        { name: "Traditional Twist" },
        { name: "Burst Of Brights" },
        { name: "Asymmetric Artistry" }
      ],
      outfitAlert: [
        { name: "Moon Beams And Starlight " },
        { name: "She's A Free Spirit" },
        { name: "Under The Sun" },
        { name: "Girl On The Go" }
      ],
      onOurItList: [{ name: "" }],
      summerCoolers: [
        { name: "Strawberry Slush" },
        { name: "Pina Colada" },
        { name: "Mint Julep" },
        { name: "Blue Curacao" },
        { name: "Tequilla Sunrise" }
      ],

      Sarees: [
        {
          name: "Woven"
        },
        { name: "Printed" },
        { name: "Embroidered" },
        { name: "Specials" }
      ],
      clothing: [
        { name: "Kurtas" },
        { name: "Tunics" },
        { name: "Blouses" },
        { name: "Tops" },
        { name: "Dresses" },
        { name: "Kaaftans" },
        { name: "Apparel-Fabric" },
        { name: "Shrugs" },
        { name: "Pallazos" },
        { name: "Churidar" },
        { name: "Pants" }
      ],
      homedecor: [
        {
          name: "Decorative Trays And Boxes"
        },
        { name: "Picture Frames" },
        { name: "Vases" },
        { name: "Tabletop Accessories" }
      ],
      dualToneSiverCuration: [
        {
          name: "To Mom With Love"
        },
        { name: "Six Yard Surprises" },
        { name: "Flowy Seperated" },
        { name: "Tabletop Accessories" }
      ],
      happyNoPantsDay: [
        {
          name: "BrightDresses"
        },
        { name: "Vivacious Weaves" },
        { name: "Silver Chic" },
        { name: "Embellisheded Juttis" }
      ],
      SareesAndPearls: [
        {
          name: "Jewelry"
        },
        { name: "Sarees" }
      ],
      thePackingList: [
        {
          name: "The Glamping Goddess"
        },
        { name: "The Beach Bum" },
        { name: "The City Sliker" },
        { name: "The Culture Vulture" }
      ],
      thePackingList1: [
        {
          name: "Honey And Indigo"
        },
        { name: "Coffee Date Chic" },
        { name: "Sun-Kissed Sunday" },
        { name: "Elegant Evening" }
      ],
      silverJewelry: [
        { name: "Earrings" },
        { name: "Necklaces & Pendants" },
        { name: "Cuffs/Bracelets/Bangles" },
        { name: "Rings" },
        { name: "Nose Pins" },
        { name: "Silver Accessories" }
      ],
      scarvesAndStoles: [
        { name: " Printed Stoles" },
        { name: "Embroidered Stoles" },
        { name: " Mufflers Stoles" },
        { name: "Woolen Stoles" },
        { name: "Special Stoles" }
      ],
      shawls: [{ name: "Woven Shawls" }, { name: "Special Shawls" }],
      livingSpaces: [
        { name: "Bedcovers" },
        { name: "Cushions" },
        { name: "Curtains" },
        { name: "Throws, Quilts and Dohars" },
        { name: " Carpets & Rugs" },
        { name: "Fabric By The Meter" },
        { name: "Kids" }
      ],
      theAffordatbleLuxuryEdit: [
        { name: "Ornamental Whimsies" },
        { name: "Extravagant Weaves" }
      ],
      feelingThatHeat: [
        { name: "Traditional Chic" },
        { anme: "Silver Linings" },
        { name: "Curtains" },
        { name: "The Trendsetters" }
      ],
      bestlovedBestSellers: [{ name: "" }],
      summersgreatesthits: [{ name: "" }],
      oneofourkind: [{ name: "" }],
      inYourSummerWadrobe: [
        { name: "A White Cotton Kurta" },
        { name: "Beads, Coins & Mixed" },
        { name: "Metals" },
        { name: "Every Thing But Florals" }
      ],
      AStitchOfSublime: [
        {
          name: "Jewelry Apparel"
        }
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
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex bg-light-pink">
          <div className="flex">
            <div className="col-md-7">
              <div className="row">
                {/* =============================================================================================================== */}
                <div className="col-md-4  background-color-pink p-l-3 ">
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      COLLECTION
                    </div>
                    {this.state.Collection.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      FOOTWEAR
                    </div>
                    {this.state.footwear.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      WELLNESS
                    </div>
                    {this.state.wellness.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 color-red m-t-22 a-sb-txt p-b-16 ">
                      SUMMER SALE
                    </div>
                    {this.state.summerSale.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      TOP PICKS
                    </div>
                    {this.state.topPicks.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      SOCIAL MEDIA CHIC
                    </div>
                    {this.state.socialMediaChic.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      MADE TO MIX AND MATCH
                    </div>
                    {this.state.madeToMixAndMatch.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      OUTFIT ALERT
                    </div>
                    {this.state.outfitAlert.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      ON OUR IT LIST
                    </div>
                    {this.state.onOurItList.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 m-t-22 a-sb-txt p-b-16 ">
                      SUMMER COOLERS
                    </div>
                    {this.state.summerCoolers.map(i => (
                      <div className="font-14  p-b-16  a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                {/* ================================================================================================================================ */}
                <div className="col-md-4 width-268 background-color-pink p-l-3">
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
                      CLOTHING
                    </div>
                    {this.state.clothing.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      HOME & DECOR
                    </div>
                    {this.state.homedecor.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      DUAL TONE SILVER CURATION
                    </div>
                    {this.state.dualToneSiverCuration.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      HAPPY NO PANTS DAY
                    </div>
                    {this.state.happyNoPantsDay.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      SAREES & PEARLS
                    </div>
                    {this.state.SareesAndPearls.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      THE PACKING LIST
                    </div>
                    {this.state.thePackingList.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      THE PACKING LIST
                    </div>
                    {this.state.thePackingList1.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                {/* =========================================================================================================================================================== */}
                <div className="col-md-4 width-268 background-color-pink p-l-3">
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      SILVER JEWELRY
                    </div>
                    {this.state.silverJewelry.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      SCARVES AND STOLES
                    </div>
                    {this.state.scarvesAndStoles.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      SHAWLS
                    </div>
                    {this.state.shawls.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      LIVING SPACES
                    </div>
                    {this.state.livingSpaces.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      THE AFFORDABLE LUXURY EDITS
                    </div>
                    {this.state.theAffordatbleLuxuryEdit.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      FEELING THE HEAT?
                    </div>
                    {this.state.feelingThatHeat.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16 a-sb-txt">
                      BEST LOVED BEST SELLERS
                    </div>
                    {this.state.bestlovedBestSellers.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      SUMMER'S GREATEST HITS
                    </div>
                    {this.state.summersgreatesthits.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      ONE OF A KIND
                    </div>
                    {this.state.oneofourkind.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      IN YOUR SUMMER WADROBE
                    </div>
                    {this.state.inYourSummerWadrobe.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 text-212121 p-b-16  m-t-22 a-sb-txt">
                      A STITCH OF SUBLIME
                    </div>
                    {this.state.AStitchOfSublime.map(i => (
                      <div className="font-14 text-212121 p-b-16 a-r-txt">
                        <Link className="text-212121" to="/categoryListing">
                          {i.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="p-b-32">
                    <div className="font-size-18 color-red text-212121 p-b-16  m-t-22 a-sb-txt">
                      OUR SALE FAVOURITES
                    </div>

                    {/* <div className="font-14 text-212121 p-b-16 a-r-txt">
            <Link className="text-212121" to="/categoryListing">
              {i.name}
            </Link>
          </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* =========================================================================================================================================================== */}
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
