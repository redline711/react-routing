import React, { Component } from 'react'
import './App.scss'
import { Route, NavLink } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
	render() {
		return (
			<div>
				<nav className="nav">
					<ul>
						<li>
							<NavLink to="/" exact activeClassName={'wfn-active'}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeStyle={{ color: 'blue' }}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/cars">Cars</NavLink>
						</li>
					</ul>
				</nav>

				<hr />

				{/*localhost:3000*/}
				<Route path="/" exact render={() => <h1>Home Page</h1>} />
				<Route path="/about" exact component={About} />
				<Route path="/cars" exact component={Cars} />
			</div>
		)
	}
}

export default App
