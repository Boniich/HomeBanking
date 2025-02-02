import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Button } from '../../../theme/buttons/buttons';
import { Caption } from '../../../theme/caption/caption';

import {
	errorColor,
	primaryColor,
	neutralColor,
} from '../../../theme/colors/colors';
import {
	ParagraphMedium3,
	ParagraphUnderline3,
} from '../../../theme/paragraph/paragraph';
import { shadownXL } from '../../../theme/shadown/shadown';

const LoginSection = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 744px) {
		background: #fff;
	}
`;

const EmailContainer = styled.div`
	margin-bottom: 24px;
`;

const PasswordContainer = styled.div`
	margin-bottom: 16px;
`;

const InputIconContainer = styled.div`
	position: relative;
`;

const IconEye = styled(FontAwesomeIcon)`
	position: absolute;
	right: 16px;
	top: 35%;
	color: ${neutralColor.neutral800};
	font-size: 18px;
	z-index: 1000;
	cursor: pointer;
`;

const Input = styled.input`
	width: 100%;
	height: 54px;
	box-sizing: border-box;
	padding: 0 16px;
	color: ${neutralColor.neutral800};
	border-radius: 8px;
	border: ${props =>
		props.nonoBorder === true
			? 'none'
			: `1px solid ${neutralColor.neutral400}`};
	outline: ${props =>
		props.nonoBorder === true ? `2px solid ${errorColor.error500}` : 'none'};
	font-size: 16px;
	line-height: 24px;

	::placeholder {
		color: ${neutralColor.neutral400};
		font-size: 16px;
		line-height: 24px;
	}

	&:focus {
		border: ${props =>
			props.nonoBorder === true
				? 'none'
				: `2px solid ${primaryColor.primary500}`};
		outline: ${props =>
			props.nonoBorder === true
				? `2px solid ${errorColor.error500}`
				: `3px solid ${primaryColor.primary200}`};
		box-shadow: ${props =>
			props.nonoBorder === true
				? 'none'
				: `0px 18px 56px -2px rgba(16, 71, 62, 0.13)`};
	}
`;

const ShowLoginErros = styled.span`
	padding: 4px 0 0 4px;
	color: ${errorColor.error500};
	font-size: 12px;
	line-height: 18px;
`;

const Box = styled.div`
	box-sizing: border-box;
	width: 360px;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background: #ffffff;
	border-radius: 20px;
	padding: 60px 24px 56px;

	${Button} {
		width: 312px;
	}

	${ParagraphMedium3} {
		color: ${neutralColor.neutral700};
		text-align: left;
		margin: 0;
		padding: 0 0 8px 4px;
	}

	.inputPassword {
		padding: 0 16px;
		font-size: 17px;
		line-height: 24px;
	}

	${ParagraphUnderline3} {
		color: ${primaryColor.primary500};
		text-align: right;
		margin: 16px 0 32px;
		padding: 0;
	}

	${Caption} {
		display: block;
		width: 100%;
		text-align: left;
		color: ${errorColor.error500};
		padding: 4px 0 0 4px;
	}

	@media screen and (min-width: 744px) {
		width: 437px;
		height: 561px;
		box-shadow: ${shadownXL};
		padding: 60px 48px 56px;

		${Button} {
			width: 341px;
		}
	}
`;

export {
	Box,
	LoginSection,
	EmailContainer,
	PasswordContainer,
	InputIconContainer,
	IconEye,
	Input,
	ShowLoginErros,
};
