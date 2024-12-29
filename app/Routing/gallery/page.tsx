// React component Gallery 
import React from "react";
import Image from "next/image";
import b4 from "../../images/before1.jpg";
import aft1 from "../../images/after1.jpg";
import b4_2 from "../../images/b4_2.jpg";
import aft2 from "../../images/aft-2.jpg";
import b4_3 from "../../images/Before Cleaning - Copy.jpg";
import aft3 from "../../images/After cleaning - Copy.jpg";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Gallery() {
    return (
        <>
            <br/><br/><br/>
            <div id="gallery" className="carousel slide carousel-fade mx-auto" data-bs-ride="carousel" style={{ width: "1200px" }}>
                <div className="carousel-indicators bg-primary.bg-gradient">
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#gallery" data-bs-slide-to="5" aria-label="Slide 6"></button>

                </div>
                <div className="carousel-inner text-center p-6" role="listbox">
                    <div className="carousel-item active">
                        <Image
                            className="d-block mx-auto img-fluid"
                            alt="Before"
                            src={b4}
                            style={{ width: "1200px", height: "600px", objectFit: "cover" }}
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
                            style={{ width: "1200px", height: "600px", objectFit: "cover" }}
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
                            style={{ width: "1200px", height: "600px", objectFit: "cover" }}
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
                            style={{ width: "1200px", height: "600px", objectFit: "cover" }}
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
                            style={{ width: "1200px", height: "600px", objectFit: "cover" }}
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
                            style={{ width: "1200px", height: "600px", objectFit: "cover" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="bg-black  bg-opacity-50">After</h3>
                        </div>
                    </div>
                </div>
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