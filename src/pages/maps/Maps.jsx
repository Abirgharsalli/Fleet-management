import React from 'react';
import mapboxgl from 'mapbox-gl';
import './maps.css';
import MapService from '../../services/MapService'
import {Link} from 'react-router-dom'


mapboxgl.accessToken='pk.eyJ1IjoiYWJpcjQiLCJhIjoiY2wyMHlvZmoxMTBpaDNqbXQ0aGFqdGM2OSJ9.mJc4GYnB8jqoy5As-CZr6g';


class Maps extends React.PureComponent {
 
	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: 9.5607653,
			lat: 33.7931605,
			zoom: 12
		};
    this.mapContainer = React.createRef();
	}

	// Create map and lay over markers
	
  componentDidMount(){
    const { lng, lat, zoom } = this.state;
		const map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11', 
			center: [lng, lat],
			zoom: zoom
     
		})
    
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
	map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
	map.addControl(new mapboxgl.GeolocateControl(), 'top-right');

		MapService.getAllLocation().then((response) => {

			response.data.forEach((location) => {
				console.log(location)
				 new mapboxgl.Marker()
										 .setLngLat(location.coordinates)
										 .setPopup(new mapboxgl.Popup({ offset: 30 })
										 .setHTML('<h6> Vehicle: ' + location.vehicle + '</h6>'+'<h6> Location: ' + location.location + '</h6>'+ '<h6> Driver: ' + location.driver+'</h6>' ))
										 .addTo(map);
	
			})

		}).catch(error => {
            console.log(error)
        })
   
	}
  

	
    render() {
      return (
        <div className='mapp'>
			
         <h2>Vehicles location</h2>
		 <Link className='btn btn-info' to={'/directions'}> Directions</Link>
          <div ref={this.mapContainer} className="map-container" />
		  
        </div>
      );
    }
		
	
}

export default Maps;