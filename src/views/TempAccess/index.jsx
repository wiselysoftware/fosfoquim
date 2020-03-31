import React, { Component }  from 'react';

import "./style.scss"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import dateIcon from "../../assets/images/calendar.svg";

class TempAccess extends Component {
	constructor(){
		super();

		this.state = {
			startDate: new Date(),
			endDate: new Date(),
			data: [
				{date: 'March 03', value: 39},
				{date: 'March 05', value: 47},
				{date: 'March 09', value: 85},
				{date: 'March 11', value: 32},
				{date: 'March 13', value: 67},
				{date: 'March 15', value: 65},
				{date: 'March 16', value: 54},
				{date: 'March 17', value: 97},
			],
			width: 0,
			tableData: [
				{id: 1, timestamp: '09:45:34 - 06/03/2020', channels: '2', value: '22 ppm'},
				{id: 2, timestamp: '09:45:34 - 06/03/2020', channels: '2', value: '22 ppm'},
				{id: 3, timestamp: '09:45:34 - 06/03/2020', channels: '2', value: '22 ppm'}
			],
			active: 0
		}
	}
	
	componentDidMount(){
		let width = this.refs.chartContainer.offsetWidth;
		this.setState({ width })
	}

	changeStartDate(date){
		this.setState({startDate: date});
	}

	changeEndDate(date){
		this.setState({endDate: date});
	}

	setActive(id){
		this.setState({active: id});
	}

	render() {
		let { startDate, endDate, width, data, tableData, active } = this.state;

		return(
            <main className="main-section temp-access">
				<div className="section-header">
					<div className="title">
						<h3>Field device (#1456) - Type 1</h3>
					</div>

					<div className="date-range">
						<div className="picker-wrapp">
							<div className="pickers">
								<span className="date-header-label">From:</span>
								<DatePicker
									className="date-picker"
									selected={startDate}
									onChange={ (date) => {this.changeStartDate(date)} }
									dateFormat="MMMM d, yyyy h:mm aa"
								/>

								<img src={dateIcon} alt=""/>
							</div>
						</div>

						<div className="picker-wrapp">
							<div className="pickers">
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
				</div>

				<div className="temp-access-content">
					<div className="chart" ref="chartContainer">
						<LineChart width={width} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
							<XAxis dataKey="date" />
							<YAxis />
							<Tooltip />
							<CartesianGrid strokeDasharray="3 3"/>
							<Line type="monotone" dataKey="value" stroke="#F24130" />
						</LineChart>
					</div>

					<div className="table">
						<div className="label">Data by timestamps</div>

						<TableContainer component={Paper} className="clients-list table-container">
							<Table stickyHeader aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Timestamp</TableCell>
										<TableCell>Channel</TableCell>
										<TableCell>Value</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
								{tableData.map(item => (
									<TableRow key={item.id} onClick={()=>{this.setActive(item.id)}} className={item.id === active ? "active" : ""}>
										<TableCell>{item.timestamp}</TableCell>
										<TableCell>{item.channels}</TableCell>
										<TableCell>{item.value}</TableCell>
									</TableRow>
								))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
            </main>
		)
	}
}

export default TempAccess;
