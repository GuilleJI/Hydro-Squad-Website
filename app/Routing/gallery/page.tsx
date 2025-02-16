// React component Gallery 
import React from "react";
import Image from "next/image";
import b4 from "../../images/before1.jpg";
import aft1 from "../../images/after1.jpg";
import b4_2 from "../../images/b4_2.jpg";
import aft2 from "../../images/aft-2.jpg";
import b4_3 from "../../images/Before Cleaning - Copy.jpg";
import aft3 from "../../images/After cleaning - Copy.jpg";
import bg from "../../images/Kitchen.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../gallery/carousel.css";


export default function Gallery() {
    return (
        <>
            <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
                <div className="container-fluid p-5 text white text-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", maxHeight: "480px"}}>
                    <br/><br/><br/><br/><br/>
                    <h1 className="text-white d-flex p-2">Our Gallery</h1>
                </div>
                <br/>
                {/* Before/After section */}
                <div className="p-5 pb-5">     
                    <div className="text-center">
                        <h2><strong><span className="border-bottom border-5 border-primary p-3">Before/After</span></strong></h2>
                    </div>    
                </div>

                {/* Carousel for the gallery */}
                <div id="gallery" className="carousel slide carousel-fade mx-auto" data-bs-ride="carousel" style={{ maxWidth: "800px", width: "100%"}}>
                    {/* Indicators */}
                    <div className="carousel-indicators bg-primary.bg-gradient">
                        <button type="button" data-bs-target="#gallery" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#gallery" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#gallery" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#gallery" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#gallery" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#gallery" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    {/* Carousel inner */}
                    <div className="carousel-inner text-center p-6 rounded-4" role="listbox">
                        {/* Before and After images */}
                        <div className="carousel-item active">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="Before"
                                src={b4}
                                style={{ filter: 'brightness(85%)'}}
                            />
                            {/* <div className="carousel-caption d-none d-sm-block">
                                <h3 className="bg-black  bg-opacity-50">Before</h3>
                            </div> */}
                        </div>
                        <div className="carousel-item ">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="After"
                                src={aft1}
                                style={{ filter: 'brightness(85%)'}}
                            />
                            {/* <div className="carousel-caption d-none d-sm-block">
                                <h3 className="bg-black  bg-opacity-50">After</h3>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="Before"
                                src={b4_2}
                                style={{ filter: 'brightness(85%)'}}
                            />
                            {/* <div className="carousel-caption d-none d-sm-block">
                                <h3 className="bg-black  bg-opacity-50">Before</h3>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="After"
                                src={aft2}
                                style={{ filter: 'brightness(85%)'}}
                            />
                            {/* <div className="carousel-caption d-none d-sm-block">
                                <h3 className="bg-black  bg-opacity-50">After</h3>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="Before"
                                src={b4_3}
                                style={{ filter: 'brightness(80%)'}}
                            />
                            {/* <div className="carousel-caption d-none d-sm-block">
                                <h3 className="bg-black  bg-opacity-50">Before</h3>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="After"
                                src={aft3}
                                style={{ filter: 'brightness(85%)'}}
                            />
                            {/* <div className="carousel-caption d-none d-sm-block">
                                <h3 className="bg-black  bg-opacity-50">After</h3>
                            </div> */}
                        </div>
                    </div>
                    {/* Carousel controls */}
                    <a className="carousel-control-prev p-3 rounded-start-4 " href="#gallery" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next p-3 rounded-end-4" href="#gallery" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
                <br/>
                <div>
                    <p className=" lead container mt-5" style={{ maxWidth: "800px"}}>
                        See the transformation with Hydro Squad. We capture every stage of your restaurant hood and kitchen exhaust cleaning in detailed digital photos. Swipe through our Before and After pictures to witness the change - from start to finish. Transparency is our promise; clarity is your result.
                    </p>
                </div>
                <br/>
                <br/><br/>
            </div>    
        </>
    )
}; 