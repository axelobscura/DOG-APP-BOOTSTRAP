import React, { Component } from 'react';
import './DogList.css';

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">DOG LIST</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map(d => (
              <div className="col-lg-4 text-center" key={d.name}>
                <img src={d.src} alt=""/>
                <h3>{d.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
 
export default DogList;