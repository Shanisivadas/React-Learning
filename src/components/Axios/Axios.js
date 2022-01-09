import React, { Component } from "react";
import axios from "axios";

class Axios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData:[],
    }
  }

  getData = () => {
  //  alert("working");
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        this.setState({
          userData: res.data,
        });
      },
      () => {
        alert("Error while fetching the data");
      }
    );
  }

  render()
   {
    return (
      <div>
        <div className="container mt-5">
          <div className="row ">
            <div classname="col">
              <h2 classname="text-primary">Welcome to Axios </h2>
              <p className="lead">
                lorem50Sit laborum ullamco cillum excepteur anim est dolor anim
                mollit commodo ea elit culpa amet. Consequat ipsum nostrud
                consectetur culpa minim aute nisi dolor aute ad cillum mollit
                aliqua. Voluptate laborum sint sint occaecat. Consequat enim
                nisi do dolor consequat eu aute. Excepteur elit commodo ad ut
                tempor culpa veniam. Commodo anim mollit ipsum proident
                excepteur laboris cillum nulla minim eu voluptate velit id.
              </p>
              <button className="btn btn-primary" onClick={this.getData}>
                Get Data
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div classname="row">
            <div className="col">
              <table className="table table-hover">
                <tr className="bg-dark text-white">
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>CITY</th>
                  <th>COMPANY NAME</th>
                </tr>
                {
               this.state.userData.map((element,index)=>{
                  return<tr>
                      <td>{element.id}</td>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.address.city}</td>
                      <td>{element.company.name}</td>
                  </tr>
                  })
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Axios;