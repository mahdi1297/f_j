import React from "react";
import { Col, Container } from "reactstrap";
import Search from "../search";
import HeroHome from "./components/hero";
import WhyUs from "./components/why-us";

const Home = () => {
  return (
    <div className="w-100">
      <HeroHome />
      <div>
        <Search />
      </div>
      <Container style={{ background: "#f8f9fa" }} fluid={true}>
        <Col xl="12">
          <WhyUs />
        </Col>
      </Container>
    </div>
  );
};

export default Home;
