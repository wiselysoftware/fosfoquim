import React, { Component }  from 'react';
import "./style.scss"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import back from "../../assets/images/down-arrow.svg";
import dateIcon from "../../assets/images/calendar.svg";

class ReportConf extends Component {
	constructor(){
		super();

		this.state = {
			startDate: new Date(),
			endDate: new Date(),
			technician: '--name--',
			location: '--name--',
			customer: '--name--',
			facility: '--name--',
			treatment: '--name--',
			notes: 'Some notes',
		}
	}

	changeStartDate(date){
		this.setState({startDate: date});
	}

	changeEndDate(date){
		this.setState({endDate: date});
	}

	changeTechnician(e){
		this.setState({technician: e.target.value});
	}

	changeLocation(e){
		this.setState({location: e.target.value});
	}

	changeCustomer(e){
		this.setState({customer: e.target.value});
	}

	changeFacility(e){
		this.setState({facility: e.target.value});
	}

	changeTreatment(e){
		this.setState({treatment: e.target.value});
	}

	changeNotes(e){
		this.setState({notes: e.target.value});
	}

	close(){
		this.props.close();
	}

	render() {
		let { startDate, endDate, technician, location, customer, facility, treatment, notes } = this.state;

		return(
            <div className="dialog-container">
				<div className="section-header">
					<div className="title">
						<span className="back" onClick={() => {this.close()}}>
							<img src={back} alt=""/>
						</span>
						<h3>Create report</h3>
					</div>
				</div>

				<div className="report-config-container">
					<div className="report-create">
						<div className="date-range">
							<div className="label">Set time range</div>

							<div className="row">
								<div className="picker-wrapp">
									<span className="date-header-label">From:</span>
									<DatePicker
										className="date-picker"
										selected={startDate}
										onChange={ (date) => {this.changeStartDate(date)} }
										dateFormat="MMMM d, yyyy h:mm aa"
									/>

									<img src={dateIcon} alt=""/>
								</div>

								<div className="picker-wrapp">
									<span className="date-header-label">To:</span>
									<DatePicker
										className="date-picker"
										selected={endDate}
										onChange={ (date) => {this.changeEndDate(date)} }
										dateFormat="MMMM d, yyyy h:mm aa"
									/>

									<img src={dateIcon} alt=""/>
								</div>
							</div>
						</div>

						<div className="label">Report Information</div>
						<div className="report-options">
							<div className="column">
								<div className="type-select">
									<span className="date-header-label">Technician:</span>
									<input type="text" className="textfield" value={technician} onChange={(e)=>{this.changeTechnician(e)}}/>
								</div>

								<div className="type-select">
									<span className="date-header-label">Customer:</span>
									<input type="text" className="textfield" value={customer} onChange={(e)=>{this.changeCustomer(e)}}/>
								</div>

								<div className="type-select">
									<span className="date-header-label">Treatment ID:</span>
									<input type="text" className="textfield" value={treatment} onChange={(e)=>{this.changeTreatment(e)}}/>
								</div>
							</div>

							<div className="column">
								<div className="type-select">
									<span className="date-header-label">Location:</span>
									<input type="text" className="textfield" value={location} onChange={(e)=>{this.changeLocation(e)}}/>
								</div>

								<div className="type-select">
									<span className="date-header-label">Facility:</span>
									<input type="text" className="textfield" value={facility} onChange={(e)=>{this.changeFacility(e)}}/>
								</div>
							</div>

							<div className="row">
								<div className="type-select">
									<span className="date-header-label">Notes:</span>
									<textarea type="text" className="textfield" value={notes} onChange={(e)=>{this.changeNotes(e)}}></textarea>
								</div>
							</div>
						</div>
					</div>

					<div className="buttons">
						<button className="main-btn">Create</button>
					</div>
				</div>
			</div>
		)
	}
}

export default ReportConf;
