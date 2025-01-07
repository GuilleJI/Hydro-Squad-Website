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
    <div className='container'>
      <div className='row'>
      
        <div className='col-lg-7 text-white'>
          <div className='content'>
            <br/><br/><br/><br/><br/>
            <h2>Professional Cleaning Services for Your Business</h2>
            <p>Transform your kitchen into a clean, effient workspace with expert exhaust hood cleaning. We deliver spotless results that keep your kitchen running smoothly and sefely.</p>
          </div>
        </div>
        <div className='col-lg-5 text-white'>
        <br/><br/><br/><br/><br/>
          <div>
            <h2>Get a Quote</h2>
            <div></div>
            <form method='post'>
              <div></div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <p>
                      <span>
                        <input size={40} maxLength={400} className='form-control' aria-invalid='false' placeholder='Organization' type='text' name='organization' id='organization' />
                      </span>
                    </p>
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

