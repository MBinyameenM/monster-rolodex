import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/serchbox/searchbox.component';

class App extends Component{

  constructor()
  {
    super();

    this.state = {
      monsters: [ ],
      searchField: ''
    };
  }

    componentDidMount(){

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then( users => this.setState({ monsters: users }) );

    }
    
    handleChange = e => {
      this.setState({ searchField: e.target.value })
    };


  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( mosnter => mosnter.name.toLowerCase().includes(searchField.toLocaleLowerCase()) );

    return (
      <div className="container">
        <h1 className="text-center my-5"> Monsters Rolodex </h1> 
         <SearchBox
          placeholder="Search Monsters"
          handleChange = { this.handleChange }
          />
          <CardList monsters={ filteredMonsters } /> 
    </div>
    );
  }
}

export default App;
