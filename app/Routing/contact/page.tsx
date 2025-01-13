// React component Contact
import Image from "next/image"
import contact from "../../images/rohit-tandon-Mkh2La9fEDY-unsplash.jpg";
export default function Contact() {
    return (
        <>
            <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
                <div className="container-fluid p-5 text-white text-center" style={{ backgroundImage: `url(${contact.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", maxHeight: "480px" }}>`
                    <br/><br/><br/><br/><br/>
                    <h1 className="text-white d-flex p-2">Contact Us</h1>
                </div>

            </div>
        
        </>
    )
};