import styled from "styled-components";

export const ConfigurationSection = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	margin-top: 40px;

	@media screen and (min-width: 744px) {
		gap: 48px;
	}
`;