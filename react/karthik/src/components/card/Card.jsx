import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import card4 from '../../assets/card4.png';
import card5 from '../../assets/card5.png';
import card6 from '../../assets/card6.png';
import React from 'react';
import './Card.css';

function Card() {
  return (
    <>
<div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-2 g-2">
        <div class="col">
          <div class="card shadow-sm">
            <img src={card1} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="Card 1" />
            <div class="card-body">
              <h2>API & Framework Development</h2>
              <p class="card-text">Neonsoft Technologies provides full API integration and development of frameworks to streamline your business processes. Our team of experienced developers ensures seamless integration with third-party software and platforms, providing maximum efficiency.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={card2} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="Card 2" />
            <div class="card-body">
              <h2>Digital Marketing</h2>
              <p class="card-text">Neonsoft Technologies offers effective digital marketing solutions tailored to your business goals. We create personalized strategies to boost your online visibility and generate leads, helping you achieve your business objectives..</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={card3} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="Card 3" />
            <div class="card-body">
              <h2>eCommerce Development</h2>
              <p class="card-text">Neonsoft Technologies specializes in eCommerce development and provides innovative solutions to help you increase your online sales. We offer a range of services, including store design, payment gateway integration, and security optimization..</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src={card4} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="Card 4" />
             <div class="card-body">
              <h2>Game Development</h2>
              <p class="card-text">Neonsoft Technologies offers high-quality game development services for mobile, desktop, and web platforms. Our team of skilled developers uses cutting-edge technology to create engaging and immersive games that meet your business needs..</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
           <img src={card5} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="Card 5" />
            <div class="card-body">
              <h2>Analytics</h2>
              <p class="card-text">Neonsoft Technologies provides efficient analytics solutions to help you understand your customer behavior and optimize your business processes. Our team of experts uses advanced tools to generate reports and insights that help you make informed decisions..</p>
             
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={card6} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="Card 6" />
            <div class="card-body">
              <h2>Support and Maintenance
              </h2>
              <p class="card-text">Neonsoft Technologies provides ongoing support and maintenance services to ensure your systems run smoothly. Our team of experts is available 24/7 to provide quick and efficient support whenever you need it.
              </p>
             
            </div>
          </div>
        </div>

       
       
      
      </div>
    </div>
  </div>
  </>
  );
}
export default Card;