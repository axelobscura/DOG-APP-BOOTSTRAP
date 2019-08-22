import React, {Component} from 'react';
import Routes from './Routes';
import whiskey from './images/whiskey.jpg';
import hazel from './images/hazel.jpg';
import sham from './images/sham.jpg';
import './App.css';
import NavBar from './NavBar';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey loves eating popcorn',
          'Whiskey is a terrible guard dog',
          'Whiskey wants to cuddle with you'
        ]
      },
      {
        name: 'Hazel',
        age: 3,
        src: hazel,
        facts: [
          'Hazel has so much energy',
          'Hazel is highly inteligent',
          'Hazel loves people'
        ]
      },
      {
        name: 'Sham',
        age: 3,
        src: sham,
        facts: [
          'Sham has so much energy',
          'Sham is highly inteligent',
          'Sham loves people'
        ]
      }
    ]
  }
  render(){
    return (
      <div>
        <NavBar dogs={this.props.dogs} />
        <div className='container'>
          <Routes dogs={this.props.dogs}/>
        </div>
      </div>
    );
  }
}

export default App;
