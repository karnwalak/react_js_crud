import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="py-4">
          <div className="row justify-content-center">
          <div className="col-md-6">
          <h1>Contact Page</h1>

          <form className="row g-3">
          <div className="row justify-content-end">
          <Link to="/" className="btn btn-success col-1">Back</Link>
          </div>
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="+91-0000000000"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                Message
              </label>
              <textarea  type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Type your message...">
                </textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
