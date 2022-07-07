import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="/Images/background.jpg" alt="background" className="home__image" />

        <div className="home__row">
          <Product 
          title ='iPhone XS Max' 
          price={150.99} 
          image='/Images/iPhone.jpg' 
          rating={4}/>
          <Product
          title='Macbook Pro'
          price={350.75}
          image='/Images/macbook.jpg'
          rating={4}
          />
        </div>
        <div className="home__row">
          <Product/>
          <Product/>
          <Product/>
        </div>
        <div className="home__row">
          <Product/>
        </div>

      </div>
    </div>
  );
}

export default Home