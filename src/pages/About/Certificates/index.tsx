import image from "../../../assets/Certificates/certificate.png"
import image2 from "../../../assets/Certificates/certificate2.png"
import image3 from "../../../assets/Certificates/certificate3.png"
import image4 from "../../../assets/Certificates/certificate4.png"
import image5 from "../../../assets/Certificates/certificate5.png"
import image6 from "../../../assets/Certificates/certificate6.png"
const Certificates = () => {
  return (
    <div className="grid grid-cols-6">
        <img src={image} alt="" className="mt-2 md:mr-2 col-span-3 md:col-span-1"/>
        <img src={image2} alt="" className="mt-2 md:mr-2 col-span-3 md:col-span-1"/>
        <img src={image3} alt="" className="mt-2 md:mr-2 col-span-3 md:col-span-1"/>
        <img src={image4} alt="" className="mt-2 md:mr-2 col-span-3 md:col-span-1"/>
        <img src={image5} alt="" className="mt-2 md:mr-2 col-span-3 md:col-span-1"/>
        <img src={image6} alt="" className="mt-2 md:mr-2 col-span-3 md:col-span-1"/>
    </div>
  )
}

export default Certificates