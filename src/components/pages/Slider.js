import React from 'react';
import styled, { keyframes } from 'styled-components';
import exchnageBar from 'assests/images/exchange-bar.svg';
import { sliderConfig } from 'configs/slider';

const Slider = () => {
	return (
		<SliderWrapper>
			<ExchnageBarBg>
				<img src={exchnageBar} alt="exchange bar bg" />
				<HighwaySlider>
					<HighwayBarrier>
						<HightLane>
							{sliderConfig.map(({ logo }, idx) => (
								<HighwayCar key={idx}>
									<img src={logo} alt="logs" />
								</HighwayCar>
							))}
						</HightLane>
					</HighwayBarrier>
				</HighwaySlider>
			</ExchnageBarBg>
		</SliderWrapper>
	);
};
export default Slider;

const SliderWrapper = styled.div`
	margin-block-end: 5rem;
	display: flex;
	align-items: flex-end;
`;

const ExchnageBarBg = styled.div`
	position: relative;
	> img {
		width: 214rem;
		max-width: 100%;
	}
`;

const HighwaySlider = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	position: absolute;
	top: 60%;
`;

const HighwayBarrier = styled.div`
	overflow: hidden;
	position: relative;
`;

const HightLane = styled.ul`
	display: flex;
	height: 100%;
	width: calc(180px * 24);
`;

const translateinfinite = keyframes`
	100% { transform:translateX(calc(-180px * 12))  }
`;

const HighwayCar = styled.li`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	animation: ${translateinfinite} 25s linear infinite;
`;
