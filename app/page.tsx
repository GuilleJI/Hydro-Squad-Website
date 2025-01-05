import Image from 'next/image';
import bg from './images/Background.avif';
import  "bootstrap/dist/css/bootstrap.min.css"
import hydro from '../app/images/A Hood Filter HSquad B4 Aft - Copy (4) - Copy - Copy - Copy - Copy - Copy.jpg'

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
          filter: 'brightness(35%)',
          minHeight: "100%"
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
        <div className='container text-center'>
          <div className='col w-100 p-5 m-3'>
            <Image
              className='rounded-4 img-fluid item-center'
              alt='Hood Cleaning'
              src={hydro}
              width='470'
              height='300'
            
            />
          </div>
        </div>
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

