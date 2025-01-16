// React component Contact
import Image from "next/image"
import contact from "../../images/rohit-tandon-Mkh2La9fEDY-unsplash.jpg";
import { Map } from "../../components/Map";

export default function Contact() {
    return (
        <>
            <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
                <div className="container-fluid p-5 text-white text-center" style={{ backgroundImage: `url(${contact.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", maxHeight: "480px" }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor:"rgba(0,0,0,0.3)", maxHeight: "288px"}}></div>
                    <br/><br/><br/><br/><br/>
                    <div className="position-relative">
                        <h1 className="text-white d-flex p-2"><strong>Contact Us</strong></h1>
                    </div>      
                </div>
                <br/><br/>
                <div className="container p-5 bg-primary">
                    <div className="container pt-3 text-white bg-dark p-3 ">
                        <h4>Schedule your Free Estimate</h4>
                        <h3>Receive $100 Off your first kitchen exhaust service</h3>
                    </div>
                    <br/>
                    
                    <form className="container p-3">
                        {/* 2 column grid layout with text inputs for the first and last names  */}
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" id="Name" className="form-control" placeholder="First Name"/>
                                    <label className="form-label" form="Name">First Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" id="LastName" className="form-control" placeholder="Last Name"/>
                                    <label className="form-label" form="LastName">Last Name</label>
                                </div>
                            </div>
                        </div>

                        {/* Text input */}
                        <div className="form-outline mb-4">
                            <input type="text" id="Company" className="form-control" placeholder="Company Name"/>
                            <label className="form-label" form="Company">Company Name</label>
                        </div>

                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <input type="email" id="Email" className="form-control" placeholder="Email"/>
                            <label className="form-label" form="Email">Email</label>
                        </div>

                        {/* Number input  */}
                        <div className="form-outline mb-4">
                            <input type="number" id="Phone" className="form-control" placeholder="Phone"/>
                            <label className="form-label" form="Phone">Phone</label>
                        </div>
                            
                        {/* Message input */}
                        <div className="form-outline mb-4">
                            <textarea className="form-control" id="Message" rows={4} placeholder="Your message"></textarea>
                            <label className="form-label" htmlFor="Message">Message</label>
                        </div>

                        {/* Submit button */}
                        <button type="button" className="btn btn-danger btn-block mb-4">Submit</button>
                    </form>  
                    {/* testing the Map component */}
                    <div>
                        <Map />
                    </div>           
                </div>
            </div>
        
        </>
    )
};