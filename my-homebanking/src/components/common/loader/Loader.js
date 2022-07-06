import React from 'react';
import { Svg } from './styleLoader';

/**
 *
 * @param {string} circleColor recive the color of loader (it is not background)
 * @param {string} thereIsMargin if it is setted loader will have a padding top of 30px, if not, it will be of 0
 * @returns
 */

export const Loader = ({
	changeMobileWidth,
	changeMobileHeight,
	changeTableWidth,
	changeTableHeight,
	circleColor,
	thereIsMargin,
	marginForTransfList,
	addPaddingToAccModal,
}) => {
	return (
		<Svg
			changeMobileWidth={changeMobileWidth}
			changeMobileHeight={changeMobileHeight}
			changeTableWidth={changeTableWidth}
			changeTableHeight={changeTableHeight}
			thereIsMargin={thereIsMargin}
			marginForTransfList={marginForTransfList}
			addPaddingToAccModal={addPaddingToAccModal}
			version='1.1'
			id='L5'
			x='0px'
			y='0px'
			viewBox='0 0 100 100'
			enable-background='new 0 0 0 0'
		>
			<circle fill={circleColor} stroke='none' cx='6' cy='50' r='6'>
				<animateTransform
					attributeName='transform'
					dur='1s'
					type='translate'
					values='0 15 ; 0 -15; 0 15'
					repeatCount='indefinite'
					begin='0.1'
				/>
			</circle>
			<circle fill={circleColor} stroke='none' cx='30' cy='50' r='6'>
				<animateTransform
					attributeName='transform'
					dur='1s'
					type='translate'
					values='0 10 ; 0 -10; 0 10'
					repeatCount='indefinite'
					begin='0.2'
				/>
			</circle>
			<circle fill={circleColor} stroke='none' cx='54' cy='50' r='6'>
				<animateTransform
					attributeName='transform'
					dur='1s'
					type='translate'
					values='0 5 ; 0 -5; 0 5'
					repeatCount='indefinite'
					begin='0.3'
				/>
			</circle>
		</Svg>
	);
};
