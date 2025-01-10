// React component Services 
import Image from "next/image";
import logo from '../../images/NFPA-logo.png';
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
                            <h2 className="pb-4"><strong>Professional Cleaning Services for Your Business</strong></h2>
                            <br/>
                            <p className="lead fs-4">
                                Elevate your business operations with our top-tier commercial cleaning services available across Ontario, including the Greater Toronto Area (GTA). Our dedication to excellence ensures strict adherence to <strong>NFPA 96 and Fire Marshal standards</strong>, safeguarding your establishment against hazards while maintaining an environment of utmost cleanliness. Experience the professional advantage of a spotless, compliant workplace with Hydro Squad!
                            </p>
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
                            <h2 className="pb-4"><strong>Transform Your Kitchen with Our Professional Cleaning Services!</strong></h2>
                            <br/>
                            <div className="card mb-4 rounded-4 p-2" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-lg-4 text-center">
                                        <Image
                                        className="img-fluid p-2 pt-3"
                                        alt="Hood Cleaning" 
                                        src={clean}
                                        width="200" 
                                        height="200"
                                        />
                                    </div>
                                    <div className="col-lg-8 bg-danger rounded-4">
                                        <div className="card-body p-3 text-white">
                                            <h6 className="card-title"><strong>Commercial Kitchen Cleaning</strong></h6>
                                            <p className="card-text">We ensure your kitchen remains spotless, safe, and compliant with our thorough deep-cleaning services. We meticulously clean all surfaces, equipment, and workspaces, keeping your operation at peak condition.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 rounded-4 p-2" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-lg-4 text-center">
                                        <Image
                                        className="img-fluid p-2 pt-3"
                                        alt="Hood Cleaning" 
                                        src={maintenance}
                                        width="200" 
                                        height="200"
                                        />
                                    </div>
                                    <div className="col-lg-8 bg-danger rounded-4">
                                        <div className="card-body p-3 text-white">
                                            <h6 className="card-title"><strong>Building on that clean foundation,Filter Cleaning & Maintenance</strong></h6>
                                            <p className="card-text">We understand the importance of clean air and safety in your business. Our service involves cleaning and maintaining your filters to enhance air quality and protect against fire hazards, ensuring a healthier environment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 rounded-4 p-2" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-lg-4 text-center">
                                        <Image
                                        className="img-fluid p-2 pt-3"
                                        alt="Hood Cleaning" 
                                        src={fire}
                                        width="200" 
                                        height="200"
                                        />
                                    </div>
                                    <div className="col-lg-8 bg-danger rounded-4">
                                        <div className="card-body p-3 text-white">
                                            <h6 className="card-title"><strong>Continuing with safety in mind,Hood, Vent & Exhaust Cleaning</strong></h6>
                                            <p className="card-text">We prioritize your kitchen's safety and efficiency. Our thorough cleaning of hoods, vents, and exhaust systems tackles grease buildup and fire risks head-on, ensuring your establishment benefits from proper ventilation and a secure atmosphere.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 rounded-4 p-2" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-lg-4 text-center">
                                        <Image
                                        className="img-fluid p-3 pt-3"
                                        alt="Hood Cleaning" 
                                        src={fat}
                                        width="200" 
                                        height="200"
                                        />
                                    </div>
                                    <div className="col-lg-8 bg-danger rounded-4">
                                        <div className="card-body p-3 text-white">
                                            <h6 className="card-title"><strong>To complete the cycle of kitchen maintenance,Grease Trap Cleaning</strong></h6>
                                            <p className="card-text">We recognize how vital it is for your kitchen to run both safely and smoothly. Our cleaning service for grease traps removes buildup, preventing blockages and mitigating fire risks, thus maintaining your kitchen's health and safety.</p>
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