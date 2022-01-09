import React, { Component, createRef } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();

    this.state = {
      name: "",
    }
  }
  updateData = () => {
    this.setState({
      name: this.inputRef.current.value,
    });
  };
  render() {
    return (
      <div classname="Container mt-5">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h2>login Form</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <input
                    ref={this.inputRef}
                    type="text"
                    className="form-control"
                  />
                </div>
                <button
                  className="btn btn-danger px-5 mt-2"
                  onClick={this.updateData}
                >
                  Login
                </button>
              </div>
              <div className="card-footer">
                <span>{this.state.name}</span>
              </div>
            </div>
          </div>
          <div className="cols-sm-4"></div>
        </div>
      </div>
    );
  }
}
export default Form;
