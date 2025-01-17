"use client"; 

import { init } from 'next/dist/compiled/webpack/webpack';
import React, { useEffect } from 'react'; // Import the useEffect hook from React

export function Map() {

    const mapRef = React.useRef(null); // Create a reference to the map

    // useEffect hook to run code after the component has rendered
    useEffect(() => {

        // Function to initialize the map..async is used to make the function asynchronous because it will take some time to load the map and we don't want to block the rendering of the component
        const initMap = async () => {
            console.log('map init'); // Log a message to the console for testing purposes
        }
        initMap(); // Call the function to initialize the map
    },[]);

    return (
        <h1>Map</h1>
    )
}