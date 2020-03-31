import React, { Component }  from 'react';

import "./style.scss";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import moreIcon from "../../assets/images/down-arrow.svg";
import back from "../../assets/images/down-arrow.svg";
import mailIcon from "../../assets/images/mail.svg";

class Clients extends Component {
	constructor(){
		super();

		this.state = {
			data: [
				{id: 1, company: 'Company 1', owner: 'Owner 1', country: 'Country 1', devices: 3},
				{id: 2, company: 'Company 2', owner: 'Owner 2', country: 'Country 2', devices: 4},
				{id: 3, company: 'Company 3', owner: 'Owner 3', country: 'Country 3', devices: 6},
				{id: 4, company: 'Company 4', owner: 'Owner 4', country: 'Country 4', devices: 1},
				{id: 5, company: 'Company 5', owner: 'Owner 5', country: 'Country 5', devices: 10},
				{id: 6, company: 'Company 6', owner: 'Owner 6', country: 'Country 6', devices: 8},
				{id: 7, company: 'Company 7', owner: 'Owner 7', country: 'Country 7', devices: 4},
				{id: 8, company: 'Company 8', owner: 'Owner 8', country: 'Country 8', devices: 3},
				{id: 9, company: 'Company 9', owner: 'Owner 9', country: 'Country 9', devices: 3},
			],
			active: 0,
			selectedCountry: 'country1',
			companyInput: 'Company 1'
		}
	}

	setActive(id){
		this.setState({active: id});
	}

	selectCountry(e){
		this.setState({selectedCountry: e.target.value});
	}

	changeCompanyName(e){
		this.setState({companyInput: e.target.value});
	}

	render() {
		let { data, active, selectedCountry, companyInput } = this.state;

		return(
            <main className="main-section">
				<div className="section-header">
					<div className="title">
						<span className="back" onClick={() => {this.props.history.goBack()}}>
							<img src={back} alt=""/>
						</span>
						<h3>Clients List</h3>
					</div>
				</div>

				<div className="clients-list-container">
					<TableContainer component={Paper} className="clients-list table-container">
						<Table stickyHeader aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Company Name</TableCell>
									<TableCell>Owner</TableCell>
									<TableCell>Country</TableCell>
									<TableCell>Devices</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
							{data.map(item => (
								<TableRow key={item.id} onClick={()=>{this.setActive(item.id)}} className={item.id === active ? "active" : ""}>
									<TableCell>{item.company}</TableCell>
									<TableCell>{item.owner}</TableCell>
									<TableCell>{item.country}</TableCell>
									<TableCell>{item.devices}</TableCell>
								</TableRow>
							))}
							</TableBody>
						</Table>
					</TableContainer>
					
					{active ? <div className="client-edit">
						<p className="company-name">Company 1</p>

						<div className="company-settings">
							<div className="type-select">
								<span className="date-header-label">Company Name:</span>
								<input type="text" className="textfield" value={companyInput} onChange={(e)=>{this.changeCompanyName(e)}}/>
							</div>

							<div className="type-select">
								<span className="date-header-label">Country:</span>
								<Select labelId="demo-simple-select-label" id="demo-simple-select"
									value={selectedCountry} onChange={(e) => {this.selectCountry(e)}}>
									<MenuItem value={'all'}>All</MenuItem>
									<MenuItem value={'country1'}>Country 1</MenuItem>
									<MenuItem value={'country2'}>Country 2</MenuItem>
									<MenuItem value={'country3'}>Country 3</MenuItem>
									<MenuItem value={'country4'}>Country 4</MenuItem>
									<MenuItem value={'country5'}>Country 5</MenuItem>
									<MenuItem value={'country6'}>Country 6</MenuItem>
									<MenuItem value={'country7'}>Country 7</MenuItem>
									<MenuItem value={'country8'}>Country 8</MenuItem>
									<MenuItem value={'country9'}>Country 9</MenuItem>
								</Select>
								<img src={moreIcon} alt=""/>
							</div>
						</div>
					</div> : ""}

					{active ? <div className="client-details">
						<div className="details-bottom">
							<div className="contacts">
								<p>
									<span className="label">Contacts</span>
									<span className="add">Add contact</span>
								</p>

								<div className="contact-item">
									<div className="contact-info">
										<div className="name">John Doe</div>
										<div className="mail">john.doe@gmail.com</div>
									</div>

									<a href="mailto:john.doe@gmail.com" className="mail-btn">
										<img src={mailIcon} alt=""/>
									</a>
								</div>

								<div className="contact-item">
									<div className="contact-info">
										<div className="name">John Doe</div>
										<div className="mail">john.doe@gmail.com</div>
									</div>

									<a href="mailto:john.doe@gmail.com" className="mail-btn">
										<img src={mailIcon} alt=""/>
									</a>
								</div>

								<div className="contact-item">
									<div className="contact-info">
										<div className="name">John Doe</div>
										<div className="mail">john.doe@gmail.com</div>
									</div>

									<a href="mailto:john.doe@gmail.com" className="mail-btn">
										<img src={mailIcon} alt=""/>
									</a>
								</div>
							</div>

							<div className="buttons">
								<button className="main-btn">View Devices</button>
								<button className="main-btn">Delete Account</button>
							</div>
						</div>
					</div> : ''}
				</div>
            </main>
		)
	}
}

export default Clients;
