'use client'; // Denotes that the file is a client-side script written in TypeScript

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Lg from "../images/Logo.jpg";
console.log(Lg);

// if the window object is defined, import the bootstrap bundle
if(typeof window !== "undefined"){
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }

export default function Navbar() {
    return (
        // Navbar
        <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: 'rgba(56, 57, 58, 0.8)'}}>
            {/* Navbar brand */}
            <div className="container-fluid m-2">
                <Image 
                    alt="Hydro Squad" 
                    className="navbar-brand rounded-4 shadow-lg" 
                    src={Lg}
                    width="200" 
                    height="100"
                />
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
                <div className="collapse navbar-collapse justify-content-end p-3 " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item m-2 ">
                            <Link className="nav-link active text-white hover-effect" aria-current="page" href="/" >Home</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link text-white hover-effect" href="/Routing/services">Services</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link text-white hover-effect" href="/Routing/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link text-white hover-effect" href="/Routing/about">About Us</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link text-white hover-effect" href="/Routing/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
    );
}