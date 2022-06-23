import styled from 'styled-components';
import { Button } from '../../../../../../theme/buttons/buttons';
import { errorColor, neutralColor } from '../../../../../../theme/colors/colors';
import {
	ParagraphMedium3,
	ParagraphSemibold2,
} from '../../../../../../theme/paragraph/paragraph';
import { shadownMD, shadownXS } from '../../../../../../theme/shadown/shadown';

const TransactionForm = styled.form`
	display: flex;
	justify-content: center;
`;

const TransactionContent = styled.div`
	display: flex;
	flex-direction: column;

	${Button} {
		margin-bottom: 20px;
	}

	.disable {
		background-color: ${neutralColor.neutral200};
		color: ${neutralColor.neutral400};
		cursor: no-drop;
	}
`;

const AmountBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;
	width: 312px;
	height: 211px;
	box-shadow: ${shadownXS};
	border-radius: 16px;
	background: #fff;
	margin: 40px 0 32px 0;

	@media screen and (min-width: 744px) {
		width: 404px;
		height: 271px;
		box-shadow: ${shadownMD};
		border-radius: 20px;
	}
`;

const AmountContent = styled.div`
	display: flex;
	gap: 8px;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${ParagraphMedium3} {
		color: ${neutralColor.neutral500};
	}
`;

const AmountInput = styled.input`
	padding: 0;
	border: none;
	outline: none;
	width: 100%;
	height: 43px;
	font-weight: 600;
	font-size: 36px;
	line-height: 120%;
	text-align: center;
	letter-spacing: -0.02px;
	color: ${neutralColor.neutral800};
	::placeholder {
		font-weight: 600;
		font-size: 36px;
		line-height: 120%;
		text-align: center;
		letter-spacing: -0.02px;
		color: ${neutralColor.neutral400};
	}

	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	@media screen and (min-width: 744px) {
		height: 58px;
		font-size: 48px;

		::placeholder {
			font-size: 48px;
		}
	}
`;

const AccountContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-bottom: 96px;
`;
const AccountContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;


`;

const DropdownContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	${ParagraphSemibold2} {
		color: ${neutralColor.neutral600};
	}
`;

const MsgErrorContainer = styled.span`
	${ParagraphMedium3}{
		color: ${errorColor.error600}
	}
`

const MotiveContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 0 32px;
`;

const MotiveInput = styled.input`
	font-family: inherit;
	padding: 0;
	border: none;
	outline: none;

	::placeholder {
		font-size: 14px;
		line-height: 17px;
		color: ${neutralColor.neutral500};
	}
	@media screen and (min-width: 744px) {
		::placeholder {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

export {
	AmountBox,
	AmountContent,
	AmountInput,
	TransactionContent,
	TransactionForm,
	AccountContainer,
	AccountContent,
	MotiveContainer,
	DropdownContent,
	MsgErrorContainer,
	MotiveInput,
};
