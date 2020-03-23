import React, { Component }  from 'react';
import "./style.scss"

import DeviceCard from "../../components/DeviceCard/index.jsx";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import search from "../../assets/images/search.svg";
import moreIcon from "../../assets/images/down-arrow.svg";

class Devices extends Component {
	constructor(){
		super();

		this.state = {
			selectedClient: 'all',
			selectedCountry: 'all',
			selectedType: 'all',
			items: [
				{id: 1},
				{id: 2},
				{id: 3},
				{id: 4},
				{id: 5},
				{id: 6},
				{id: 7}
			]
		}
	}

	selectClient(e){
		this.setState({selectedClient: e.target.value});
	}

	selectCountry(e){
		this.setState({selectedCountry: e.target.value});
	}

	selectType(e){
		this.setState({selectedType: e.target.value});
	}
	
	render() {
		let {selectedClient, selectedCountry, selectedType, items} = this.state;

		return(
            <main className="main-section devices-section">
				<div className="section-header">
					<div className="title">
						<h3>Find devices</h3>
					</div>

					<p className="last-seen">
						<img src={search} alt=""/>
						<input type="text" placeholder="Search by name or code"/>
					</p>
				</div>

				<div className="list-filters">
					<div className="type-select">
						<span className="date-header-label">Client:</span>
						<Select labelId="demo-simple-select-label" id="demo-simple-select"
							value={selectedClient} onChange={(e) => {this.selectClient(e)}}>
							<MenuItem value={'all'}>All</MenuItem>
							<MenuItem value={'client1'}>Client 1</MenuItem>
							<MenuItem value={'client2'}>Client 2</MenuItem>
							<MenuItem value={'client3'}>Client 3</MenuItem>
						</Select>
						<img src={moreIcon} alt=""/>
					</div>

					<div className="type-select">
						<span className="date-header-label">Country:</span>
						<Select labelId="demo-simple-select-label" id="demo-simple-select"
							value={selectedCountry} onChange={(e) => {this.selectCountry(e)}}>
							<MenuItem value={'all'}>All</MenuItem>
							<MenuItem value={'country1'}>Country 1</MenuItem>
							<MenuItem value={'country2'}>Country 2</MenuItem>
							<MenuItem value={'country3'}>Country 3</MenuItem>
						</Select>
						<img src={moreIcon} alt=""/>
					</div>

					<div className="type-select">
						<span className="date-header-label">Type:</span>
						<Select labelId="demo-simple-select-label" id="demo-simple-select"
							value={selectedType} onChange={(e) => {this.selectType(e)}}>
							<MenuItem value={'all'}>All</MenuItem>
							<MenuItem value={'co2'}>CO2</MenuItem>
							<MenuItem value={'temperature'}>Temperature</MenuItem>
							<MenuItem value={'humidity'}>Humidity</MenuItem>
						</Select>
						<img src={moreIcon} alt=""/>
					</div>
				</div>

				<div className="device-list-container">
					<div className="devices-list">
						{items.map((item) => {
							return(<DeviceCard key={item.id}/>)
						})}
					</div>
				</div>
            </main>
		)
	}
}

export default Devices;
