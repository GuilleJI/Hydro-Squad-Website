import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/* // Add a footer for the application */}
            <footer className="text-center text-white" style={{backgroundColor: "rgb(14, 46, 100)"}}>
                {/* // Add a container for the footer */}
                <div className="container">
                    {/* // Add a section for the footer */}
                    <section>
                        {/* // Add a row for the footer */}
                        <div className="row text-center d-flex justify-content-center pt-5">

                            {/* // Add a link to the home page */}
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                <Link href="/" className="text-white">Home</Link>
                                </h6>
                            </div>


                            {/* // Add a link to the services page */}
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                <Link href="/Routing/services" className="text-white">Services</Link>
                                </h6>
                            </div>


                            {/* // Add a link to the gallery page */}
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                <Link href="/Routing/gallery" className="text-white">Gallery</Link>
                                </h6>
                            </div>


                            {/* // Add a link to the about page */}
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                <Link href="/Routing/about" className="text-white">About Us</Link>
                                </h6>
                            </div>


                            {/* // Add a link to the contact page */}
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                <Link href="/Routing/contact" className="text-white">Contact</Link>
                                </h6>
                            </div>
                        </div>
                    </section>

                    {/* Add a horizontal rule */}
                    <hr className="my-5" />

                    {/* Add a section for the footer */}
                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                            distinctio earum repellat quaerat voluptatibus placeat nam,
                            commodi optio pariatur est quia magnam eum harum corrupti
                            dicta, aliquam sequi voluptate quas.
                            </p>
                        </div>
                        </div>
                    </section>

                    {/* <section className="text-center mb-5">
                        <a href="" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                        <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                        <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                        <i className="fab fa-github"></i>
                        </a>
                    </section> */}

                </div>

                    <div
                        className="text-center p-3"
                        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                        >
                        © 2025 Copyright: Hydro Squad Kitchen Exhaust Cleaning
                    </div>
                </footer>   
 
        </>
    )
}