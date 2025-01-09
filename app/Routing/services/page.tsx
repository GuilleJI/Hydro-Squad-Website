// React component Services 
import Image from "next/image";
import logo from '../../images/NFPA-logo.png';
import hood from '../../images/hood-sample.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import bg from '../../images/man-doing-professional-home-cleaning-service.jpg';
import clean from '../../images/cleaner.png';
import maintenance from '../../images/maintenance.png';
import fire from '../../images/flammable.png';
import fat from '../../images/trans-fats-free.png';

export default function Services() {
    return (
        <>
            <div className="bg-dark text-white">
                <div className="container-fluid p-5 text white text-center" style={{ backgroundImage: `url(${bg.src})`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", maxHeight: "480px"}}>
                    <br/><br/><br/><br/>
                    <h1 className="text-white d-flex py-5">Our Services</h1>
                    {/* <p  className="text-white d-flex p-2"></p> */}
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col w-50 p-5 m-3">
                            <h2><strong>Professional Cleaning Services for Your Business</strong></h2>
                            <br/>
                            <p className="lead">Experience our top-tier commercial cleaning services, including kitchen hood and exhaust cleaning, as well as power washing, across Ontario (including GTA). We ensure your business adheres to all <strong>NFPA 94</strong> and fire Marshall regulations, providing you with peace of mind and a spotless environment. </p>
                            <br/><br/>
                            <div className="text-start text-center ">
                                <Image
                                className="img-fluid bg-light p-4 rounded-4"
                                alt="NFPA 94" 
                                src={logo}
                                width="300" 
                                height="350"
                                />
                            </div>
                            
                            <br/>

                        </div>
                        <div className="col w-50 p-5 m-3">
                            {/* <div className="text-center">
                                <Image 
                                className="rounded-4 img-fluid"
                                alt="Hood Cleaning" 
                                src={hood}
                                width="470" 
                                height="300"
                                />
                            </div> */}
                            <h2><strong>Transform Your Kitchen with Our Professional Cleaning Services!</strong></h2>
                            <br/>
                            {/* <ul className="list-inline">
                                <li className=" lead list-inline-item"><strong className="text-danger">✨ Commercial Kitchen Cleaning</strong> - We Keep your kitchen spotless, safe, and up to code with our deep-cleaning services for all surfaces, equipment, and workspaces. </li>
                                <br/><br/>
                                <li className="lead list-inline-item"><strong className="text-danger">🌬️ Filter Cleaning & Maintenance</strong> -Breathe easier and stay fire-safe! We clean and maintain filters to improve air quality and prevent grease buildup.</li>
                                <br/><br/>
                                <li className="lead list-inline-item"><strong className="text-danger">🔥 Hood, Vent & Exhaust Cleaning</strong> - Eliminate grease and fire hazards with our thorough cleaning of hoods, vents, and exhaust systems—ensuring proper ventilation and safety.</li>
                                <br/><br/>
                                <li className="lead list-inline-item"><strong className="text-danger">💧 Grease Trap Cleaning</strong> - Avoid clogs, odors, and compliance issues with expert grease trap cleaning and maintenance that keeps your kitchen running smoothly.</li>
                            </ul> */}
                            <div className="card mb-4 rounded-4 p-2" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 text-center">
                                        <Image
                                        className="img-fluid p-3"
                                        alt="Hood Cleaning" 
                                        src={clean}
                                        width="200" 
                                        height="200"
                                        />
                                    </div>
                                    <div className="col-md-8 bg-danger rounded-4">
                                        <div className="card-body p-3 text-white">
                                            <h5 className="card-title"><strong>Commercial Kitchen Cleaning</strong></h5>
                                            <p className="card-text">We Keep your kitchen spotless, safe, and up to code with our deep-cleaning services for all surfaces, equipment, and workspaces.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 rounded-4 p-2" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 text-center">
                                        <Image
                                        className="img-fluid p-3"
                                        alt="Hood Cleaning" 
                                        src={maintenance}
                                        width="200" 
                                        height="200"
                                        />
                                    </div>
                                    <div className="col-md-8 bg-danger rounded-4">
                                        <div className="card-body p-3 text-white">
                                            <h5 className="card-title"><strong>Filter Cleaning & Maintenance</strong></h5>
                                            <p className="card-text">Breathe easier and stay fire-safe! We clean and maintain filters to improve air quality and prevent grease buildup.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 rounded-4 p-2" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 text-center">
                                        <Image
                                        className="img-fluid p-3"
                                        alt="Hood Cleaning" 
                                        src={fire}
                                        width="200" 
                                        height="200"
                                        />
                                    </div>
                                    <div className="col-md-8 bg-danger rounded-4">
                                        <div className="card-body p-3 text-white">
                                            <h5 className="card-title"><strong>Hood, Vent & Exhaust Cleaning</strong></h5>
                                            <p className="card-text">Eliminate grease and fire hazards with our thorough cleaning of hoods, vents, and exhaust systems—ensuring proper ventilation and safety.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 rounded-4 p-2" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 text-center">
                                        <Image
                                        className="img-fluid p-3"
                                        alt="Hood Cleaning" 
                                        src={fat}
                                        width="200" 
                                        height="200"
                                        />
                                    </div>
                                    <div className="col-md-8 bg-danger rounded-4">
                                        <div className="card-body p-3 text-white">
                                            <h5 className="card-title"><strong>Grease Trap Cleaning</strong></h5>
                                            <p className="card-text">Avoid clogs, odors, and compliance issues with expert grease trap cleaning and maintenance that keeps your kitchen running smoothly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

// Reference: 
/* 
Image icons are imported from flaticon.com attributed from Freepik, Graphix's Art, and Nuricon
*/