import Image from 'next/image';
import bg from './images/Background.avif';
import  "bootstrap/dist/css/bootstrap.min.css"

export default function Page() {
  return(
    <div>
      <Image
        src={bg}
        className='img-fluid'
        fill
        alt='background'
        sizes='100%'
        style={{
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(65%)',
          minHeight: "100vh"
        }}
      />
    <br/><br/><br/>
    <div className='d-flex justify-content-center my-5 py-5'>
      <div className='jumbotron my-5 px-5'> 
        <h1 className='display-6 text-white text-center fw-bold'>
          Professional Hood Cleaning for Kitchens That Mean Business
        </h1>
        <br/>
        <p className='lead text-center text-white px-5 mx-auto' style={{ maxWidth: '900px' }}>
          Transform your kitchen into a clean, efficient workspace with expert exhaust hood cleaning. We deliver spotless results that keep your kitchen running smoothly and safely.
        </p>
        {/* <hr className='my-4'/> */}
        <p className='text-white text-center'>
          Have questions about our kitchen exhaust cleaning services? Click the button below to reach out to us today!
        </p>
        <br/>
        <p className='lead d-flex justify-content-center'>
          <a className='btn btn-warning btn-lg border' href='/Routing/contact' role='button'>Reach out</a>
        </p>
      </div>

      </div>
    </div>
      
  )
}

