// React component About Us 
import Image from "next/image"
import badge from "../../images/twitter-verified-badge.1024x1024.png"
import safety from "../../images/safety-certificate-fill-system.927x1024.png"
import mind from "../../images/brain.1024x911.png"

export default function About() {
    return (
        <>
        <div className="body bg-dark text-white" style={{ minHeight: "100vh" }}>
            <div className="container-fluid p-5 text white text-start" style={{maxHeight: "450px"}}>
                <br/><br/><br/><br/><br/>
                <h1 className="text-white d-flex py-5">About Hydro Squad</h1> 
            </div>
            <br/><br/>
            <div className="container">
                <div className="row text-center">
                    <div className="card w-30 col-sm p-3 m-3">
                        <h5 className="card-body">Trusted Since 2015</h5>
                        <div className="p-3">
                            <Image
                            src={badge}
                            className="img-fluid"
                            style={{ maxWidth: "100px", height: "auto" }}
                            />
                        </div>
                        <br/>
                        <p className="card-text">Established in 2015, we've built our reputation on trust and customer satisfaction. Serving all of southern Ontario, we specialize in top-tier cleaning services for restaurants, nursing homes, hospitals, schools, mall food courts, and commercial ovens. No matter the job, we've commited to delivering excellence.</p>
                    </div>
                    <div className="card w-30 col-sm p-3 m-3">
                        <h5 className="card-body">Safety & Compliance First</h5>
                        <div className="p-3">
                            <Image 
                            src={safety}
                            className="img-fluid"
                            style={{ maxWidth: "100px", height: "auto" }}
                            />
                        </div>
                        <br/>
                        <p className="card-text">Customer satisfaction is our priority, and we take pride in our meticulous work. We strictly adhere to fire codes and insurance standards, providing essential cleaning services that reduce fire risks and extend equipment lifespan. With us, safety and efficiency are never compromised.</p>
                    </div>
                    <div className="card w-30 col-sm p-3 m-3">
                        <h5 className="card-body">Expert Service & Peace of Mind</h5>
                        <div className="p-3">
                            <Image 
                            src={mind}
                            className="img-fluid"
                            style={{ maxWidth: "100px", height: "auto" }}
                            />
                        </div>
                        <br/>
                        <p className="card-text">Our highly trained team is dedicated to identifying potential issues and addressing them promptly. We ensure the highest level of safety and compliance for your kitchen exhaust systems. Trust us to keep your equipment clean and safe, giving you peace of mind with every service.</p>
                    </div>
                </div>
            </div>         
        </div>
        </>
    )
};