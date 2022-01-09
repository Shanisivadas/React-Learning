import React from "react";
import studentDetails from "../../StudentData";
import Studentchild from "./Studentchild";

class Student1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            student: {
                Name: "",
                Email: "",
                Address: {
                    City: "",
                    State: ""
                },
                Qualification: []
            }
        }
    }
    render() {
        return (
            <div>
                <h2>Student Component</h2>
                <Studentchild student={this.state.student}></Studentchild>
                {/* {this.state.student.Email,
                 this.state.student.Address.City,
                  this.state.student.Address.State,
               this.state.student.Qualification}*/}

                {/* <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Qualification</th>
                    </tr>
                    <tr>
                        <td>{this.state.student.Name}</td>
                        <td>{this.state.student.Email}</td>
                        <td>{this.state.student.Address.City}</td>
                        <td>{this.state.student.Address.State}</td>
                        <td>{this.state.student.Qualification[0]}
                            {this.state.student.Qualification[1]}
                            {this.state.student.Qualification[2]}
                        </td>
                    </tr>
               </table>*/}
                <button onClick={() => {
                    this.setState(
                        {
                            student: studentDetails
                        }
                    )
                }}>Update</button>

            </div>
        )
    }



}
export default Student1;