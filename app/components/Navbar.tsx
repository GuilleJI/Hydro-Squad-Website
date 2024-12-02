'use client'; // Denotes that the file is a client-side script written in TypeScript

import React from "react";
import Link from "next/link";

// if the window object is defined, import the bootstrap bundle
if(typeof window !== "undefined"){
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }

export default function Navbar() {
    return (
        // Navbar
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Navbar brand */}
            <div className="container-fluid m-2">
                <a className="navbar-brand" href="">Hydro Squad</a>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse justify-content-end p-3" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item m-2">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link" href="/Routing/services">Services</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link" href="/Routing/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link" href="/Routing/about">About Us</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link" href="/Routing/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
    );
}