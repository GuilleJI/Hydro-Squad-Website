// React component About Us 
import Image from "next/image"
import badge from "../../images/twitter-verified-badge.1024x1024.png"
import safety from "../../images/safety-certificate-fill-system.927x1024.png"
import mind from "../../images/brain.1024x911.png"
import kitchen from "../../images/benjamin-lehman-Kyqu9GSsV9Q-unsplash.jpg"
import tim from "../../images/Tim hortons.png"
import churchChicken from "../../images/Church chicken.png"
import popeyes from "../../images/popeyes-logo.png"
import PizzaHut from "../../images/Pizza-Hut-Logo.png"
import PapaJohns from "../../images/Papa-Johns.png"
import Burrito from "../../images/Burrito-Boyz-Logo-300x276.png"
import pizzaPizza from "../../images/Pizza Pizza.png"
import dominos from "../../images/dominos-logo-400x200-png.png"
import team from "../../images/FB_IMG_1711993919299.jpg"

export default function About() {
    return (
        <>
        {/*  About Us Page */}
            <div className="body bg-dark text-white pb-5" style={{ minHeight: "100vh" }}> {/*Background color and text color */}
                {/* Hero Section */}
                <div className="container-fluid position-relative p-5 text white text-start" style={{ backgroundImage: `url(${kitchen.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",maxHeight: "480px"}}> {/*Background image for the header */}
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div> {/*Added to make the text more visible and position-absolute top-0 start-0 w-100 h-100 was added to make the background color cover the whole image */}
                    <br/><br/><br/><br/><br/>
                    <div className="position-relative"> {/* Added a div to make the text more visible */}
                        <h1 className="text-white d-flex py-5">About Hydro Squad</h1> 
                    </div>
                </div>
                <br/><br/>
                {/*  About Us Section */}
                <div className="container py-5">
                    <div className="row g-4">
                        {/* Cards for About Us Section */}
                        {/* Card 1 */}
                        <div className="col-12 col-md-6 col-lg-4"> {/* Bootstrap Grid System */}
                            <div className="card h-100 p-3 m-3 border border-4 border-light rounded-5 text-dark " style={{ backgroundColor: "rgba(238, 65, 22, 0.9)" }}> {/* Bootstrap Card */}
                                <h5 className="card-title text-center py-3"><strong>Trusted Service Since 2015</strong></h5>
                                <div className="p-3 bg-light border border-dark border-3 rounded-5 d-flex justify-content-center align-items-center" style={{ height: "250px" }}> 
                                    <Image
                                        alt="Hydro Squad Verified Badge"
                                        src={badge}
                                        className="img-fluid h-100 w-100"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className="card-body p-2">
                                    <p className="card-text py-2 fw-bold">Since starting Hydro Squad back in 2015, we've been all about earning your trust and making sure you're happy with our work. We cover all of southern Ontario, focusing on giving the best clean to places like restaurants, nursing homes, hospitals, schools, mall food courts, and those tough commercial ovens. No job is too big or small for us - we're dedicated to doing it right!</p>
                                    
                                    
                                </div>
                            </div>  
                        </div>

                        {/* Card 2 */}
                        <div className="col-12 col-md-6 col-lg-4"> {/*Bootstrap Grid System */}
                            <div className="card h-100 p-3 m-3 border border-4 border-light rounded-5 bg-warning text-dark text-bg-secondary"> {/* Bootstrap Card */}
                                <h5 className="card-title text-center py-3"><strong>Safety & Compliance First</strong></h5>
                                <div className="p-3 bg-light border border-dark border-3 rounded-5 d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                                <Image 
                                    alt = "Safety Certificate"
                                    src={safety}
                                    className="img-fluid h-100 w-100"
                                    style={{ objectFit: "contain" }}
                                />
                                </div>
                                <div className="card-body p-2">
                                    <p className="card-text py-2 fw-bold">Customer satisfaction is our priority, and we take pride in our meticulous work. We strictly adhere to fire codes and insurance standards, providing essential cleaning services that reduce fire risks and extend equipment lifespan. With us, safety and efficiency are never compromised.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-12 col-md-6 col-lg-4"> {/*Bootstrap Grid System */}
                            <div className="card h-100 p-3 m-3 border border-4 border-light rounded-5 text-dark" style={{ backgroundColor: "rgba(73, 172, 43, 0.9)" }}> {/* Bootstrap Card */}
                                <h5 className="card-title text-center py-3"><strong>Expert Service & Peace of Mind</strong></h5>
                                <div className="p-3 bg-light border border-dark border-3 rounded-5 d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                                    <Image 
                                        alt="Peace of Mind"
                                        src={mind}
                                        className="img-fluid h-100 w-100"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className="card-body p-2">
                                    <p className="card-text py-2 fw-bold">Our highly trained team is dedicated to identifying potential issues and addressing them promptly. We ensure the highest level of safety and compliance for your kitchen exhaust systems. Trust us to keep your equipment clean and safe, giving you peace of mind with every service.</p>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>

                <div className="container p-4">
                    <div className="row">
                        <div className="col-12 col-md-6 p-2">
                            <h2>
                                Why Choose Hydro Squad?
                            </h2>
                            <div className="d-flex justify-content-start">
                                <div className="border-top border-5 my-3 border-primary text-center" style={{ width: "275px" }}>
                                </div>
                            </div>
                            <br/>
                            <p className="lead">At Hydro Squad, we don't just clean; we care. With a genuine passion for what we do, we've mastered cleaning across various settings, always pushing for innovation with eco-friendly tech. We're transparent, showing you our work through photos, because we believe in honesty over hype. Choosing us means opting for a team genuinely committed to your satisfaction, where every service reflects our dedication to doing things right.</p>
                        </div>
                        <div className="col-12 col-md-6 p-2">
                            <div className="text-center">
                                <Image
                                    className="img-fluid rounded-4"
                                    alt="Our Team" 
                                    src={team}
                                    width="800" 
                                    height="850"
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            {/*  Our Valued Loyal Customers Section */}
                <div className="p-5 pb-5">     
                    <div className="text-center">
                        <h2><strong>Our Valued Loyal Customers</strong></h2>
                    </div> 
                    <div className="d-flex justify-content-center">
                        <div className="border-top border-5 border-primary my-3" style={{ width: "175px" }}></div>
                    </div>
                </div>
                <div className="container p-4">
                    <div className="container p-5 text-center bg-light rounded-5">
                        <div className="row col-md row-md-4 g-5 ">
                            <div className="col-md">
                                <Image 
                                    src={tim}
                                    alt="Tim Hortons"
                                    width="180"
                                    height="160"
                                />
                            </div>
                            <div className="col-md">
                                <Image 
                                    src={churchChicken}
                                    alt="Church Chicken"
                                    width="190"
                                    height="160"
                                />
                            </div>
                            <div className="col-md">
                                <Image 
                                    src={popeyes}
                                    alt="Popeyes"
                                    width="160"
                                    height="160"
                                />
                            </div>
                            <div className="col-md">
                                <Image 
                                    src={PizzaHut}
                                    alt="Pizza Hut"
                                    width="210"
                                    height="160"
                                />
                            </div>
                            <div className="col-md">
                                <Image 
                                    src={PapaJohns}
                                    alt="Papa Johns"
                                    width="200"
                                    height="120"
                                />
                            </div>
                            <div className="col-md">
                                <Image 
                                    src={Burrito}
                                    alt="Burrito Boyz"
                                    width="210"
                                    height="180"
                                />
                            </div>
                            <div className="col-md">
                                <Image 
                                    src={pizzaPizza}
                                    alt="Pizza Pizza"
                                    width="190"
                                    height="160"
                                />
                            </div>
                            <div className="col-md">
                                <Image 
                                    src={dominos}
                                    alt="Dominos"
                                    width="190"
                                    height="160"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};