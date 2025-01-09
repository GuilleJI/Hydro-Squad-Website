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
              <h2>Professional Cleaning Services for Your Business</h2>
              <p>Transform your kitchen into a clean, effient workspace with expert exhaust hood cleaning. We deliver spotless results that keep your kitchen running smoothly and sefely.</p>
            </div>
          </div>
           <div className='col-sm-5 text-white'> {/*Add a column for the form */}
          <br/><br/><br/><br/><br/>
             <div className='bg-primary p-4 rounded-5'> {/*Add a background color to the form */}
              <h2 className='p-2'>Get a Quote</h2>
              {/* Add a form to collect user information */}
              <form method='post'>
                <div className='row'>
                  <div className='col-lg-10'>
                    <div className='form-group p-2'>
                      <label htmlFor="name">Name</label>
                      <input type='text' className='form-control' id='name' placeholder='Enter your name' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="email">Email</label>
                      <input type='email' className='form-control' id='email' placeholder='Enter your email' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="phone">Phone Number</label>
                      <input type='tel' className='form-control' id='phone' placeholder='Enter your phone number' />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="message">How can we help you?</label>
                      <textarea className='form-control' id='message' placeholder='Enter your message' />
                    </div>
                    <br/>
                    <div className='form-group p-2'>
                      <button type='submit' className='btn btn-light'>Submit</button>
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

