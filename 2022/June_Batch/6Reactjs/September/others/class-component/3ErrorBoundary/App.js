import React, { Component } from 'react'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'


class App extends Component {
	render() {
		return (
			<div className="App">
				<ErrorBoundary>
					<Hero heroName="Joker" />
				</ErrorBoundary> 
			</div>
		)
	}
}

export default App
