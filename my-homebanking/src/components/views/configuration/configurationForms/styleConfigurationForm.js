import styled from 'styled-components';
import { Button } from '../../../../theme/buttons/buttons';
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
};
