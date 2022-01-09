import React, { Component } from "react";
import nameAction from "../Actions/Name";
class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }
  callNameAction = () => {
    alert(this.state.name);
    nameAction(this.state.name);
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card=body">
                <input
                  type="text"
                  placeholder="Enter name"
                  onChange={(event) => {
                    this.setState({
                      name: event.target.value,
                    });
                  }}
                />
                <button
                  className="btn btn-primary px-3"
                  onClick={this.callNameAction}
                >
                  Display
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Name;
