import React, { Component }  from 'react';
import "./style.scss";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import dateIcon from "../../assets/images/calendar.svg";
import moreIcon from "../../assets/images/down-arrow.svg";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class DeviceData extends Component {
	constructor(){
		super();

		this.state = {
			startDate: new Date(),
			endDate: new Date(),
			selectedType: 'co2',
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
			width: 0
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

	selectType(e){
		this.setState({selectedType: e.target.value});
	}

	render() {
		let {startDate, endDate, selectedType, data, width} = this.state;
		
		return(
            <main className="main-section data-section">
				<div className="data-header">
					<div className="date-pickers">
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

					<div className="type-select">
						<span className="date-header-label">Value:</span>
						<Select labelId="demo-simple-select-label" id="demo-simple-select"
							value={selectedType} onChange={(e) => {this.selectType(e)}}>
							<MenuItem value={'co2'}>CO2</MenuItem>
							<MenuItem value={'temperature'}>Temperature</MenuItem>
							<MenuItem value={'humidity'}>Humidity</MenuItem>
						</Select>
						<img src={moreIcon} alt=""/>
					</div>
				</div>
				<div className="chart-container" ref="chartContainer">
					<LineChart width={width} height={600} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="date" />
						<YAxis />
						<Tooltip />
						<CartesianGrid strokeDasharray="3 3"/>
						<Line type="monotone" dataKey="value" stroke="#F24130" />
					</LineChart>
				</div>
			</main>
		)
	}
}

export default DeviceData;
