import React, { Component } from 'react';
// import { GoogleMapLoader, GoogleMap} from 'react-google-maps';
// import { GoogleMapLoader, GoogleMap} from 'react-google-maps';
//console.log(GoogleMapLoader);
class GoogleMap extends Component {
	componentDidMount() {
		// console.log(google);
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		// this.refs.map
		return <div ref="map" />;
	}
}

export default GoogleMap; 

// export default (props) => {
// 	// console.log(props);
// 	return (
// 		<GoogleMapLoader
// 			containerElement={ <div style={{height: `100%`}} /> }
// 			googleMapElement={
// 				<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lon: props.lon}} />
// 			}
// 		/>
// 	);
// }