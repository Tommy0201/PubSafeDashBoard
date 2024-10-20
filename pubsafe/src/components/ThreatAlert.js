import React, { useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import '../styles/ThreatAlerts.css';  // Import the CSS file

const ThreatAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [socket, setSocket] = useState(null);

  const handleThreatAlert = useCallback((data) => {
    console.log('Received threat alert:', data);
    setAlerts(prevAlerts => [...prevAlerts, data]);
  }, []);

  useEffect(() => {
    const newSocket = io('http://0.0.0.0:4900/threat');
    setSocket(newSocket);

    return () => {
      if (newSocket) newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('threat_alert', handleThreatAlert);

      return () => {
        socket.off('threat_alert', handleThreatAlert);
      };
    }
  }, [socket, handleThreatAlert]);

  return (
    <>
      <h2 className="heading">Threat Alerts</h2>
      {alerts.length === 0 ? (
        <p className="no-alerts-message">No alerts at the moment.</p>
      ) : (
        <ul className="alert-list">
          {alerts.map((alert, index) => (
            <li key={index} className="alert-item">
              <span className="alert-type">Threat Type:</span> {alert.threaten_type}<br />
              <span className="alert-type">Detected:</span> {alert.answer}<br />
              <span className="alert-type">Conversation:</span> {alert.conversation}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ThreatAlerts;
