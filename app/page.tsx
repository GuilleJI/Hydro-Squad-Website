import Image from 'next/image';
import bg from './images/Background.avif';
import  "bootstrap/dist/css/bootstrap.min.css"

export default function Page() {
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
              <form method='post'>
                <div className='row'>
                  <div className='col-lg-10 offset-lg-1'>
                    <div className='form-group p-2'>
                      <label htmlFor="name" className='pb-2'>Name</label>
                      <input type='text' className='form-control' id='name' placeholder='Enter your name' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="email" className='pb-2'>Email</label>
                      <input type='email' className='form-control' id='email' placeholder='Enter your email' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="phone" className='pb-2'>Phone Number</label>
                      <input type='tel' className='form-control' id='phone' placeholder='Enter your phone number' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="message" className='pb-2'>How can we help you?</label>
                      <textarea className='form-control' id='message' placeholder='Enter your message' />
                    </div>
                    <br/>
                    <div className='form-group p-2 pb-4'>
                      <button type='submit' className='btn btn-md w-100 btn-warning text-dark fw-bold'>Submit</button>
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

