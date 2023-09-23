
import './styles/services.css'
import Accordion from 'react-bootstrap/Accordion';

import { FaMapMarkerAlt, FaClock ,  FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

import video1 from "./images/a5b7d1e361f644108a66626442ebb8ee.mov";

const SalonServices = () => {


  return (
    <>
 
 <div className='hero-ctnr'>
<div className='hero-bg'></div>
 
  <div className='hero-text'>
<h1>Services </h1>
<p style={{fontWeight:"100", letterSpacing:"normal", textTransform:"lowercase", marginBottom:"40px"}}> Select a service to see individual pricing </p>
<button className='hero-btn'><a href="https://savvysista.glossgenius.com/services" style={{textDecoration:"none", color:"#FFF9F2"}}
target="_blank" rel="noopener noreferrer"> Book Now </a> </button>
  </div>
</div>



    {/* <p className='service-about' > Select a category for individual services + pricing</p> <br />
    <p style={{  marginBottom: "50px" }}> <a href="#"  style={{ textDecoration: "none" , marginBottom: "30px"}} className='booking'> Book Your Appointment </a></p> */}
    

    <div className="d-flex justify-content-center align-items-center vh-100" style={{height:"auto"}}>



    <div style={{ width: '70vw' , marginTop: "180px", marginBottom: "90px" , height:"auto" }}>



    <Accordion flush className="service-accordion accordion-flush" style={{height:"auto"}}>


    <Accordion.Item eventKey="0">
      <Accordion.Header><h1 className='service-header'> 1:1 Consultation </h1> </Accordion.Header>
      <Accordion.Body>
     <p className='service-text'> Hair​ ​​assessment with price quote. Online / In-Person   <span className="service-price" style={{marginLeft:"50px"}} >$50 </span>  </p>
     <p className="service-text">
        Please come with your hair free of any styles the day of your consultaiton. 
     </p>
     {/* <a href="#"> What to expect during a consultation</a> */}
   
  {/* <video controls autostart autoPlay  width="560" height="315" src={process.env.PUBLIC_URL + '../../../public/044f8a1cf1aa4589bcc13de59e653bb0.mov'} 
  type="video/mp4" >
</video> */}
      </Accordion.Body>
    </Accordion.Item>


    <Accordion.Item eventKey="1">
      <Accordion.Header className='service-header'> <h1 className='service-header'> Traditional Locs </h1> </Accordion.Header>
      <Accordion.Body>
  <p className="service-text">
    <ul>
        <li>
            Traditional starter microloc installment
        </li>
        <li className="service-price">
            250+ | 145 Min 
        </li>
    </ul>
  </p>
      </Accordion.Body>
    </Accordion.Item>


    <Accordion.Item eventKey="2">
      <Accordion.Header className='service-header'> <h1 className='service-header'> Microloc Establishment  </h1> </Accordion.Header>
      <Accordion.Body>
  
      <p className="service-text">
<ul>
            <li>        Consultation required </li>
            <li>     Microloc establishment up to "4"</li>
            <li> $500.00 depost required upon booking</li>
            <li className='service-price'> Price is discussed at consultation | 490 min</li>
        </ul>
      </p>
 

      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header className='service-header'> <h1 className='service-header'> Microloc Repair </h1> </Accordion.Header>

      <Accordion.Body style={{ backgroundColor: 'transparent' }}>
      <p className="service-text">

        <ul>
            <li>Re-tightening​ ​of​ ​​ ​locs​ ​new​ ​growth​ ​using​ ​​ ​inter-woven​ ​loc​ ​method​ ​and​ ​tool​</li>
            <li>shampoo included</li>
            <li> SavvySista installs only</li>
            <li> 1st retie includes repair of any slippage and unraveled ends.</li>
            <li> $60.00 deposit required upon booking</li>
            <li className='service-price'> Price Varies | 190 min</li>
        </ul>
   </p>

      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
      <Accordion.Header className='service-header'> <h1 className='service-header'> Microloc Retighte </h1>  </Accordion.Header>
      <Accordion.Body>
      <p className="service-text">
      <ul>
            <li>  Repair​ ​of​ ​holes​ and ​bunching. Includes​ ​loc splitting,​ ​combining,​ ​strengthening and reattachment.</li>

            <li> $60.00 deposit required upon booking </li>
            <li className='service-price'>$60/ hour | 310 min</li>
        </ul>

</p>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="5">
      <Accordion.Header className='service-header'> <h1 className='service-header'> Color </h1>  </Accordion.Header>
      <Accordion.Body>
     <p className="service-text">
        <ul>
            <li>     * Consultation required * </li>
            <li>        All over permenant color </li>
            <li>       $72.00 deposit required upon booking </li>
        <li className='service-price'> Price discussed at consultation  | 160 min</li>
        </ul>
   
 

     </p>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="6">
      <Accordion.Header className='service-header'> <h1 className='service-header'> Haircut </h1>  </Accordion.Header>
      <Accordion.Body>
       <p className="service-text">
        <ul>
            <li>Ladies haircut</li>
            <li className="service-price"> 45+ | 55 min </li>
        </ul>
       </p>
      </Accordion.Body>
    </Accordion.Item>
    


    <Accordion.Item eventKey="7">
      <Accordion.Header className='service-header'> <h1 className='service-header'> Add Ons </h1>  </Accordion.Header>
      <Accordion.Body>
    <p className="service-text">
        <ul>
            <li> Ends trim | $25+</li>
            <li> Deep conditioning treatments | $25+</li>
        </ul>
    </p>
      </Accordion.Body>
    </Accordion.Item>

   
  </Accordion>
  </div>
    </div>

<div style={{backgroundColor:"#33302D", width:"100vw", color:"#D9C1BB", height:"650px", marginTop:"30px"}}>
    <section className='home-about-section' style={{width:"70vw", height:"auto", maring:"0"}} >
<div className='home-about-text' >
<h6 className='sub'> Microloc & buisness coaching   </h6>
<h2 style={{fontSize:"3.5rem"}}> <em style={{color:" #FFF9F1"}}> MASTER </em> MICROLOCS AND <em style={{color:" #FFF9F1"}}> MAXIMIZE </em>  YOUR SUCCESS </h2>
<p style={{fontSize:"1.4rem", fontWeight:"100"}}>
The fundamental information necessary to take you from a strong, solid foundation to a beautiful, refined set of Microlocs. Includes Consultation Training, Documents, Resources and Additional Support to Start and Grow Your Business </p>
<button className='enroll-cta'>
    Learn More
</button>
</div>
<div className='home-about-img-ctnr' style={{paddingTop:"120px"}}>
<video src={video1} width="800px" height="445" controls="controls" loop="true" autoplay="true" />



</div>
</section>
</div>

    <footer className="footer" style={{  marginTop:"30px"}}>
      <hr />
      <div className="footer-row">
      <div className="footer-logo">
      <img src={require('./images/IMG_4649.jpg')} alt="Logo 1" />
          <img src={require('./images/IMG-7030-Original.jpeg')} alt="Logo 2" />
          <img src={require('./images/IMG-7088-Original.jpg')} alt="Logo 3" />
        </div>
        <div className="footer-text">
        <p className='footer-logo-text'>savvy sista</p>
        <div className="footer-icons">
 <div>

 <FaMapMarkerAlt    style={{  color:"#D4B5B" }} />
 9711 David Taylor Drive Suite 136, Charlotte, NC 28262 <br />
<FaClock  style={{ color: "#D4B5B" }} /> Monday - Friday: 10AM - 6PM <br /> Saturday and Sunday: Closed 

 </div>

 <div className="social-icons">
        <FaYoutube />
        <FaTiktok />
        <FaInstagram />
      </div>
  </div>

        </div>
  
      </div>
      <hr />
      <div className="footer-links">
        <a href="/shop">SHOP</a>
        <a href="/contact">CONTACT</a>
        <a href="/policies">POLICIES</a>
        <a href="/home">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/services">SERVICES</a>
        <a href="/booking">ONLINE BOOKING</a>
      </div>
    </footer>
    </>
  );
};

export default SalonServices;

