import styled from 'styled-components';
import { neutralColor } from '../colors/colors';

export const Input = styled.input`
	box-sizing: border-box;
	width: 100%;
	height: 54px;
	padding: 0px 16px;
	background: #fff;
	border: 1px solid ${neutralColor.neutral400};
	font-size: 16px;
	line-height: 150%;
	color: ${neutralColor.neutral800};
	border-radius: 8px;
	outline: none;

	::placeholder {
		font-size: 16px;
		line-height: 150%;
		color: ${neutralColor.neutral400};
	}
`;

export const ChangeImageInput = styled.input`
	display: none;
`;
