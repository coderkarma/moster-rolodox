import React, { Component } from 'react';
import { CardList } from './components/cardList/CardList';
import { SearchBox } from './components/searchBox/SearchBox';
import './App.css';

class App extends Component {
	state = {
		monsters: [],
		searchField: '',
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
			response.json().then((users) => this.setState({ monsters: users }))
		);
	}
	handleChange = (e) => this.setState({ searchField: e.target.value });

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className='App'>
				<SearchBox
					placeholder='Search monsters'
					handleChange={this.handleChange}
				/>

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}
export default App;
