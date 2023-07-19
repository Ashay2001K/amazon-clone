import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://img.freepik.com/free-vector
          /beautiful-happy-diwali-festival-sale-banner_1017-21236.jpg?w=1060&t=st=1689330695~exp=1689331295~hmac=c9798f839f28095f33596617fe4fad4125924f3d20135224a6777a306b3eb6bd"
        />
        <div className="home__row">
          <Product
            id="1000"
            title="Axor Helmets Apex Hex-2 Helmet (Hex Blue & Red_XL)"
            price={4344}
            image="https://m.media-amazon.com/images/I/51i-m54aDQL._SL1100_.jpg"
            rating={5}
          />
          <Product
            id="1001"
            title="ShineXPro Microfiber Cloth for Car -"
            price={299}
            image="https://m.media-amazon.com/images/I/71tPu1JwI8L._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1002"
            title="Apple iPhone 14 (128 GB) - Blue"
            price={74000}
            image="https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1003"
            title="amsung Galaxy S23 5G (Lavender, 8GB, 256GB Storage)"
            price={85999}
            image="https://m.media-amazon.com/images/I/61L68P3+fxL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1004"
            title="OnePlus 11 5G (Marble Odyssey, 16GB RAM, 256GB Storage)"
            price={54999}
            image="https://m.media-amazon.com/images/I/61n6EQXwtzL._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1005"
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD"
            price={100499}
            image="https://m.media-amazon.com/images/I/81MRU+3RJLL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
