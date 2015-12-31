import React from 'react'

export default class NavBar extends React.Component {
	render(){
		return (
			<nav className="top-nav top-nav-blue-saturated-lighter cf" role="navigation">
				<input type="checkbox" className="menu-toggle" id="menu-toggle"/>
				<label className="menu-toggle-button" htmlFor="menu-toggle">...</label>

				<ul className="list-unstyled list-inline cf">
					<li className="logo">
						<a href="javascript:void(0);">AOS</a>
					</li>

					<li>
						<a href="javascript:void(0);">Ordenes de Servicio</a>
					</li>

					<li className="float-right">
						<a href="javascript:void(0);">Login</a>
					</li>					
				</ul>
			</nav>
		)
	}
}