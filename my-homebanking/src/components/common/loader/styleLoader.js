import styled from 'styled-components';

const Svg = styled.svg.attrs(props => ({
	thereIsMargin: props.thereIsMargin && '30px',
	marginForTransfList: props.marginForTransfList && `250px 0`,
	changeMobileWidth: props.changeMobileWidth ? '24px' : '100%',
	changeMobileHeight: props.changeMobileHeight ? '24px' : '55px',
	changeTableWidth: props.changeTableWidth ? '35px' : '100%',
	changeTableHeight: props.changeTableHeight ? '35px' : '55px',
	addPaddingToAccModal: props.addPaddingToAccModal && '0 5px',
}))`
	width: ${props => props.changeMobileWidth};
	padding: 0;
	height: ${props => props.changeMobileHeight};
	text-align: center;
	margin: ${props => props.marginForTransfList};
	margin-top: ${props => props.thereIsMargin};
	display: inline-block;

	@media screen and (min-width: 744px) {
		width: ${props => props.changeTableWidth};
		padding: ${props => props.addPaddingToAccModal};
		height: ${props => props.changeTableHeight};
	}
`;

export { Svg };
