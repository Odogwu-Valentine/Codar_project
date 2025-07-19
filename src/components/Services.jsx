import Footer from './Footer';
import SectionHeader from "./SectionHeader";
function Services() {
  return (
    <>
      <SectionHeader name=" Our Services" src="about2.jpg.webp" />
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
  )
}
export default Services;