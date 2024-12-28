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
            <div id="gallery" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#gallery" data-bs-slide-to="0" className="active"></li>
                    <li data-target="#gallery" data-bs-slide-to="1"></li>
                    <li data-target="#gallery" data-bs-slide-to="2"></li>
                    <li data-target="#gallery" data-bs-slide-to="3"></li>
                    <li data-target="#gallery" data-bs-slide-to="4"></li>
                    <li data-target="#gallery" data-bs-slide-to="5"></li>
                </ol>
                <div className="carousel-inner text-center p-3 m-4" role="listbox">
                    <div className="carousel-item active">
                        <Image
                            alt="Before"
                            src={b4}
                            width={600}
                            height={400}
                            
                        />
                    </div>
                    <div className="carousel-item ">
                        <Image
                            alt="After"
                            src={aft1}
                            width={600}
                            height={400}
                            
                        />
                    </div>
                    <div className="carousel-item ">
                        <Image
                            alt="Before"
                            src={b4_2}
                            width={600}
                            height={400}
                            
                        />
                    </div>
                    <div className="carousel-item ">
                        <Image
                            alt="After"
                            src={aft2}
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                            alt="Before"
                            src={b4_3}
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                            alt="After"
                            src={aft3}
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#gallery" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#gallery" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        
        </>
    )
}; 