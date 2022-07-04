import styled from 'styled-components';
import { neutralColor } from '../../../../../../theme/colors/colors';
import { HeadingSemiBold5 } from '../../../../../../theme/heading/heading';
import { InputContainer } from '../../../../../../theme/inputs/inputContainer/inputContainer';
import { ParagraphMedium3 } from '../../../../../../theme/paragraph/paragraph';
import { shadownMD, shadownXS } from '../../../../../../theme/shadown/shadown';

const EnterNumberSection = styled.section`
	display: flex;
	justify-content: center;
`;

const EnterNumberContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px 24px 40px;
	gap: 24px;

	${HeadingSemiBold5} {
		color: ${neutralColor.neutral600};
		font-weight: 600;
	}
`;

const UserNotFoundContainer = styled.div`
	padding: 16px;
	background: ${neutralColor.neutral100};
	border-radius: 8px;
	/* original margin: 24px - 8px de gap of InputContainer = 16px  */
	margin-top: 16px;

	${ParagraphMedium3} {
		color: ${neutralColor.neutral800};
	}
`;

const EnterNumberContainer = styled.div`
	width: 312px;
	height: auto;
	background: #fff;
	box-shadow: ${shadownXS};
	border-radius: 16px;
	margin-top: 40px;

	@media screen and (min-width: 744px) {
		width: 402px;
		margin-top: 64px;
		box-shadow: ${shadownMD};

		${InputContainer} {
			min-height: 143px;
		}

		${EnterNumberContent} {
			padding: 32px;
			gap: 32px;
		}
	}
`;

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	/* original margin: 24px - 8px de gap of InputContainer = 16px  */
	margin-top: 16px;
	${ParagraphMedium3} {
		color: ${neutralColor.neutral500};
	}
`;

export {
	EnterNumberSection,
	EnterNumberContent,
	UserNotFoundContainer,
	EnterNumberContainer,
	ResultsContainer,
};
