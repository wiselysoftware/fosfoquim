import React, { Component }  from 'react';
import "./style.scss"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import back from "../../assets/images/down-arrow.svg";

class Accounts extends Component {
	constructor(){
		super();

		this.state = {
			data: [
				{id: 1, company: 'John Doe', owner: 'john.doe@gmail.com', country: 'Admin', devices: 'All'},
				{id: 2, company: 'John Doe', owner: 'john.doe@gmail.com', country: 'Admin', devices: 'All'},
				{id: 3, company: 'John Doe', owner: 'john.doe@gmail.com', country: 'Admin', devices: 'All'},
				{id: 4, company: 'John Doe', owner: 'john.doe@gmail.com', country: 'Admin', devices: 'All'},
				{id: 5, company: 'John Doe', owner: 'john.doe@gmail.com', country: 'Admin', devices: 'All'},
				{id: 6, company: 'John Doe', owner: 'john.doe@gmail.com', country: 'Admin', devices: 'All'},
				{id: 7, company: 'John Doe', owner: 'john.doe@gmail.com', country: 'Admin', devices: 'All'}
			],
			accessData: [
				{id: 1, device: '4561', from: '06/03/2020', to: '06/04/2020', link: 'dashboard.fosfoquim.cl/device/4561'},
				{id: 2, device: '4561', from: '06/03/2020', to: '06/04/2020', link: 'dashboard.fosfoquim.cl/device/4561'},
				{id: 3, device: '4561', from: '06/03/2020', to: '06/04/2020', link: 'dashboard.fosfoquim.cl/device/4561'},
				{id: 4, device: '4561', from: '06/03/2020', to: '06/04/2020', link: 'dashboard.fosfoquim.cl/device/4561'},
				{id: 5, device: '4561', from: '06/03/2020', to: '06/04/2020', link: 'dashboard.fosfoquim.cl/device/4561'}
			],
			active: 0,
		}
	}

	setActive(id){
		this.setState({active: id});
	}

	render() {
		let { data, accessData, active } = this.state;

		return(
            <main className="main-section">
				<div className="section-header">
					<div className="title">
						<span className="back" onClick={() => {this.props.history.goBack()}}>
							<img src={back} alt=""/>
						</span>
						<h3>Accounts List</h3>
					</div>
				</div>

				<div className="accounts-list-container">
					<div className="account-table-container">
						<TableContainer component={Paper}>
							<Table stickyHeader aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Name</TableCell>
										<TableCell>Mail</TableCell>
										<TableCell>Account Type</TableCell>
										<TableCell>Access</TableCell>
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

						<div className="buttons">
							<button className="main-btn">New Account</button>
							<button className="main-btn">Edit</button>
						</div>
					</div>

					<div className="account-table-container">
						<TableContainer component={Paper}>
							<Table stickyHeader aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>ID</TableCell>
										<TableCell>Device</TableCell>
										<TableCell>From</TableCell>
										<TableCell>To</TableCell>
										<TableCell>Link</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
								{accessData.map(item => (
									<TableRow key={item.id} onClick={()=>{this.setActive(item.id)}} className={item.id === active ? "active" : ""}>
										<TableCell>{item.id}</TableCell>
										<TableCell>{item.device}</TableCell>
										<TableCell>{item.from}</TableCell>
										<TableCell>{item.to}</TableCell>
										<TableCell>{item.link}</TableCell>
									</TableRow>
								))}
								</TableBody>
							</Table>
						</TableContainer>

						<div className="buttons">
							<button className="main-btn">New Access</button>
							<button className="main-btn">Edit</button>
						</div>
					</div>
				</div>
            </main>
		)
	}
}

export default Accounts;
