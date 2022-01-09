import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
              <h2>Child Component</h2>  
              <h2>{this.props.data.d}</h2>
              <h2>{this.props.data.d1}</h2>
            </div>
        );
    }
}

export default Child;