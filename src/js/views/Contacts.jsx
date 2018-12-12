import React from "react";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';

import { Context } from '../store/appContext';

export default class Contacts extends React.Component {
	constructor(){
		super();
		this.state = {
			showModal: false  
		};
	}

	render() {
		return (
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">Add new contact</Link>
					</p>
					<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							<Context.Consumer>
								{({ store, actions}) => (
									store.contacts.map( (contact, index) => (
										<ContactCard 
											key={index}
											full_name={contact.full_name}
											address={contact.address}
											phone={contact.phone}
											email={contact.email}
											profile={contact.profile}
											onDelete={() => this.setState({ showModal: true})} />
									))
								)}
							</Context.Consumer>
						</ul>
					</div>
				</div>
				<Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
			</div>
		);
	}
}
