// React component Services 
import Image from "next/image";
import logo from '../../images/NFPA-logo.png';
import hood from '../../images/hood-sample.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import bg from '../../images/man-doing-professional-home-cleaning-service.jpg';

export default function Services() {
    return (
        <>
            <div className="container-fluid p-5 bg-primary text white text-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
                <h1 className="text-white d-flex p-4">Our Services</h1>
                {/* <p  className="text-white d-flex p-2"></p> */}
            </div>

            <div className="container">
                <div className="row">
                    <div className="col w-50 p-5 m-3">
                        <h2><strong>Professional Cleaning Services for Your Business</strong></h2>
                        <br/>
                        <p>Experience our top-tier commercial cleaning services, including kitchen hood and exhaust cleaning, as well as power washing, across Ontario (including GTA). We ensure your business adheres to all <strong>NFPA 94</strong> and fire Marshall regulations, providing you with peace of mind and a spotless environment. </p>
                        <br/><br/>
                        <div className="text-center">
                            <Image
                            alt="NFPA 94" 
                            src={logo}
                            width="300" 
                            height="350"
                            />
                        </div>
                        
                        <br/>

                    </div>
                    <div className="col w-50 p-5 m-3">
                        <div className="text-center">
                            <Image 
                            alt="Hood Cleaning" 
                            src={hood}
                            width="420" 
                            height="300"
                            />
                        </div>
                        
                        <br/> 
                        <br/>
                        <ul className="list-inline">
                            <li className="list-inline-item"><strong className="text-danger">Commercial Kitchen Cleaning</strong> - Ensures a hygienic and safe environment by thoroughly cleaning all kitchen surfaces, equipment, and areas to meet health and safety standards. </li>
                            <br/><br/>
                            <li className="list-inline-item"><strong className="text-danger">Filter cleaning and maintenance</strong> - Regularly cleans and maintains filers to ensure optimal performance and air quality, preventing the buildup of grease and other contaminants that can pose fire hazards.</li>
                            <br/><br/>
                            <li className="list-inline-item"><strong className="text-danger">Hood, Vent, Exhaust Cleaning</strong> - Involves the thorough cleaning of kitchen hoods, vents, and exhaust systems to remove grease and other residues, ensuring proper ventilation and reducing the risk of fire.</li>
                            <br/><br/>
                            <li className="list-inline-item"><strong className="text-danger">Grease traps cleaning</strong> - Regularly cleans and maintains filters to ensure optimal performance and air quality, preventing the buildup of grease and other contaminants that can pose fire hazards.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};