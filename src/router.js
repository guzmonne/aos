import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import MainUI from './main/ui.js'
import Hello from './main/hello.js'
import Login from './users/login.js'

export default () => {
	return (
		<Router>
			<Route path="/" component={MainUI}>
				<IndexRoute component={Hello}></IndexRoute>
				<Route path="login" component={Login}></Route>
			</Route>
		</Router>
	)
}