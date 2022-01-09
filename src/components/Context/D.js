import React, {Component } from "react" ;
import myContext from "./Context";
import myContexxt from "./Context";

class D extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

render(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card-header bg-primary text-white">
                       <h2> D Component</h2> </div>
                       <div className="card-body">
                            <myContext.Consumer>
                                {
                                    (data)=>{
                                            return <div> 
                                                <h2>Name:{data.name}</h2>
                                                <h2>City:{data.city}</h2>
                                            </div>
                                    }
                                }


                            </myContext.Consumer>


                        </div>
                </div>
            </div>
        </div>
    )
}

};
export default D;
