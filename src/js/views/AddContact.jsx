import React from "react";
import { Link } from "react-router-dom";

import { Context } from '../store/appContext';

export default class AddContact extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			full_name: '',
			email: '',
			phone: '',
			address: '',
			profile: ''
		};
	}
	
	handleChange = (name) => (e) => {
		this.setState({[name]: e.target.value});
	}
	
	validData = () => {
		const { full_name, email, phone, address, profile } = this.state;
		return full_name && email && phone && address && profile && true;
	}
	
	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input 
								type="text" 
								className="form-control"
								name="full_name"
								placeholder="Full Name" 
								value={this.state.full_name}
								onChange={this.handleChange('full_name')}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input 
								type="email" 
								className="form-control" 
								placeholder="Enter email" 
								value={this.state.email}
								onChange={this.handleChange('email')}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input 
								type="phone" 
								className="form-control" 
								placeholder="Enter phone" 
								value={this.state.phone}
								onChange={this.handleChange('phone')}
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input 
								type="text" 
								className="form-control" 
								placeholder="Enter address" 
								value={this.state.address}
								onChange={this.handleChange('address')}
							/>
						</div>
						<div className="form-group">
							<label>Profile Picture</label>
							<input 
								type="text" 
								className="form-control" 
								placeholder="Enter URL" 
								value={this.state.profile}
								onChange={this.handleChange('profile')}
							/>
						</div>
						<Context.Consumer>
							{ ({actions}) => (
							<button 
								type="button" 
								className="btn btn-primary form-control"
								onClick={() => {
									if(this.validData()){
										const { full_name, email, phone, address, profile } = this.state;
										actions.addContact(full_name, address, email, phone, address, profile);
									}else{
										alert('invalid fields, please fill them all');
									}
								} }
							>save</button>
							)}
						</Context.Consumer>
						<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
					</form>
				</div>
			</div>
		);
	}
}