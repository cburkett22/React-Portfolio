import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => {
  return (
    <div>
      <Hero backgroundImage="../img/background.JPG">
        <h1>Corey Burkett</h1>
        <h2>Full-Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Full-Stack Web Developer who attended the University of California, Irvine Coding Boot Camp.
                Full-time student pursuing a Bachelor's degree in Business Administration with a Concentration in
                Information Systems.
            </p>
            <p>
            Served 4 years in the United States Marine Corps with two deployments as
                a Rifleman with 2nd Battalion, 4th Marines at Camp Pendleton, California.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
