import React, { useEffect, useState } from "react";
import "../style/Main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import frame from '../assets/Frame.png'
import Photo from "../assets/Frame 560 (1).png";

function Home({ onLikeToggle }) {
  const [data, setData] = useState([]);
  const discounts = ["-10%", "-20%", "-30%", "-40%", "-50%", "-60%", "-70%", "-80%"];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log("xatolik ", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [deadline] = useState(() => {
    const now = new Date();
    now.setDate(now.getDate() + 4);
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
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const [visibleCount, setVisibleCount] = useState(5);
  const [startIndex, setStartIndex] = useState(0);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 5);
  const handlePrev = () => startIndex > 0 && setStartIndex((prev) => prev - 1);
  const handleNext = () =>
    startIndex + visibleCount < data.length && setStartIndex((prev) => prev + 1);

  const [clickCounts, setClickCounts] = useState({});
  const [redButtons, setRedButtons] = useState({});
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleButtonClick = (id) => {
    setClickCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setRedButtons((prev) => ({ ...prev, [id]: !prev[id] }));
    onLikeToggle(!redButtons[id]); // Navbar’dagi counterga yuboriladi
  };

  const handleLike2Click = (id) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  const handleBackClick = () => setSelectedCardId(null);

  const visibleCards = selectedCardId
    ? data.filter((item) => item.id === selectedCardId)
    : data.slice(startIndex, startIndex + visibleCount);

  return (
    <>
      {!selectedCardId && (
        <div className="Home">
          <div className="home">
            <p>Woman’s Fashion </p>
            <p>xaaa</p>
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
              {[...Array(5)].map((_, i) => (
                <div className="card" key={i}>
                  <img src={Photo} alt="banner" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      {/* Flash Sales */}
      {!selectedCardId && (
        <div className="Soat">
          <div className="matn">
            <h1>Flash Sales</h1>
          </div>
          <div className="soat">
            <div className="time-box">
              <p>Day</p>
              <span>{String(timeLeft.days || 0).padStart(2, "0")}:</span>
            </div>
            <div className="time-box">
              <p>Hour</p>
              <span>{String(timeLeft.hours || 0).padStart(2, "0")}:</span>
            </div>
            <div className="time-box">
              <p>Minute</p>
              <span>{String(timeLeft.minutes || 0).padStart(2, "0")}:</span>
            </div>
            <div className="time-box">
              <p>Second</p>
              <span>{String(timeLeft.seconds || 0).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="strelka">
            <button onClick={handlePrev}>◀</button>
            <button onClick={handleNext}>▶</button>
          </div>
        </div>
      )}

      <div className="container">
        {visibleCards.map((item, index) => (
          <div
            className="cards"
            key={item.id}
            style={
              selectedCardId === item.id
                ? { width: "80%", margin: "0 auto", transform: "scale(1.1)", transition: "all 0.3s ease" }
                : {}
            }
          >
            <div className="discount-badge">{discounts[index % discounts.length]}</div>

            <div className="lake">
              <img src={item.image} alt={item.title} />
              <div className="like">
                <div className="like1" style={{ textAlign: "center" }}>
                  <div>{clickCounts[item.id] || 0}</div>
                  <button onClick={() => handleButtonClick(item.id)}>
                    ❤️
                  </button>
                </div>
                <div className="like2">
                  <button onClick={() => handleLike2Click(item.id)}>👁</button>
                </div>
              </div>
            </div>

            <h1>{item.id}</h1>
            <p>{item.title}</p>
            <p>{item.price}$</p>
          </div>
        ))}

        {!selectedCardId && visibleCount < data.length && (
          <center>
            <button className="view-btn" onClick={handleLoadMore}>
              View All Products
            </button>
          </center>
        )}
      </div>
      <div className="speaker">
        <div className="text-speak">
          <h4>Categories</h4>
          <h1>Enhance Your Music Experience</h1>
          <div className="numbers">
            <div className="first">
              <h1>23</h1>
              <p>hours</p>
            </div>
            <div className="second">
              <h1>05</h1>
              <p>days</p>
            </div>
            <div className="third">
              <h1>59</h1>
              <p>minutes</p>
            </div>
            <div className="fourth">
              <h1>35</h1>
              <p>seconds</p>
            </div>

          </div>
            <button>Buy Now</button>
        </div>
        <div className="img-speak">
          <img src={frame} alt="" />
        </div>
      </div>
      
      <div className="container">
        {visibleCards.map((item, index) => (
          <div
            className="cards"
            key={item.id}
            style={
              selectedCardId === item.id
                ? { width: "80%", margin: "0 auto", transform: "scale(1.1)", transition: "all 0.3s ease" }
                : {}
            }
          >
            <div className="discount-badge">{discounts[index % discounts.length]}</div>

            <div className="lake">
              <img src={item.image} alt={item.title} />
              <div className="like">
                <div className="like1" style={{ textAlign: "center" }}>
                  <div>{clickCounts[item.id] || 0}</div>
                  <button onClick={() => handleButtonClick(item.id)}>
                    like
                  </button>
                </div>
                <div className="like2">
                  <button onClick={() => handleLike2Click(item.id)}>👁</button>
                </div>
              </div>
            </div>

            <h1>{item.id}</h1>
            <p>{item.title}</p>
            <p>{item.price}$</p>
          </div>
        ))}

        {!selectedCardId && visibleCount < data.length && (
          <center>
            <button className="view-btn" onClick={handleLoadMore}>
              View All Products
            </button>
          </center>
        )}
      </div>
    </>
  );
}

export default Home;
