import React from 'react'
import NavBar from './nav-bar.js'
import Content from './content.js'

export default class App extends React.Component {
	render(){
		return (
			<section id="main">
				<NavBar></NavBar>
				<Content children={this.props.children}></Content>
			</section>
		)
	}
}