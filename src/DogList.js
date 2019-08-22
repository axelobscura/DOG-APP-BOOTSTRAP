import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="DogList">
        <h1 className="display-1 text-center mt-4 mb-4">DOG LIST</h1>
          <div className="row">
            {this.props.dogs.map(d => (
              <div className="Dog col-lg-4 text-center Dog" key={d.name}>
                <img src={d.src} alt=""/>
                <Link className="underline" exact to={`/dogs/${d.name}`}><h3>{d.name}</h3></Link>
              </div>
            ))}
          </div>
      </div>
    );
  }
}
 
export default DogList;