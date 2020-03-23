import React, { Component }  from 'react';
import "./style.scss"

import Header from "../../components/Header/index.jsx";
import TempAccess from "../TempAccess/index.jsx";

class GuestLayout extends Component {
	constructor(){
		super();

		this.state = {
			
		}
	}

	render() {

		return(
            <div className="wrapp">
				<Header guest={true}/>
				<TempAccess/>
			</div>
		)
	}
}

export default GuestLayout;
