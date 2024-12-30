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
            
            <div className="container-fluid p-5 bg-primary text white text-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} >
                <h1 className="text-white">Our Photo Gallery</h1>
                <p  className="text-white">Before and After</p>
            </div>
            <br/><br/>
            <div>
                <p className="container mt-5" style={{ maxWidth: "1000px"}}>
                    <strong>They say a picture speaks volumes</strong>. At Hydro Squad, we believe in complete transparency, which is why we take detailed digital photos throughout every restaurant hood and kitchen exhaust cleaning. Once the job is finished, we share a link so our customers can easily view the results. Want to see the difference for yourself? Use the slider below to compare our 'before' and 'after' photos!
                </p>
            </div>
            <br/><br/>

            {/* Carousel for the gallery */}
            <div id="gallery" className="carousel slide carousel-fade mx-auto" data-bs-ride="carousel" style={{ maxWidth: "1000px", width: "100%"}}>
                {/* Indicators */}
                <div className="carousel-indicators bg-primary.bg-gradient bg-dark">
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                {/* Carousel inner */}
                <div className="carousel-inner text-center p-6" role="listbox">
                    {/* Before and After images */}
                    <div className="carousel-item active">
                        <Image
                            className="d-block mx-auto img-fluid"
                            alt="Before"
                            src={b4}
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
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="bg-black  bg-opacity-50">After</h3>
                        </div>
                    </div>
                </div>
                {/* Carousel controls */}
                <a className="carousel-control-prev p-3 bg-dark" href="#gallery" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next p-3 bg-dark" href="#gallery" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
        
        </>
    )
}; 