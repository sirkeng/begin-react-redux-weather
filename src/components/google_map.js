import React, { Component } from 'react';
// import { GoogleMap, Marker } from "react-google-maps";

class GoogleMap extends Component{
	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render(){
		// this.refs.map
		// console.log(this.refs);
		return <div ref="map" />;
	}
}

export default GoogleMap;




// export default (props) => {
// 	console.log(props);
// 	return (
// 		<GoogleMapLoader
// 			containerElement={ <div style={{height: '100%'}} /> }
// 			googleMapElement={
// 				<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
// 			}
// 		/>
// 	);
// }