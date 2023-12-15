import React, { useState } from 'react';
import styled from 'styled-components';
import TabButton from './TabButton';
import ExperienceSection from './Experience'; // Update the path based on your file structure
import EducationSection from './Education'; // Update the path based on your file structure
import CombinedText from '../sub/CombinedText';

const MainContainer = styled.div`
  /* Add your styles for the main container */
`;

const CenteredTabButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the tabs */
  margin-top: 10px;
`;

const Combined = () => {
  const [activeTab, setActiveTab] = useState('education'); // Default tab

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const tabImages = [
    '/certificate.png',
    '/learning.png',
  ];

  return (
    <MainContainer id="achievement">
        <CombinedText />
      <CenteredTabButtonContainer>
        <TabButton
          tabs={['education', 'experience']} // Add or remove tabs as needed
          activeTab={activeTab}
          onTabChange={handleTabChange}
          img={tabImages}
        />
      </CenteredTabButtonContainer>

      {activeTab === 'experience' && (
        <ExperienceSection />
      )}

      {activeTab === 'education' && (
        <EducationSection />
      )}
    </MainContainer>
  );
};

export default Combined;
