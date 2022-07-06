import styled from 'styled-components';
import { shadownMD, shadownXS } from '../../../../theme/shadown/shadown';

const ActivityContainer = styled.div`
	width: 312px;
	margin: 0 auto;
	margin-bottom: 100px;
	border-radius: 16px;
	background-color: #fff;
	box-shadow: ${shadownXS};
	@media screen and (min-width: 744px) {
		width: 544px;
		border-radius: 20px;
		box-shadow: ${shadownMD};
	}

	@media screen and (min-width: 1512px) {
		width: ${props => props.desktopWidth || '595px'};
	}
`;

export { ActivityContainer };
