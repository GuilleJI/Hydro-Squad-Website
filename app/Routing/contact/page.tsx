// React component Contact
"use client"; 
import Image from "next/image"
import contact from "../../images/rohit-tandon-Mkh2La9fEDY-unsplash.jpg";
import { useState} from "react"; // React hook useState for the form inputs 
import { Toaster, toast } from 'sonner' // Toast notifications for the form submission
import { Map } from "../../components/Map";
import emailjs from "@emailjs/browser"; // EmailJS for the form submission

export default function Contact() {

    // React hook useState for the form inputs
    const [ userInput, setUserInput ] = useState({
        Name: "",
        LastName: "",
        Company: "",
        Address: "",
        Postal: "",
        Email: "",
        Phone: "",
        Message: ""
    }); 
    
    // React hook for the form inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // React hook for the form inputs
        const { name, value } = e.target; // Get the name and value of the input
        setUserInput( { 
            ...userInput, // Spread operator to copy the existing state
            [name]: value // Update the state with the form inputs
        }); // Update the state with the form inputs
    };

    // React hook for the form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string; // Get the service ID from the environment variables
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string; // Get the template ID from the environment variables
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string; // Get the user ID from the environment variables

        try {
            const emailParams = {
                Name: userInput.Name,
                LastName: userInput.LastName,
                Company: userInput.Company,
                Address: userInput.Address,
                Postal: userInput.Postal,
                Email: userInput.Email,
                Phone: userInput.Phone,
                Message: userInput.Message
            }; // Create an object with the form inputs

            // Send the email using the emailjs.send method
            const res = await emailjs.send(serviceID, templateID, emailParams, userID); // Send the email using the emailjs.send method

            if( res.status === 200){
                toast.success("Email sent successfully!"); // Display a success message if the email is sent successfully
                setUserInput({
                    Name: "",
                    LastName: "",
                    Company: "",
                    Address: "",
                    Postal: "",
                    Email: "",
                    Phone: "",
                    Message: ""
                });
            }
        } catch (error) {
            toast.error("An error occurred while sending the email!"); // Display an error message if there is an error while sending
        }
    };

    return (
        <>
            {/* React component Contact */}
            <div className="bg-dark text-white pb-5" style={{ minHeight: '100vh' }}>
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
                <div className="container p-5 rounded-4 border border-3 border-light" style={{ backgroundColor: "rgba(70, 116, 168, 0.9)" }}>
                    <div className="container pt-3 text-white bg-dark p-2 text-center rounded-4 border border-2 border-light">
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
                            <form onSubmit={handleSubmit}>
                            {/* 2 column grid layout with text inputs for the first and last names  */}
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline ">
                                            <label className="form-label" form="Name">First Name</label>
                                            <input type="text" id="Name" value={userInput.Name} onChange={handleChange} required className="form-control border-2 border-dark" placeholder="First Name" name="Name"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" form="LastName">Last Name</label>
                                            <input type="text" id="LastName" value={userInput.LastName} onChange={handleChange} className="form-control border-2 border-dark" placeholder="Last Name" name="LastName"/>
                                        </div>
                                    </div>
                                </div>

                            {/* Text input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" form="Company">Company Name</label>
                                    <input type="text" id="Company" value={userInput.Company} onChange={handleChange} className="form-control border-2 border-dark" placeholder="Company Name" name="Company"/>
                                </div>

                            {/* Address and Postal Code */}
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline ">
                                            <label className="form-label" form="Address">Address</label>
                                            <input type="text" id="Address" value={userInput.Address} onChange={handleChange} required className="form-control border-2 border-dark" placeholder="Address" name="Address"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" form="Postal">Postal Code</label>
                                            <input type="text" id="Postal" value={userInput.Postal} onChange={handleChange} className="form-control border-2 border-dark" placeholder="Postal Code" name="Postal"/>
                                        </div>
                                    </div>
                                </div>

                            {/* Email input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" form="Email">Email</label>
                                    <input type="email" id="Email" value={userInput.Email} onChange={handleChange} className="form-control border-2 border-dark" placeholder="Email" name="Email"/>
                                </div>

                            {/* Number input  */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" form="Phone">Phone</label>
                                    <input type="number" id="Phone" value={userInput.Phone} onChange={handleChange} className="form-control border-2 border-dark" placeholder="Phone" name="Phone"/>
                                </div>
                            
                            {/* Message input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="Message">Message</label>
                                    <textarea className="form-control border-2 border-dark" id="Message" value={userInput.Message} onChange={handleChange} rows={4} placeholder="Your message" name="Message"></textarea>
                                </div>

                            {/* Submit button */}
                                <button type="submit" className="btn btn-primary btn-lg w-100 border-2 border-dark">Submit</button>
                                <Toaster />
    
                            </form>
                        </div>
                        <div className="col-12 col-md-6 py-2">
                            <div className="py-2 ">
                                <h4 className="font-weight-bold pb-1">Our Headquarters</h4>
                                <p>1751 Sheppard Avenue E Toronto, ON</p>
                            </div>
                            {/* testing the Map component */}
                            <div className="py-4">
                                <Map />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4 p-2 text-white bg-dark text-center rounded-4 border border-2 border-light" style={{ overflow: 'hidden' }}>
                        <h5>Phone: 647-789-3890</h5>
                        <h5>Email: hydrosquad@gmail.com</h5>
                    </div>            
                </div>
            </div>
        </>
    )
};