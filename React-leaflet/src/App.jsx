import React from 'react';
import Choropleth from 'react-leaflet-choropleth'
import { Map } from 'react-leaflet'
import LeafMap from './components/leafmap.jsx';
var geocode = require('./../data/allstatesregionmvlinetsplevel.js');

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: null
		}
	}

	componentWillMount() {
		var geocode = require('./../data/allstatesregionmvlinetsplevel.js');
		this.setState({data: geocode.features});
		console.log(geocode);
	}

	render() {
		return (
			<div>
				<LeafMap geocode={this.state.data} />
			</div>
			)
	}
}

export default App;