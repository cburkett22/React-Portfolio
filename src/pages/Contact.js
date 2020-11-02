import React from "react";
import "./contact-style.css";
import Row from "../components/Row";
import Col from "../components/Col";

const sectionStyle = {
  paddingTop: "5%",
  paddingLeft: "15%",
  paddingRight: "15%"
};

function Contact() {
  return (
    <div>
      <Row>
        <Col size="md-12">
          <section class="mb-4" style={ sectionStyle }>
            <h4 class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</h4>
            <div class="row">
              <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" method="POST" action="send">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control" />
                        <label for="name" class="">Your name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" />
                        <label for="email" class="">Your email</label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" />
                        <label for="subject" class="">Subject</label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                      </div>
                    </div>
                  </div>

                  <div class="text-center text-md-left">
                    <button type="submit" id="submit-btn">Send</button>
                  </div>
                </form>
                <div class="status"></div>
              </div>

              <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
                  <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>3 Daffodil, Rancho Santa Margarita, CA 92688, USA</p>
                  </li>

                  <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>(281) 299-4049</p>
                  </li>

                  <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>Coreyburkett22@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;