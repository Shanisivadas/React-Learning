import React, { Component, createRef } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.firstRef = createRef();
    this.lastRef = createRef();
    this.emailRef = createRef();
    this.genderRef = createRef();
    // this.femaleRef = createRef();
    this.addRef = createRef();

    this.state = {
      fname: "",
      lname: "",
      email: "",
      address: "",
    };
  }
  updateRadio = (e) => {
    console.log(e.target.value);
    this.genderRef.current.value = e.target.value;
    //this.setState({
    //    gender:e.target.value
    // male: this.maleRef.current.value,
    //  female: this.femaleRef.current.value,
    //})
  };
  updateData = () => {
    this.setState({
      fname: this.firstRef.current.value,
      lname: this.lastRef.current.value,
      email: this.emailRef.current.value,
      gender: this.genderRef.current.value,
      address: this.addRef.current.value,
    });
  };

  render() {
    return (
      <div classname="container mt-5">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h2>Registration Form</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <input
                    ref={this.firstRef}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div classname="form-group">
                  <input
                    ref={this.lastRef}
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div classname="form-group">
                  <input
                    ref={this.emailRef}
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-check">
                  <input
                    ref={this.genderRef}
                    type="radio"
                    className="form-check-input"
                    value="Male"
                    name="gender"
                    onChange={this.updateRadio}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    ref={this.genderRef}
                    type="radio"
                    className="form-check-input "
                    value="Female"
                    name="gender"
                    onChange={this.updateRadio}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Female
                  </label>
                </div>
                <div>
                  <textarea
                    ref={this.addRef}
                    class="form-control"
                    rows="3"
                    placeholder="Address"
                  ></textarea>
                </div>
                <button
                  className="btn btn-danger px-5 mt-2"
                  onClick={this.updateData}
                >
                  Register
                </button>
              </div>
              <div className="card-footer">
                <span>{this.state.fname}</span>
                <span>{this.state.lname}</span>
                <br />
                <span>{this.state.email}</span>
                <br />
                <span>{this.state.gender}</span>
                <br />
                <span>{this.state.address}</span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    );
  }
}

export default Register;
