import React, { useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';

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

const Subtitle = styled.h2`
  color: #4a90e2;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const AlertList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AlertItem = styled.li`
  background-color: #2c2c2c;
  border-left: 5px solid #4a90e2;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(5px);
  }
`;

const AlertType = styled.span`
  font-weight: bold;
  color: #4a90e2;
`;

const NoAlertsMessage = styled.p`
  color: #999;
  font-style: italic;
`;

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [socket, setSocket] = useState(null);

  const handleThreatAlert = useCallback((data) => {
    console.log('Received threat alert:', data);
    setAlerts(prevAlerts => [...prevAlerts, data]);
  }, []);

  useEffect(() => {
    // Connect to the Flask server with the '/threat' namespace
    const newSocket = io('http://localhost:4900/threat');
    setSocket(newSocket);

    return () => {
      if (newSocket) newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // Listen for 'threat_alert' event on the '/threat' namespace
      socket.on('threat_alert', handleThreatAlert);

      return () => {
        socket.off('threat_alert', handleThreatAlert);
      };
    }
  }, [socket, handleThreatAlert]);

  return (
    <DashboardContainer>
      <Title>Public Safety Dashboard</Title>
      <Subtitle>Threat Alerts</Subtitle>
      {alerts.length === 0 ? (
        <NoAlertsMessage>No alerts at the moment.</NoAlertsMessage>
      ) : (
        <AlertList>
          {alerts.map((alert, index) => (
            <AlertItem key={index}>
              <AlertType>Threat Type:</AlertType> {alert.threaten_type}<br />
              <AlertType>Detected:</AlertType> {alert.answer}<br />
              <AlertType>Conversation:</AlertType> {alert.conversation}
            </AlertItem>
          ))}
        </AlertList>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
