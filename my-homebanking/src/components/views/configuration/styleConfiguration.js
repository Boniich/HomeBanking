import styled from 'styled-components';

export const ConfigurationSection = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	margin-top: 100px;

	@media screen and (min-width: 744px) {
		gap: 48px;
		margin-top: 120px;
	}

	@media screen and (min-width: 1512px) {
		gap: 48px;
		margin-top: 160px;
	}
`;
