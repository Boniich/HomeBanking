import styled from 'styled-components';

const Loading = styled.svg`
	width: 100%;
	height: 55px;
	margin: 0;
	@media screen and (min-width: 1512px) {
		margin: 250px 0;
	}
`;

export const CircleLoader = () => {
	return (
		<Loading
			version='1.1'
			id='L9'
			x='0px'
			y='0px'
			viewBox='0 0 100 100'
			enable-background='new 0 0 0 0'
		>
			<path
				// primary color 500
				fill='#0FB398'
				d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'
			>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					type='rotate'
					dur='1s'
					from='0 50 50'
					to='360 50 50'
					repeatCount='indefinite'
				/>
			</path>
		</Loading>
	);
};
