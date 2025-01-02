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
            <div className="bg-dark text-white">
                <div className="container-fluid p-5 bg-primary text white text-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
                    <h1 className="text-white d-flex p-4">Our Services</h1>
                    {/* <p  className="text-white d-flex p-2"></p> */}
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col w-50 p-5 m-3">
                            <h2><strong>Professional Cleaning Services for Your Business</strong></h2>
                            <br/>
                            <p className="lead">Experience our top-tier commercial cleaning services, including kitchen hood and exhaust cleaning, as well as power washing, across Ontario (including GTA). We ensure your business adheres to all <strong>NFPA 94</strong> and fire Marshall regulations, providing you with peace of mind and a spotless environment. </p>
                            <br/><br/>
                            <div className="text-center bg-light rounded-4 p-2">
                                <Image
                                className="img-fluid"
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
                                className="rounded-4 img-fluid"
                                alt="Hood Cleaning" 
                                src={hood}
                                width="470" 
                                height="300"
                                />
                            </div>
                            <br/> 
                            <br/>
                            <h2><strong>Transform Your Kitchen with Our Professional Cleaning Services!</strong></h2>
                            <br/>
                            <ul className="list-inline">
                                <li className=" lead list-inline-item"><strong className="text-danger">✨ Commercial Kitchen Cleaning</strong> - We Keep your kitchen spotless, safe, and up to code with our deep-cleaning services for all surfaces, equipment, and workspaces. </li>
                                <br/><br/>
                                <li className="lead list-inline-item"><strong className="text-danger">🌬️ Filter Cleaning & Maintenance</strong> -Breathe easier and stay fire-safe! We clean and maintain filters to improve air quality and prevent grease buildup.</li>
                                <br/><br/>
                                <li className="lead list-inline-item"><strong className="text-danger">🔥 Hood, Vent & Exhaust Cleaning</strong> - Eliminate grease and fire hazards with our thorough cleaning of hoods, vents, and exhaust systems—ensuring proper ventilation and safety.</li>
                                <br/><br/>
                                <li className="lead list-inline-item"><strong className="text-danger">💧 Grease Trap Cleaning</strong> - Avoid clogs, odors, and compliance issues with expert grease trap cleaning and maintenance that keeps your kitchen running smoothly.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};