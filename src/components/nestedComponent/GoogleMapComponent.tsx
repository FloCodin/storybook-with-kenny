import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const GoogleMapComponent = () => {
    return (
        <>
        {/*<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">*/}
        {/*    <GoogleMap*/}
        {/*        mapContainerStyle={containerStyle}*/}
        {/*        center={center}*/}
        {/*        zoom={10}*/}
        {/*    >*/}
        {/*    </GoogleMap>*/}
        {/*</LoadScript>*/}
            <iframe
                width="500"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=621&amp;height=560&amp;hl=en&amp;q=%20Barcelona+(dfd)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>

</>
    );
};

export default GoogleMapComponent;