import React from 'react'
import NavBar from './main/nav-bar.js'
import Content from './main/content.js'


export default class App extends React.Component {
	render(){
		return (
			<section id="main">
				<NavBar></NavBar>
				<Content></Content>
			</section>
		)
	}
}