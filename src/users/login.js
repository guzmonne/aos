import React from 'react'
import _ from 'lodash'
import Parse from 'parse'

export default class Login extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			username: props.username || '',
			password: props.password || ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSuccess = this.handleSuccess.bind(this);
		this.login = this.login.bind(this);
	}

	login(e){
		e.preventDefault();

		const {username, password} = this.state;

		console.log(username, password);
		
		Parse.User.logIn(username, password, {success: this.handleSuccess, error: this.handleError});
	}

	handleSuccess(user){
		console.log('Success!')
		this.setState({username: '', password: ''});
	}

	handleError(user, error){
		console.log('Error!')
		console.log(user, error);
	}

	handleChange(e){
		const obj = {};
		const key = e.target.dataset.name;

		obj[key] = e.target.value;

		this.setState(_.extend(this.state, obj));
	}

	render() {
		return (
			<div className="grid-flex-container">
				<div className="grid-flex-cell"></div>
				<div className="grid-flex-cell grid-flex-cell-1of3">
					<form>
						<fieldset>
							<legend>Login</legend>

							<div className="form-element">
								<label>
									Usuario
								</label>
								<input 	type="text"
												className="form-input"
												data-name="username"
												value={this.state.username}
												onChange={this.handleChange}/>
							</div>
							
							<div className="form-element">
								<label>
									Contraseña
								</label>
								<input 	type="password"
												className="form-input"
												data-name="password"
												value={this.state.password}
												onChange={this.handleChange}/>
							</div>
						
							<button type='submit'
											className='button button-primary button-block'
											onClick={this.login}>
								Aceptar
							</button>
						</fieldset>

					</form>
				</div>
				<div className="grid-flex-cell"></div>
			</div>
		);
	}
}
