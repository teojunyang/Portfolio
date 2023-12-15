// TabButton.tsx
import React from 'react';
import styled from 'styled-components';

const TabButtonContainer = styled.div`
    display: flex;
    margin-top: 10px;
`;

const TabItem = styled.div<{ isActive: boolean }>` // Add the isActive prop type definition
    position: relative;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${(props) => (props.isActive ? 'white' : 'gray')};
    border-bottom: ${(props) => (props.isActive ? '2px solid white' : '2px solid transparent')};

    &:hover {
        color: white;
    }
    `;

const TabItemImage = styled.img`
  margin-right: 5px; // Adjust the spacing between the image and text
  width: 24px; // Adjust the width of the image
  height: 24px; // Adjust the height of the image
`;

type TabButtonProps = {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
    img?: string[];
  };
  
  const TabButton = ({ tabs, activeTab, onTabChange, img }: TabButtonProps) => {
    return (
      <TabButtonContainer>
        {tabs.map((tab, index) => (
          <TabItem
            key={tab}
            isActive={activeTab === tab}
            onClick={() => onTabChange(tab)}
          >
            {img && img[index] && <TabItemImage src={img[index]} alt={`Tab ${index + 1}`} />} 
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabItem>
        ))}
      </TabButtonContainer>
    );
  };
  
  export default TabButton;
