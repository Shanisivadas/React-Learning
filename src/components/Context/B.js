import React, { Component } from "react";
import C from "./C";
class B extends Component {
  constructor(props) {
    super(props);

    this.state={

    }
  }

  render() {
    return (
      <div classname="container mt-5">
        <div classname="row">
          <div className="col">
            <div className=" card-header bg-dark text-white">
              <h2> B Component</h2>
            </div>
            <div classname="card-body">
                <C/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default B;
