import React from 'react';
import '../styles/CampusMap.css';

const CampusMap = () => {
  return (
    <div className="map-container">
      <h2>Campus Map</h2>
      <p>Here you can view the campus of Villanova University.</p>
      <iframe
        title="Villanova University Campus Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.119201166739!2d-75.32966848465068!3d40.035196979419596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e3ff4d4ebc1f%3A0x8e2957d66d3a2f7!2sVillanova%20University!5e0!3m2!1sen!2sus!4v1694241995635!5m2!1sen!2sus"
        width="600"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default CampusMap;
