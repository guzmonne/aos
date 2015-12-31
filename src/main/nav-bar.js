import React from 'react'
import {Link} from 'react-router'
import Parse from 'parse'

export default class NavBar extends React.Component {
	render(){
		const login = <li key="login" className="float-right"><Link to="login">Login</Link></li>
		const logout = <li key="logout" className="float-right"><Link to="/">Logout</Link></li>
		const main = [
			<li key="serviceRequests"><a href="javascript:void(0);">Ordenes de Servicio</a></li>
		];
		const links = [<li key="logo" className="logo"><Link to="/">AOS</Link></li>];

		if (Parse.User.current()){
			links.concat(main);
			links.push(logout);
		} else {
			links.push(login)
		}

		return (
			<nav className="top-nav top-nav-blue-saturated-lighter cf" role="navigation">
				<input type="checkbox" className="menu-toggle" id="menu-toggle"/>
				<label className="menu-toggle-button" htmlFor="menu-toggle">...</label>

				<ul className="list-unstyled list-inline cf">
					{links}
				</ul>
			</nav>
		)
	}
}