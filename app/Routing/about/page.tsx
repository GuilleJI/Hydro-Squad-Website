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

export default function About() {
    return (
        <>
        {/*  About Us Page */}
            <div className="body bg-dark text-white pb-5" style={{ minHeight: "100vh" }}> {/*Background color and text color */}
                {/* Hero Section */}
                <div className="container-fluid p-5 text white text-start" style={{ backgroundImage: `url(${kitchen.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",maxHeight: "480px"}}>
                    <br/><br/><br/><br/><br/>
                    <h1 className="text-white d-flex py-5">About Hydro Squad</h1> 
                </div>
                <br/><br/>
                {/*  About Us Section */}
                <div className="container py-5">
                    <div className="row g-4">
                        {/* Cards for About Us Section */}
                        {/* Card 1 */}
                        <div className="col-12 col-md-6 col-lg-4"> {/* Bootstrap Grid System */}
                            <div className="card h-100 p-3 m-3 border border-4 border-light rounded-4 bg-secondary text-bg-secondary"> {/* Bootstrap Card */}
                                <h5 className="card-title text-center py-3"><strong>Trusted Service Since 2015</strong></h5>
                                <div className="p-3 bg-light rounded-5 d-flex justify-content-center align-items-center" style={{ height: "250px" }}> 
                                    <Image
                                        alt="Hydro Squad Verified Badge"
                                        src={badge}
                                        className="img-fluid h-100 w-100"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className="card-body p-2">
                                    <p className="card-text py-2"><strong>Established in 2015</strong>, we've built our reputation on trust and customer satisfaction. Serving all of southern Ontario, we specialize in <strong>top-tier cleaning services</strong> for restaurants, nursing homes, hospitals, schools, mall food courts, and commercial ovens. No matter the job, we've <strong>commited to delivering excellence</strong>.</p>
                                </div>
                            </div>  
                        </div>

                        {/* Card 2 */}
                        <div className="col-12 col-md-6 col-lg-4"> {/*Bootstrap Grid System */}
                            <div className="card h-100 p-3 m-3 border border-4 border-light rounded-4 bg-secondary text-bg-secondary"> {/* Bootstrap Card */}
                                <h5 className="card-title text-center py-3"><strong>Safety & Compliance First</strong></h5>
                                <div className="p-3 bg-light rounded-5 d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                                <Image 
                                    alt = "Safety Certificate"
                                    src={safety}
                                    className="img-fluid h-100 w-100"
                                    style={{ objectFit: "contain" }}
                                />
                                </div>
                                <div className="card-body p-2">
                                    <p className="card-text py-2"><strong>Customer satisfaction is our priority</strong>, and we take pride in our meticulous work. We strictly adhere to <strong>fire codes and insurance standards</strong>, providing essential cleaning services that <strong>reduce fire risks</strong> and extend equipment lifespan. With us, safety and efficiency are never compromised.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-12 col-md-6 col-lg-4"> {/*Bootstrap Grid System */}
                            <div className="card h-100 p-3 m-3 border border-4 border-light rounded-4 bg-secondary text-bg-secondary"> {/* Bootstrap Card */}
                                <h5 className="card-title text-center py-3"><strong>Expert Service & Peace of Mind</strong></h5>
                                <div className="p-3 bg-light rounded-5 d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                                    <Image 
                                        alt="Peace of Mind"
                                        src={mind}
                                        className="img-fluid h-100 w-100"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className="card-body p-2">
                                    <p className="card-text py-2">Our <strong>highly trained team</strong> is dedicated to identifying potential issues and addressing them promptly. We ensure the highest level of <strong>safety and compliance</strong> for your kitchen exhaust systems. Trust us to keep your equipment clean and safe, giving you <strong>peace of mind</strong> with every service.</p>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            <div className="p-5 pb-5">     
                <div className="text-center">
                    <h2><strong>Our Valued Loyal Customers...</strong></h2>
                </div>    
            </div>
                <div className="container p-4 text-center bg-light rounded-5">
                    <div className="row row-md g-5 ">
                        
                        <div className="col-md">
                            <Image 
                                src={tim}
                                alt="Tim Hortons"
                                width="225"
                                height="200"
                            />
                        </div>
                        <div className="col-md">
                            <Image 
                                src={churchChicken}
                                alt="Church Chicken"
                                width="230"
                                height="200"
                            />
                        </div>
                        <div className="col-md">
                            <Image 
                                src={popeyes}
                                alt="Popeyes"
                                width="215"
                                height="200"
                            />
                        </div>
                        <div className="col-md">
                            <Image 
                                src={PizzaHut}
                                alt="Pizza Hut"
                                width="270"
                                height="180"
                            />
                        </div>
                        <div className="col-md">
                            <Image 
                                src={PapaJohns}
                                alt="Papa Johns"
                                width="260"
                                height="180"
                            />
                        </div>
                        <div className="col-md">
                            <Image 
                                src={Burrito}
                                alt="Burrito Boyz"
                                width="230"
                                height="200"
                            />
                        </div>
                        <div className="col-md">
                            <Image 
                                src={pizzaPizza}
                                alt="Pizza Pizza"
                                width="230"
                                height="200"
                            />
                        </div>
                        <div className="col-md">
                            <Image 
                                src={dominos}
                                alt="Dominos"
                                width="230"
                                height="200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};