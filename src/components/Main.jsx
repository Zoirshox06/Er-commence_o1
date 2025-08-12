import React, { useEffect, useState } from 'react';
import '../style/Main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaEye, FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import speaker from '../assets/Frame 694 (1).png'

import Photo from '../assets/Frame 560 (1).png';

function Main() {
  const [data , setData ] = useState([])
  const discounts = ['-10%', '-20%', '-30%', '-40%', '-50%', '-60%', '-70%', '-80%'];
  console.log(data);



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
      setData(json)
    })
    .catch(err => console.log('xatolik ', err)
    )
  })
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [deadline] = useState(() => {
    const now = new Date();
    now.setDate(now.getDate() + 3);
    return now;
  });

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = deadline - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);



   const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 5);
  };




  
  const visiebleCount = 4; 
const [startIndex, setStartIndex] = useState(0);

const handlePrev = () => {
  if (startIndex > 0) {
    setStartIndex(prev => prev - 1);
  }
};

const handleNext = () => {
  if (startIndex + visibleCount < data.length) {
    setStartIndex(prev => prev + 1);
  }
};


  
  return (
    <>
      <div className="Home">
        <div className="home">
          <p>Woman’s Fashion </p>
          <p>Men’s Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
        <div className="home1">
          <Slider {...settings}>
            <div className="card"><img src={Photo} alt="banner" /></div>
            <div className="card"><img src={Photo} alt="banner" /></div>
            <div className="card"><img src={Photo} alt="banner" /></div>
            <div className="card"><img src={Photo} alt="banner" /></div>
            <div className="card"><img src={Photo} alt="banner" /></div>
          </Slider>
        </div>
      </div>


      <div className="Soat">
        <div className="matn">
          <h1>Flash Sales</h1>
        </div>
        <div className="soat">
          <div className="time-box">
            <p>Day</p>
            <span>{String(timeLeft.days || 0).padStart(2, '0')}:</span>
          </div>
          <div className="time-box">
            <p>Hour</p>
            <span>{String(timeLeft.hours || 0).padStart(2, '0')}:</span>
          </div>
          <div className="time-box">
            <p>Minute</p>
            <span>{String(timeLeft.minutes || 0).padStart(2, '0')}:</span>
          </div>
          <div className="time-box">
            <p>Second</p>
            <span>{String(timeLeft.seconds || 0).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="strelka">
  <button onClick={handlePrev}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
      <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    </svg>
  </button>
  <button onClick={handleNext}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  </button>
</div>
      </div>

      


<div className="container">
  {data.slice(startIndex, startIndex + visibleCount).map((item, index) => (
    <div className="cards" key={index}>
      <div className="discount-badge">
        {discounts[index % discounts.length]} {}
      </div>
      <img src={item.image} alt="" />
      <h1>{item.id}</h1>
      <p>{item.title}</p>
      <p>{item.price}$</p>
    </div>
  ))}
   {visibleCount < data.length && (
    <center>
      <button className="view-btn" onClick={handleLoadMore}>
        View All Products
      </button>
    </center>
  )}
</div>
    <section>
      <div className="text-section">
        <p>Categories</p>
        <h1>Enhance Your Music Experience</h1>
      <div className="numbers">
        <div className="twentythree">
          <h1>23</h1>
          <p>hours</p>
        </div>
        <div className="first">
          <h1>05</h1>
          <p>days</p>
        </div>
        <div className="fiftynine">
          <h1>59</h1>
          <p>Minutes</p>
        </div>
        <div className="thirtyfive">
          <h1>35</h1>
          <p>seconds</p>
        </div>
      </div>
      <button className='btn'>Buy Now</button>
      </div>
      <div className="img-section">
          <img src={speaker} alt="" />
      </div>
    </section>
    <div className="container">
  {data.slice(startIndex, startIndex + visibleCount).map((item, index) => (
    <div className="cards" key={index}>
      <div className="discount-badge">
        {discounts[index % discounts.length]} {}
      </div>
      <img src={item.image} alt="" />
      <h1>{item.id}</h1>
      <p>{item.title}</p>
      <p>{item.price}$</p>
    </div>
  ))}
   {visibleCount < data.length && (
    <center>
      <button className="view-btn" onClick={handleLoadMore}>
        View All Products
      </button>
    </center>
  )}
</div>
<div className="katta-div">
  <div className="right-d">
    <h1>PlayStation</h1>
    <p>Black and White version of the PS5 coming out on sale.</p>
    <a href="">Shop Now</a>
  </div>
  <div className="women-d">
    <h1>Women’s Collections</h1>
    <p>Featured woman collections that give you another vibe.</p>
    <a href="">Shop Now</a>
  </div>
  <div className="pastgi-dl">
    <div className="first-d">
      <h1>Speakers</h1>
      <p>Amazon wireless speakers</p>
      <a href="">Shop Now</a>
    </div>
  </div>
</div>
    </>
  );
}

export default Main;
