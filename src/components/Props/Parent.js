import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {

    constructor(props){
        super(props);
        this.state={
            Name:"Shani",
            Qualification:"M.Tech"
        }
    }

    render() {
        return (
            <div>
               <h2>Parent Component</h2> 
               <p>-------------------------------------------------------------------------</p>
            <Child data={{d:this.state.Name,d1:this.state.Qualification}}/>
            </div>
        );
    }
}

export default Parent;