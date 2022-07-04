import styled from 'styled-components';

const Svg = styled.svg.attrs(props => ({
	thereIsMargin: props.thereIsMargin ? '30px' : '0',
}))`
	width: 100%;
	height: 55px;
	text-align: center;
	margin-top: ${props => props.thereIsMargin};
	display: inline-block;
`;

export { Svg };
