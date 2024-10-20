import React, { useState } from 'react';
import styled from 'styled-components';
import ThreatAlerts from './components/ThreatAlert';
import CampusMap from './components/CampusMap';
import PubSafeResources from './components/PubSafeResources';

const DashboardContainer = styled.div`
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #4a90e2;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const NavButton = styled.button`
  background-color: #2c2c2c;
  color: #ffffff;
  border: 2px solid #4a90e2;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #4a90e2;
  }
`;

const App = () => {
  const [activeSection, setActiveSection] = useState('alerts');

  return (
    <DashboardContainer>
      <Title>Public Safety Dashboard</Title>
      <Nav>
        <NavButton onClick={() => setActiveSection('alerts')}>Threat Alerts</NavButton>
        <NavButton onClick={() => setActiveSection('map')}>Campus Map</NavButton>
        <NavButton onClick={() => setActiveSection('resources')}>PubSafe Resources</NavButton>
      </Nav>

      {/* Render the appropriate component based on activeSection */}
      {activeSection === 'alerts' && <ThreatAlerts />}
      {activeSection === 'map' && <CampusMap />}
      {activeSection === 'resources' && <PubSafeResources />}
    </DashboardContainer>
  );
};

export default App;
