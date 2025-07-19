import { useState } from "react";
import Footer from "./Footer";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleclick = (index) => {
    setActiveIndex(index == activeIndex ? null : index);
  };

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <img src="/scissors.svg" alt="Logo" id="hero-logo" />
          <h1 className="luckiest-guy-regular">WE'RE THE</h1>
          <h1 className="luckiest-guy-regular">LAST OF</h1>
          <h1 className="luckiest-guy-regular">BREED</h1>
          <p id="hero-text">Achieve your Dream Style</p>
          <button className="hero-button">Book Now</button>
        </div>
        <img src="/h1_hero1.jpg.webp" alt="img" className="hero-img" />
      </header>
      <section className="about poppins-bold">
        <ul className="about-list">
          <div>
            <span>
              <img src="/check_mark.svg" alt="check" id="checks" />
            </span>
            <li className="about-item">
              <p>the majority have suffered</p>
              <p>alteration in some form, by injected</p>
              <p>humour.</p>
            </li>
          </div>
          <div>
            <span>
              <img src="/check_mark.svg" alt="check" id="checks" />
            </span>
            <li className="about-item">
              <p>Psum available be the majority have</p>
              <p>suffered alteration in some form, by</p>
              <p> injected humour.</p>
            </li>
          </div>
          <span>
            <img src="/check_mark.svg" alt="check" id="checks" />
          </span>
          <li className="about-item">
            <p>Available be the majority have suffered</p>
            <p>alteration in some form, by injected</p>
            <p>humour.</p>
          </li>
          <span>
            <img src="/check_mark.svg" alt="check" id="checks" />
          </span>
          <li className="about-item">
            <p>Humour available be the majority have</p>
            <p>uffered alteration in some form, by</p>
            <p>injected</p>
          </li>
        </ul>
        <img
          src="about1.jpg.webp"
          alt="image of a groomed man"
          id="about-img"
        />
        <div className="about-text-container poppins-bold">
          <div className="about-stroke"></div>
          <div className="about-text">
            <h1 className="luckiest-guy-regular">ABOUT OUR</h1>
            <h1 className="luckiest-guy-regular">STORY</h1>
            <p>There are many variations of</p>
            <p>passages of Lorem Ipsum available</p>
            <p>be the majority have suffered</p>
            <p>alteration in some form, by injected</p>
            <p>humour or randomised words.</p>
            <button id="about-btn">Book Now</button>
          </div>
        </div>
      </section>
      <section className="prices">
        <div class="grid-container">
          <img src="barber1.jpg.webp" class="grid-pic" alt="Pic1" />
          <img src="barber2.jpg.webp" class="grid-pic" alt="Pic2" />
          <img src="barber3.jpg.webp" class="grid-pic" alt="Pic3" />
          <img src="barber4.jpg.webp" class="grid-pic" alt="Pic4" />
          <img src="barber5.jpg.webp" class="grid-pic" alt="Pic5" />
          <img src="barber6.jpg.webp" class="grid-pic" alt="Pic6" />
        </div>
        <div className="prices-stroke"></div>
        <div className="prices-text-container poppins-bold">
          <h1 className="prices-text poppins-bold">OUR TOP PRICES</h1>
          <p className="dash">______________________________________</p>
          <p className="prices-list poppins-bold">
            <p className="price-item">Special Beard Treatment.</p>
            <p className="item-cost">
              from <span id="price">$40</span>
            </p>
            <p className="price-item">Special Beard Treatment.</p>
            <span className="item-cost">
              from <span id="price">$40</span>
            </span>
            <p className="price-item">Color your Beard.</p>
            <span className="item-cost">
              from <span id="price">$40</span>
            </span>
            <p className="price-item">Wax your Beard.</p>
            <span className="item-cost">
              from <span id="price"> $40</span>
            </span>
            <p className="price-item">Wax your Beard.</p>
            <span className="item-cost">
              from <span id="price">$40</span>
            </span>
          </p>
        </div>
      </section>
      <section className="services-container">
        <div className="services-text">
          <div className="services-stroke"></div>
          <h1 className="services-text-h1 poppins-extrabold">
            ALL WE DO FOR YOU
          </h1>
        </div>
        <img src="about2.jpg.webp" alt="" id="service-img" />
      </section>
      <section className="card-section">
        <div className="overlay">
          <div className="card-container">
            <div className="card">
              <img
                src="/services1.svg"
                alt="Card Image 1"
                className="card-img"
              />
              <h2 className="card-title">Hair Cut</h2>
              <p className="card-description">
                Experience a fresh and stylish haircut that suits your
                personality and enhances your look.
              </p>
            </div>
            <div className="card">
              <img
                src="/services2.svg"
                alt="Card Image 2"
                className="card-img"
              />
              <h2 className="card-title">Beard Styling</h2>
              <p className="card-description">
                Elevate your beard game with our expert styling services,
                tailored to your unique style.
              </p>
            </div>
            <div className="card">
              <img
                src="/services3.svg"
                alt="Card Image 3"
                className="card-img"
              />
              <h2 className="card-title">Hair Coloring</h2>
              <p className="card-description">
                Transform your look with our professional hair coloring
                services, offering a range of vibrant shades.
              </p>
            </div>
          </div>
        </div>
        <div className="display-container">
          <img src="/instra1.jpg.webp" alt="" />
          <img src="/instra2.jpg.webp" alt="" />
          <img src="/instra3.jpg.webp" alt="" />
          <img src="/instra4.jpg.webp" alt="" />
          <img src="/barber5.jpg.webp" alt="" />
        </div>
      </section>
      <section className="testimonial">
        <h1 className="testimonial-h1 poppins-bold">Customers Say About Us</h1>
        <div className="testimonial-container">
          <div className="box">
            <p>
              "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter
              labore et dolore magna.
            </p>
            <div className="author">
              <img src="./customer2.png.webp" alt="" />
              <span> Wilma Mumduya</span>
            </div>
          </div>
          <div className="box">
            <p>
              "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter
              labore et dolore magna.
            </p>
            <div className="author">
              <img src="./customer2.png.webp" alt="" />
              <span> Wilma Mumduya</span>
            </div>
          </div>
          <div className="box">
            <p>
              "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter
              labore et dolore magna.
            </p>
            <div className="author">
              <img src="./customer2.png.webp" alt="" />
              <span> Wilma Mumduya</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
