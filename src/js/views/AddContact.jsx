import React from "react";
import { Link } from "react-router-dom";

export default class AddContact extends React.Component {
	
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
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input 
								type="email" 
								className="form-control" 
								placeholder="Enter email"
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input 
								type="phone" 
								className="form-control" 
								placeholder="Enter phone"
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input 
								type="text" 
								className="form-control" 
								placeholder="Enter address"
							/>
						</div>
						<div className="form-group">
							<label>Profile Picture</label>
							<input 
								type="text" 
								className="form-control" 
								placeholder="Enter URL" 
							/>
						</div>
							<button 
								type="button" 
								className="btn btn-primary form-control"
								onClick={() => alert('Don\t know how to add :(')}
							>save</button>
							
						<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
					</form>
				</div>
			</div>
		);
	}
}