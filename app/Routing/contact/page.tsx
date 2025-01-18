// React component Contact
import Image from "next/image"
import contact from "../../images/rohit-tandon-Mkh2La9fEDY-unsplash.jpg";
import { Map } from "../../components/Map";

export default function Contact() {
    return (
        <>
            {/* React component Contact */}
            <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
                {/* Background image for the header */}
                <div className="container-fluid p-5 text-white text-center" style={{ backgroundImage: `url(${contact.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", maxHeight: "480px" }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor:"rgba(0,0,0,0.3)", maxHeight: "288px"}}></div>
                    <br/><br/><br/><br/><br/>
                    <div className="position-relative">
                        <h1 className="text-white d-flex p-2"><strong>Contact Us</strong></h1>
                    </div>      
                </div>
                <br/><br/>
                {/* Form for the contact page */}
                <div className="container p-5 bg-secondary">
                    <div className="container pt-3 text-white bg-dark p-2 text-center">
                        <h4>Schedule your Free Estimate</h4>
                        <h3>Receive $100 Off your first kitchen exhaust service</h3>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12 col-md-6 py-2">
                            <div className="py-2">
                                <h4 className="font-weight-bold pb-1">Request a Quote</h4>
                                <p>Fill out the form below and we will contact you as soon as possible!</p>
                            </div>
                            <form>
                            {/* 2 column grid layout with text inputs for the first and last names  */}
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline ">
                                            <label className="form-label" form="Name">First Name</label>
                                            <input type="text" id="Name" className="form-control border-2 border-dark" placeholder="First Name"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" form="LastName">Last Name</label>
                                            <input type="text" id="LastName" className="form-control border-2 border-dark" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                </div>

                            {/* Text input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" form="Company">Company Name</label>
                                    <input type="text" id="Company" className="form-control border-2 border-dark" placeholder="Company Name"/>
                                </div>

                            {/* Email input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" form="Email">Email</label>
                                    <input type="email" id="Email" className="form-control border-2 border-dark" placeholder="Email"/>
                                </div>

                            {/* Number input  */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" form="Phone">Phone</label>
                                    <input type="number" id="Phone" className="form-control border-2 border-dark" placeholder="Phone"/>
                                </div>
                            
                            {/* Message input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="Message">Message</label>
                                    <textarea className="form-control border-2 border-dark" id="Message" rows={4} placeholder="Your message"></textarea>
                                </div>

                            {/* Submit button */}
                                <button type="button" className="btn btn-primary btn-lg w-100 border-2 border-dark">Submit</button>
                            </form>
                        </div>
                        <div className="col-12 col-md-6 py-2">
                            <div className="py-2">
                                <h4 className="font-weight-bold pb-1">Our Headquarters</h4>
                                <p>1751 Sheppard Avenue E Toronto, ON</p>
                                {/* <div className="row">
                                    <div className="col col-md-6">
                                        <p><strong>Email:</strong> 647-789-3890</p>
                                    </div>
                                    <div className="col col-md-6">
                                        <p><strong>Phone:</strong> hydrosquad@gmail.com</p>
                                    </div>
                                    <div className="col col-md-6">
                                        <p><strong>Phone:</strong> hydrosquad@gmail.com</p>
                                    </div>

                                </div> */}
                                
                                
                            </div>
                            {/* testing the Map component */}
                            <div >
                                <Map />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4 p-2 text-white bg-dark text-center" style={{ overflow: 'hidden' }}>
                        <h5>Phone: 647-789-3890</h5>
                        <h5>Email: hydrosquad@gmail.com</h5>
                    </div>            
                </div>
            </div>
        </>
    )
};