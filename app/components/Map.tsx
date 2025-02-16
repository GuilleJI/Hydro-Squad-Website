"use client"; 

import React, { useEffect } from 'react'; // Import the useEffect hook from React
import { Loader} from '@googlemaps/js-api-loader'; // Import the Loader class from the Google Maps JavaScript API

export function Map() {

    const mapRef = React.useRef<HTMLDivElement>(null); // Create a reference to the map

    // useEffect hook to run code after the component has rendered
    useEffect(() => {

        // Function to initialize the map..async is used to make the function asynchronous because it will take some time to load the map and we don't want to block the rendering of the component
        const initMap = async () => {

            // Create a new Loader object to load the Google Maps JavaScript API
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string , //Pass the API key as a prop to the Loader class
                version: "weekly", // Specify the version of the API to use
            });

            // Import the Map class from the Google Maps JavaScript API..await is used to wait for the map to load
            const { Map } = await loader.importLibrary('maps'); 

            // Import the Marker class from the Google Maps JavaScript API..await is used to wait for the marker to load
            const { AdvancedMarkerElement } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            // Create a new map object for the map reference
            const position = {
                lat: 43.775402,
                lng: -79.343956
            }

            // map options 
            const mapOptions: google.maps.MapOptions = {
                center: position, 
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }

            // Create a new map object for the map reference or setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            // put up a marker
            const marker = new AdvancedMarkerElement ({
                map: map, 
                position: position, 

            });

        }
        initMap(); // Call the function to initialize the map
    },[]);

    return (
        // Return the map reference
        <div style={{ height: '600px'}} ref={mapRef}/>
    )
}