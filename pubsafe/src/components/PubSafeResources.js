import React from 'react';
import styled from 'styled-components';

const ResourcesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ResourceItem = styled.li`
  background-color: #2c2c2c;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PubSafeResources = () => {
  return (
    <>
      <h2>Public Safety Resources</h2>
      <ResourcesList>
        <ResourceItem>
          <strong>Emergency Pub Safe</strong> 610-519-4444
        </ResourceItem>
        <ResourceItem>
          <strong>Non-Emergency Pub Safe</strong> 610-519-5800
        </ResourceItem>
        <ResourceItem>
          <strong>Sexual Harrassment - Title IX Office</strong> 610-519-8805
        </ResourceItem>
        <ResourceItem>
          <strong>Safety Escort:</strong> Available 24/7
        </ResourceItem>
      </ResourcesList>
    </>
  );
};

export default PubSafeResources;
