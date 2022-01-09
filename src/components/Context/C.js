import React,{Component} from "react";
import D from "./D";
import myContext from "./Context";



class C extends Component{
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
                    <div className="card-header bg-danger text-white">
                        <h2>C Component</h2>
                    </div>
                    <div className="card-body">
                    <D/>
                    </div>
                    <div className="card-footer">
                    <myContext.Consumer>
                        {
                            (userName)=>{
                                return <h2> {userName.name}</h2>
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
export default C;