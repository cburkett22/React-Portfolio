import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";

// Importing project images
import PitchitImg from "../img/pitchit.jpg";
import BurgerImg from "../img/burger.jpg";
import EmployeeTrackerImg from "../img/emptracker.png";

const Projects = () => {
    return (
      <div>
        <Row>
          <Col size="md-12">
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-4 wow fadeInLeftBig">
                  <div className="card h-100">
                      <div className="view overlay">
                          <img className="card-img-top" src={ PitchitImg } alt="PitchIT application screenshot" />
                          <a href="https://pitchitadventures.herokuapp.com"  target="_blank" rel="noopener noreferrer">
                              <div className="mask rgba-white-slight"></div>
                          </a>
                      </div>
                      <div className="card-body">
                          <h4 className="card-title">PitchIT Adventures</h4>
                          <p className="card-text">Here is a group application that will allow like-minded outdoors-men and women to plan unique trips with their friends. The main dependencies used were Express, Handlebars, MySQL, Node Mailer, Firebase, and Sequelize.</p>
                          <button id="card-one-btn" type="button" className="btn btn-blue btn-md">Visit App</button>
                      </div>
                  </div>
              </div>

              <div className="col mb-4 wow jackInTheBox">
                  <div className="card h-100">
                      <div className="view overlay">
                          <img className="card-img-top" src={ BurgerImg } alt="Burger Logger application screenshot" />
                          <a href="https://yummy-burger-logger.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                              <div className="mask rgba-white-slight"></div>
                          </a>
                      </div>
                      <div className="card-body">
                          <h4 className="card-title">Burger Logger</h4>
                          <p className="card-text">This application will allow the user to devour the burgers they have added. This application utilizes the MVC design pattern. In order to achieve this, Node and MySQL are used to query and route data in the application, and Handlebars to generate the HTML.</p>
                          <button id="card-two-btn" type="button" className="btn btn-blue btn-md">Visit App</button>
                      </div>
                  </div>
              </div>

              <div className="col mb-4 wow fadeInRightBig">
                <div className="card h-100">
                  <div className="view overlay">
                    <img className="card-img-top" src={ EmployeeTrackerImg } alt="Employee Tracker application screenshot" />
                      <a href="https://github.com/cburkett22/12-Employee-Tracker" target="_blank" rel="noopener noreferrer">
                        <div className="mask rgba-white-slight"></div>
                      </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">CLI Employee Tracker</h4>
                    <p className="card-text">This application will allow a company to view, add, remove, and update their employees all in one location. In order to achieve this, I utilized Express.js, inquirer, and MySQL to save user input.</p>
                    <button id="card-three-btn" type="button" className="btn btn-blue btn-md">Visit App</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
}

export default Projects;
