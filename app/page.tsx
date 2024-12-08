import Image from 'next/image';
import bg from './images/background.jpeg';
import  "bootstrap/dist/css/bootstrap.min.css"

export default function Page() {
  return(
    <div>
      <Image
        src={bg}
        fill 
        alt='background'
        sizes='100vw'
        style={{
          objectFit: 'cover',
          zIndex: -1
        }}
        
      
      />

    </div>
  )
}

