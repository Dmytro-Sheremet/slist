import React, { Component } from 'react';
import Navbar from './components/Navbar';
import List from './components/List';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Modal from './components/Modal';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navbar />
				<div className='container'>
					<Modal />
					<List />
				</div>
			</Provider>
		);
	}
}

export default App;
