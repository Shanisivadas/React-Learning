import React, { Component } from 'react';

class Studentchild extends Component {
    render() {
        return (
            <div>
                 <h2>Child Component</h2> 
                 <p>--------------------------------------------------------------------</p> 
                   <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Qualification</th>
                    </tr>
                    <tr>
                        <td>{this.props.student.Name}</td>
                        <td>{this.props.student.Email}</td>
                        <td>{this.props.student.Address.City}</td>
                        <td>{this.props.student.Address.props}</td>
                        <td>{this.props.student.Qualification[0]}
                            {this.props.student.Qualification[1]}
                            {this.props.student.Qualification[2]}
                        </td>
                    </tr>
               </table>
              <h2>{this.props.d}</h2>
            </div>
        );
    }
}

export default Studentchild;