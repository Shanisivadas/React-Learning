import React, { useEffect,useState} from "react";
import axios from "axios";

const Profile =()=> {
  
const [state,setState]=useState([])

useEffect(() =>{ 
serverCall();

},[]);
const serverCall= () => {
axios.get("https://randomuser.me/api/?results=1").then((res)=>{
    setState(res.data.results);
    console.log(res.data.results);
},
(errormsg)=>{alert("Error while updating data")});
}


    return (
      <div className="container">
        <div classname="row">
          <div className="col">
            <div className="card">
              <div classname="card-body">
                <div className="row">
                  <div className="col-sm-4">
                      <img src= {state.length> 0? state[0].picture.large: ""} width="300px" height="300px"/>
                  </div>
                    <div className="col-sm-8"> <h5>
                    First Name:{state.length>0 ?state[0].name.first:""}
                    </h5>
                    <h5>
                    Last Name:{state.length>0 ?state[0].name.last:""}
                    </h5>
                    <h5>Email:{state.length>0 ? state[0].email:""}</h5>
                    
                    <button className="btn btn-outline-primary" onClick={serverCall}>
                        Update Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}
export default Profile;
