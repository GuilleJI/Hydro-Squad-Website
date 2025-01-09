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
//import "../gallery/carousel.css";


export default function Gallery() {
    return (
        <>
            <div className="bg-dark text-white">
                <div className="container-fluid p-5 text white text-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", maxHeight: "480px"}}>
                    <br/><br/><br/><br/><br/>
                    <h1 className="text-white d-flex p-2">Our Photo Gallery</h1>
                </div>
                <br/><br/>
                <div>
                    <p className=" lead container mt-5" style={{ maxWidth: "800px"}}>
                        <strong>They say a picture speaks volumes</strong>. At Hydro Squad, we believe in complete transparency, which is why we take detailed digital photos throughout every restaurant hood and kitchen exhaust cleaning. Once the job is finished, we share a link so our customers can easily view the results. Want to see the difference for yourself? Use the slider below to compare our 'before' and 'after' photos!
                    </p>
                </div>
                <br/><br/>

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
                                style={{ filter: 'brightness(75%)'}}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="bg-black  bg-opacity-50">Before</h3>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="After"
                                src={aft1}
                                style={{ filter: 'brightness(75%)'}}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="bg-black  bg-opacity-50">After</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="Before"
                                src={b4_2}
                                style={{ filter: 'brightness(75%)'}}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="bg-black  bg-opacity-50">Before</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="After"
                                src={aft2}
                                style={{ filter: 'brightness(75%)'}}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="bg-black  bg-opacity-50">After</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="Before"
                                src={b4_3}
                                style={{ filter: 'brightness(75%)'}}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="bg-black  bg-opacity-50">Before</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image
                                className="d-block mx-auto img-fluid"
                                alt="After"
                                src={aft3}
                                style={{ filter: 'brightness(75%)'}}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="bg-black  bg-opacity-50">After</h3>
                            </div>
                        </div>
                    </div>
                    {/* Carousel controls */}
                    <a className="carousel-control-prev p-3 bg-dark rounded-start-4 " href="#gallery" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next p-3 bg-dark rounded-end-4" href="#gallery" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
                <br/><br/>
            </div>    
        </>
    )
}; 