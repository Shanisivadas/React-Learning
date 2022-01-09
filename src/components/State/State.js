import React from "react";


class StateComponent extends React.Component{


    constructor(){
        super();
        this.state={
            title:"React",
            description:"This a react state"
        }
    }
    update=()=>{
        this.setState({
            title:"Javascript",
            description:"Update Successfully"
        })
    }

    render()
    {
        return(

            <div> 
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                <button onClick={this.update}>Update</button>
            </div>
        )
    }
}
export default StateComponent;