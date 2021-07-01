import React, { Component } from "react";
import MainCarousel from "../../carousels/mainCarousel";
import FlexContainer from "../../flexcontainer/flexContainer";
import BestSellingCard from "../../cards/bestSellingCard";
import { Container, Row, Col, Nav, Button, Navbar } from "react-bootstrap";
import BestSellingCarousel from "../../carousels/bestSellingCarousel";
import MostRecentCard from "../../cards/mostRecentCard";
import NewArrivalCarousel from "../../carousels/newArrivalCarousel";
import RecomendedCard from "../../cards/recomendedCard";
import RecommendedCarousel from "../../carousels/recommendedCarousel";
import PopularCategoriescard from "../../cards/popularCategoriescard";
import AllOtherCard from "../../cards/allOtherCard";
import BestSellerCarousel from "../../carousels/bestSellersCarousel";
import InstagramCard from "../../cards/instagramCard";
import FascinatingPinsCard from "../../cards/fascinatingPinscard";
import HappyCustomersCard from "../../cards/happyCustomersCard";
import Footer from "../../shared/footer/footer";
import pic from "../../../../../public/jfavicon.ico";
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-carousel">
          <MainCarousel />
        </div>
        <div className="bg-Pink  m-t-20">
          {/*************************flex-container********* */}
          <div className=" horizontal-Middle bg-White home-container">
            <FlexContainer />
          </div>

          {/*************************best--selllling  ******************************/}
          <div className="bg-white">
            <Container>
              <div>
                <Navbar className="bg-white" expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#home">Best sellling Curations</Nav.Link>
                      <Nav.Link href="#link">Most Recent Curations</Nav.Link>
                      <Nav.Link href="#link">Recommended Curations</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>

              <BestSellingCard />
              <div className="m-t-20">
                <Row>
                  <Col md="6">
                    <BestSellingCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                  <Col md="6">
                    <BestSellingCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                </Row>
              </div>
              {/******************** best--sellling***** */}
              <BestSellingCard />
              <div className="m-t-20">
                <Row>
                  <Col md="6" sm="12">
                    <BestSellingCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                  <Col md="6" sm="12">
                    <BestSellingCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/************************* best--sellling***** */}
            <div className="bg-white">
              <Container>
                <BestSellingCard />
                <div className="m-t-20">
                  <Row>
                    <Col md="6" sm="12">
                      <BestSellingCarousel />
                      <div className="m-t-10">
                        <Button variant="outline-danger">View All</Button>
                      </div>
                    </Col>
                    <Col md="6" sm="12">
                      <BestSellingCarousel />
                      <div className="m-t-10">
                        <Button variant="outline-danger">View All</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </div>
          <div className="division bg-pink"></div>
          {/*****************most Recent **************** */}

          <div className="bg-white ">
            <Container>
              <h5>Most Recent Curation</h5>
              <MostRecentCard />
            </Container>
          </div>
          <div className="division bg-pink"></div>
          {/**************** new arrival***************** */}
          <div className=" bg-white ">
            <Container>
              <h5>New Arrivals</h5>
              <Row>
                <NewArrivalCarousel />
              </Row>
            </Container>
          </div>
          <div className="division bg-pink"></div>
          {/***************************** Recommended Curations**************/}
          <div className="bg-white">
            <Container>
              <h5>Recommended Curations</h5>
              <RecomendedCard />
              <div className="m-t-20">
                <Row>
                  <Col md="6">
                    <RecommendedCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                  <Col md="6">
                    <RecommendedCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                </Row>
              </div>
              {/*************************************recommended curations************* */}
              <RecomendedCard />
              <div className="m-t-20">
                <Row>
                  <Col md="6">
                    <RecommendedCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                  <Col md="6">
                    <RecommendedCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                </Row>
              </div>
              {/*************************************recommended curations************* */}
              <RecomendedCard />
              <div className="m-t-20 m-b-20">
                <Row>
                  <Col md="6">
                    <RecommendedCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                  <Col md="6">
                    <RecommendedCarousel />
                    <div className="m-t-10">
                      <Button variant="outline-danger">View All</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          {/******************************** popular Categories********************* */}
          <div className=" m-t-30 m-b-20">
            <Container>
              <h5>Popular Categories</h5>
              <Row>
                <Col>
                  <PopularCategoriescard />
                </Col>
                <Col>
                  <PopularCategoriescard />
                </Col>
                <Col>
                  <PopularCategoriescard />
                </Col>
                <Col>
                  <PopularCategoriescard />
                </Col>
              </Row>
            </Container>
          </div>

          {/***************************All Other Curations*************************************** */}
          <div className="bg-white">
            <Container>
              <div className="m-t-30 m-b-20">
                <h5>All Other Curations</h5>
                <AllOtherCard />
                <div className="m-t-20">
                  <Button variant="outline-danger">View All</Button>
                </div>
              </div>
            </Container>
          </div>
          <div className="division bg-pink"></div>

          {/*****************************best seller******************************/}
          <div className="bg-white">
            <Container>
              <div className="m-t-30 m-b-20">
                <h5>Best Sellers</h5>
                <BestSellerCarousel />
              </div>
            </Container>
          </div>
          <div className="division bg-pink"></div>
          {/****************************social Network************************* */}
          <div className="bg-white">
            <Container>
              <div className="m-t-30">
<Row>
              <img
                className="whats-happen-img"
                src={pic}
                alt="customer-img"
              />

                
                <h4 className="p-l-20">What's been happenning at Japore!</h4>
                </Row>
                <div className="m-t-10 m-b-30">
                  <Row>
                    <Col md="8">
                      <InstagramCard />
                    </Col>
                    <Col md="4">
                      <FascinatingPinsCard />
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </div>
          <div className="division bg-pink"></div>
          {/****************************Happy customers************************* */}

<div className="bg-white">
<Container>
              <div className="m-t-30 m-b-20">
                <h5>Happy Customers</h5>
                <div>
                  <HappyCustomersCard/>
                </div>
                </div>
                </Container>
  
  </div>    
  {/***********************footer********************* */} 

<div className="bg-pink">
 
    <div className="m-t-20 m-b-20">
      <Footer/>
    </div>
  
</div>




        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
