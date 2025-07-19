
import './SectionHeader.css';

const ServicesSection = (props) => {
  return (
    <div className="services-section">
      <div className="text-container">
        <h1>{props.name}</h1>
      </div>
      <div className="image-container">
        <img src={props.src} alt="Services Image" />
      </div>
    </div>
  );
};

export default ServicesSection;