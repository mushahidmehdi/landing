import React, { useState } from 'react';
import styled from 'styled-components';
import { secondaryHeader } from 'configs/secondaryHeader';

const SecondaryHeader = ({ setUserType }) => {
	const [activeButton, setActiveButton] = useState(0);

	const handleActiveUser = (param) => {
		setUserType(param);
		setActiveButton(param);
	};

	return (
		<SecondaryHeaderWrapper>
			{secondaryHeader.map(({ name, tabId }) => (
				<Toggle key={tabId} tabId={tabId} activeButton={activeButton} onClick={() => handleActiveUser(tabId)}>
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
	margin-block: 1rem;
`;

const Toggle = styled.div`
	cursor: pointer;
	display: flex;
	gap: 1rem;
	padding-inline: 1rem;
	background-color: ${({ theme, activeButton, tabId }) => (activeButton === tabId ? `${theme.primary.default}` : '')};
	border-radius: ${({ activeButton, tabId }) => (activeButton === tabId ? '18px' : '')};

	> p {
		padding: 0.45rem 1.8rem;
		color: ${({ theme, activeButton, tabId }) => (activeButton === tabId ? theme.gray.fff : theme.primary.default)};
		font-size: 1rem;
		font-weight: 100;
		line-height: 18px;
		text-align: center;
	}
`;

export default SecondaryHeader;
