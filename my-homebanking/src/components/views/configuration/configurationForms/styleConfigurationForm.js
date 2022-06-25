import styled from 'styled-components';
import { Button } from '../../../../theme/buttons/buttons';
import { errorColor, neutralColor } from '../../../../theme/colors/colors';
import { ChangeImageInput } from '../../../../theme/inputs/input';
import { ParagraphMedium3 } from '../../../../theme/paragraph/paragraph';
import { shadownMD } from '../../../../theme/shadown/shadown';

const ConfigurationFormContainer = styled.form`
	width: 272px;
	height: auto;
	background: #fff;
	box-shadow: ${shadownMD};
	border-radius: 16px;
	padding: 32px 20px;

	@media screen and (min-width: 744px) {
		padding: 40px 32px;
		/* original width: 504px - 64px (padding-left-right) = 440px (width)*/
		width: 440px;
	}
`;

const ConfigurationFormContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const ConfigurationFormInputs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const DeleteImageButton = styled.p`
	font-size: 14px;
	line-height: 17px;
	font-weight: 400px;
	color: ${errorColor.error600};
	padding: 12px;
	width: 76px;
`;

const ChangeImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	${ChangeImageInput} {
		color: ${neutralColor.neutral800};
	}

	${ParagraphMedium3} {
		color: ${neutralColor.neutral700};
	}
`;

const ChangeImageContent = styled.div`
	display: flex;
	gap: 16px;
`;

const Image = styled.img`
	width: 54px;
	height: 54px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 100%;
	object-fit: cover;
`;

const ImageButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const SaveChangesButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 18px 24px;
	margin-top: 8px;

	@media screen and (min-width: 744px) {
		width: 183px;
	}
`;

export {
	ConfigurationFormContainer,
	ConfigurationFormContent,
	ConfigurationFormInputs,
	SaveChangesButton,
	DeleteImageButton,
	ChangeImageContainer,
	ChangeImageContent,
	Image,
	ImageButtonsContainer,
};
