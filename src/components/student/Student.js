import React from "react";


class Student extends React.Component{


    constructor(props){
        super(props);

        this.state={
            Name:"Shani",
            Email:"shanisivadas8@gmail.com"

        }
    }
    updateState=()=>
    {
        this.setState({
            Name:"Shivadha",
            Email:"Shivadha8@gmail.com"
        })
    }

    render(){

        return(

            <div>
                <ul>
                    <li>Name:{this.state.Name}</li>
                    <li>Email:{this.state.Email}</li>
                    <button onClick={this.updateState}>Save</button>
                </ul>
            </div>
        )
    }
}
export default Student;
