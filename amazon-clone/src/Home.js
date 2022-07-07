import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="/Images/abackground.jpg" alt="background" className="home__image" />

        <div className="home__row">
          <Product 
          id='123456'
          title ='iPhone XS Max: an innovative device to suit the needs of various users' 
          price={150.99} 
          image='/Images/iPhone.jpg' 
          rating={4}/>
          <Product
          id='234567'
          title='Macbook Pro(2017): powerful machine suitable for content creators, programmers, and 
          office workers'
          price={350.75}
          image='/Images/macbook.jpg'
          rating={4}
          />
        </div>
        <div className="home__row">
          <Product
          id='345678'
          title='Nike'
          price={70.99}
          image='/Images/nike.jpg'
          rating={4}
          />
          <Product
          id='456789'
          title='Adidas'
          price={55.99}
          image='/Images/adidas.jpg'
          rating={3}
          />
          <Product
          id='567890'
          title='puma'
          price={42.75}
          image='/Images/puma.jpg'
          rating={4}
          />
        </div>
        <div className="home__row">
          <Product
          id='678901'
          title='Apple Package: exclusive deal containing a MacBook, iPad, and iPhone for
          those Apple fanatics'
          price={485.27}
          image='/Images/apple-package.jpg'
          rating={4}
          />
        </div>

      </div>
    </div>
  );
}

export default Home