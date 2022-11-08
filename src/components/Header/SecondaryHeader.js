import React, { useState } from 'react';
import styled from 'styled-components';
import { secondaryHeader } from 'configs/secondaryHeader';

const SecondaryHeader = () => {
  const [activeButton, setActiveButton] = useState();
  return (
    <SecondaryHeaderWrapper>
      {secondaryHeader.map(({ name, tabId }) => (
        <Toggle
          key={tabId}
          tabId={tabId}
          activeButton={activeButton}
          onClick={() => setActiveButton(tabId)}
        >
          <p>{name}</p>
        </Toggle>
      ))}
    </SecondaryHeaderWrapper>
  );
};
const SecondaryHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfd2fa;
  border-radius: 99rem;
`;

const Toggle = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding-inline: 1rem;
  background-color: ${({ theme, activeButton, tabId }) =>
    activeButton === tabId ? `${theme.primary.default}` : ''};

  border-radius: ${({ activeButton, tabId }) =>
    activeButton === tabId ? '99rem' : ''};

  > p {
    font-size: 0.9rem;
    color: ${({ theme, activeButton, tabId }) =>
      activeButton === tabId ? theme.gray.fff : theme.primary.default};
  }
`;

export default SecondaryHeader;
