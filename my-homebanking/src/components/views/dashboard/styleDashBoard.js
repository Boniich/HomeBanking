import styled from 'styled-components';

const UserSection = styled.div`
	display: flex;
	justify-content: center;
`;

const UserContent = styled.div`
	position: absolute;
	top: 132px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	@media screen and (min-width: 744px) {
		top: 165px;
	}

	@media screen and (min-width: 1512px) {
		top: 352px;
		padding-bottom: 40px;
		flex-direction: row;
	}
`;

export { UserSection, UserContent };
