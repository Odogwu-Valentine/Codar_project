import Footer from './Footer';
import SectionHeader from "./SectionHeader";
function Galllery() {
  return (
    <>
      <SectionHeader name="Gallery" src="hero3.jpg.webp" />
      <section>
        <div class="grid-container">
          <img src="barber1.jpg.webp" class="grid-pic" alt="Pic1" />
          <img src="barber2.jpg.webp" class="grid-pic" alt="Pic2" />
          <img src="barber3.jpg.webp" class="grid-pic" alt="Pic3" />
          <img src="barber4.jpg.webp" class="grid-pic" alt="Pic4" />
          <img src="barber5.jpg.webp" class="grid-pic" alt="Pic5" />
          <img src="barber6.jpg.webp" class="grid-pic" alt="Pic6" />
        </div>
        </section>
      <Footer />
    </>
  );
}
export default Galllery;