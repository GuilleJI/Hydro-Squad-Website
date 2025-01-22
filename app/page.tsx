"use client"; // Enable the client-side runtime
import Image from 'next/image';
import bg from './images/Background.avif';
import  "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'; // Import the useState hook from React
import { Toaster, toast } from 'sonner'; // Import the Toaster component from Sonner
import emailjs from "@emailjs/browser"; // EmailJS for the form submission


export default function Page() {

  // React hook useState for the form inputs 
  const [ userInput, setUserInput ] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: ''
  });

  // React hook for the form inputs 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; // Destructure the name and value from the target
    setUserInput({
      ...userInput, // Spread the existing state
      [name]: value // Update the value of the input
    });
  };

  // React hook for the form submission 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string; // Get the service ID from the environment variables
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string; // Get the template ID from the environment variables
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string; // Get the user ID from the environment variables

    // Check if the form inputs are empty
    try { 
      const emailParams = {
        Name: userInput.Name,
        Email: userInput.Email,
        Phone: userInput.Phone,
        Message: userInput.Message
      }; // Create an object with the form inputs

      // Send the email using EmailJS
      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if( res.status === 200){
        toast.success('Email sent successfully!'); // Display a success message
        setUserInput({
          Name: '',
          Email: '',
          Phone: '',
          Message: ''
        }); // Reset the form inputs
      }
    } catch (error) {
      toast.error('Failed to send email!'); // Display an error message
    }
  };

  return(
    // Add padding to the top and bottom of the page 
    <div style={{position: 'relative', minHeight: '100vh'}} className='py-5'> 
    {/* Add background image */}
      <Image
        src={bg}
        className='img-fluid'
        fill
        alt='background'
        sizes='100%'
        style={{
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(35%)',
          height: "100%",
          minHeight: '100vh',
        }}
      />
      <br/><br/><br/> {/* Add padding to the top of the page */}
      {/* Add a container to center the content */}
      <div className='container'>
        {/* Add a row to create a two column layout */}
        <div className='row'>
           <div className='col-sm-6 text-white'> {/* Add a column for the text content */}
             <div className='content p-5'> {/*Add padding to the content */}
              <br/><br/><br/><br/>
              <h2>Welcome to Hydro Squad: Premium Kitchen Hood Exhaust Cleaning for Your Business</h2>
              <br/>
              <p className='lead'>Our team of experts provides top-quality cleaning services for your business. We specialize in kitchen exhaust hood cleaning, pressure washing, and more. Get in touch with us today to schedule your free estimate and receive $100 off your first kitchen exhaust service.</p>
            </div>
          </div>
           <div className='col-sm-5 text-white'> {/*Add a column for the form */}
          <br/><br/><br/><br/><br/>
             <div className='p-4 rounded-5 border border-3 border-light' style={{backgroundColor: 'rgba(5, 59, 114, 0.8)'}}> {/*Add a background color to the form */}
              <h2 className='text-center'>Get a Quote</h2>
              {/* Add a form to collect user information */}
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-lg-10 offset-lg-1'>
                    <div className='form-group p-2'>
                      <label htmlFor="name" className='pb-2'>Full Name</label>
                      <input type='text' className='form-control' id='name' placeholder='Enter your first and last name' onChange={handleChange} required value={userInput.Name} name='Name' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="email" className='pb-2'>Email</label>
                      <input type='email' className='form-control' id='email' placeholder='Enter your email' onChange={handleChange} required value={userInput.Email} name='Email' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="phone" className='pb-2'>Phone Number</label>
                      <input type='tel' className='form-control' id='phone' placeholder='Enter your phone number' onChange={handleChange} required value={userInput.Phone} name='Phone' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="message" className='pb-2'>How can we help you?</label>
                      <textarea className='form-control' id='message' placeholder='Enter your message including address, postal, and company name' onChange={handleChange} required value={userInput.Message} name='Message'/>
                    </div>
                    <br/>
                    <div className='form-group p-2 pb-4'>
                      <button type='submit' className='btn btn-md w-100 btn-warning text-dark fw-bold'>Submit</button>
                      <Toaster />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}

