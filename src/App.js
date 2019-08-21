import React, {Component} from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import { Switch, Route } from 'react-router-dom';
import whiskey from './images/whiskey.jpg';
import hazel from './images/hazel.jpg';
import sham from './images/sham.jpg';
import './App.css';

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
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog}/>
    }
    return (
      <div>
        <Switch>
          <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs}/>} />
          <Route exact path='/dogs/:name' render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
