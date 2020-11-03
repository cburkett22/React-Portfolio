import React, { useState } from "react";
import "./css/contact-style.css";
import Row from "../components/Row";
import Col from "../components/Col";

const sectionStyle = {
  paddingTop: "5%",
  paddingLeft: "15%",
  paddingRight: "15%"
};

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // const submitRequest = async (e) => {
  //   e.preventDefault();
  //   console.log({ name, email, subject, message });
  //   const response = await fetch("/send", {
  //     method: 'POST', 
  //     headers: { 
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json'
  //     }, 
  //     body: JSON.stringify({name, email, subject, message}) 
  //   });

  //   const resData = await response.json(); 
  //   if (resData.status === 'success') {
  //     alert("Message Sent."); 
  //     this.resetForm()
  //   } else if(resData.status === 'fail') {
  //     alert("Message failed to send.")
  //   }
  // }

  return (
    <div>
      <Row>
        <Col size="md-12">
          <section className="mb-4" style={ sectionStyle }>
            <h4 className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</h4>
            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" method="POST" action="send">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          onChange={ e => setName(e.target.value) }
                          value={ name }
                          required
                        />
                        <label htmlFor="name" className="">Your name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                          onChange={ e => setEmail(e.target.value) }
                          value={ email }
                          required
                        />
                        <label htmlFor="email" className="">Your email</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          onChange={ e => setSubject(e.target.value) }
                          value={ subject }
                          required
                        />
                        <label htmlFor="subject" className="">Subject</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea"
                          onChange={ e => setMessage(e.target.value) }
                          value={ message }
                          required
                        ></textarea>
                        <label htmlFor="message">Your message</label>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-md-left">
                    <button type="submit" id="submit-btn">Send</button>
                  </div>
                </form>
                <div className="status"></div>
              </div>

              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>3 Daffodil, Rancho Santa Margarita, CA 92688, USA</p>
                  </li>

                  <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>(281) 299-4049</p>
                  </li>

                  <li><i className="fas fa-envelope mt-4 fa-2x"></i>
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