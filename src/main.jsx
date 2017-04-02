import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import Choropleth from 'react-leaflet-choropleth';
import { Map } from 'react-leaflet';

document.addEventListener('DOMContentLoaded', function() {
	render(
		<App />,
		document.getElementById('App'));
});