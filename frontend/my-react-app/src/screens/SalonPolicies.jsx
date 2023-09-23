import React from "react";
import './styles/home.css'
import { FaMapMarkerAlt, FaClock ,  FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';


const SalonPolicies = () => {


    return (
        <>
         <div className='hero-ctnr'>
<div className='hero-bg'></div>
 
  <div className='hero-text'>
<h1>Salon Policies </h1>
<p style={{fontWeight:"100", letterSpacing:"normal", fontSize:"1rem", marginBottom:"40px"}}> Please read before booking your appointment</p>
<button className='hero-btn'><a href="https://savvysista.glossgenius.com/services" style={{textDecoration:"none", color:"#FFF9F2"}}
target="_blank" rel="noopener noreferrer"> Book Now </a> </button>
  </div>
</div>

         <div className="salon-policies">
      <h1 style={{marginTop:"70px" , marginBottom:"80px"}}></h1>
      <div className="policy">
        <h2>CANCELLATION POLICY </h2>
        <hr />
<p>
As a courtesy, appointment reminders are sent out 48 hours before your scheduled appointment via text and email.  <strong> A minimum notice of 24 hours is required to reschedule or cancel a booked appointment without penalty. </strong> If you cancel/reschedule with less than 24 hours notice, or do not show up for your appointment, you forfeit your deposit. If you did not pay a deposit at time of booking and you cancel/reschedule with less than a 24 hour notice or do not show up for your appointment, your credit card on file will be charged a fee of 40% at the scheduled service/services.
        </p>
      </div>
      <div className="policy">
        <h2>ARRIVAL </h2>
        <hr />
        <p>
     
Please aim to arrive at your scheduled appointment on time with combed/detangled hair, especially if the hair has been braided, to avoid an additional fee of $125. There is a 15 minute grace period. <strong>Clients arriving outside the 15 minute grace period will be charged a $45 late fee</strong>  and your appointment may be rescheduled.
        </p>
      </div>
      <div className="policy">
        <h2>ILLNESSES AND  FAMILY EMERGENCIES</h2>
        <hr />
        <p>
        If you, or another member of your household, has an infectious contagious illness, please contact me at least 24 hours prior to your scheduled appointment to reschedule. For everyone’s safety, please DO NOT come to an appointment sick. If you arrive to an appointment sick, it will be immediately rescheduled until you are healthy again.
        </p>
      </div>
      <div className="policy">
        <h2>CHANGING YOUR APPOINTMENT</h2>
        <hr />
        <p> <strong>  NO SAME DAY APPOINTMENT CHANGES.</strong>
  A minimum of 24 hours notice is required to reschedule/cancel a booked appointment without forfeit of deposit. If you cancel/reschedule with less than 24 hours notice, you forfeit your deposit. In regards to your appointment please call/text 571-701-1946. Message via social media or email may not be checked in order to respond in a timely manner.<strong> DEPOSIT ARE NON-REFUNDABLE.</strong> Deposits can be transferred when canceling/rescheduling with at least a 24 hour notice towards another service.
        </p>
      </div>
      <div className="policy">
        <h2>AFTER HOUR APPOINTMENTS</h2>
        <hr />
        <p>
   
After hours appointments may be available on a case by case basis for an additional $125 + cost of service. Please contact me directly to schedule your after-hours appointment at 571-701-1946.
        </p>
      </div>
      <div className="policy">
        <h2>GUEST POLICY </h2>
        <hr />
        <p>
        Savvy Sista, LLC offers a soothing and relaxing atmosphere for my clients. With this being the focus,  <strong> I DO NOT ALLOW CHILDREN OR ANYONE NOT BEING SERVICED. </strong> If you are under 18, you must be accompanied by a consenting parent.
        </p>
      </div>
      <div className="policy">
        <h2>REFUND POLICY </h2>
        <hr />
        <p>
        You are paying for the stylist time, products and other expenses used to provide you with a service. <strong> NO REFUNDS </strong>
     will be given for any reason on services, deposits, fees, gift cards or products. If you are not satisfied with your service, you may contact me within 72 hours of your appointment to discuss and address your concerns.
        </p>
      </div>
      <div className="policy">
        <h2>PAYMENT AND GRATUITY</h2>
        <hr />
        <p>
        Payment is due in full at the time of service. Your deposit will be deducted from your final balance at time of service. I accept cash, CashApp, Zelle, and all major credit cards. When paying with cash keep in mind that exact change may not always be available. Gift cards are available for purchase in the studio. NO REFUNDS. Gift cards have no cash value. <strong>DEPOSITS ARE NON-REFUNDABLE.</strong>  When canceling/rescheduling with at least 24 hours notice the deposit can be transferred only once and used as a credit towards another service. Rescheduling must be booked within a 14 day grace period of original appointment. Otherwise deposits are forfeited.
        </p>
      </div>
    </div>


    <footer className="footer">
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
        <a href="/policies">SALON POLICIES</a>
        <a href="/home">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/services">SERVICES</a>
        <a href="/booking">ONLINE BOOKING</a>
      </div>
    </footer>
        </>
    )
}

export default SalonPolicies;