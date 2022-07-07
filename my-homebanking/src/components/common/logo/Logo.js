import React from 'react';
import { LogoContainer, LogoContent, LogoImage, LogoTitle } from './styleLogo';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexLink = styled(Link)`
	display: flex;
`;
export const Logo = props => {
	return (
		<LogoContainer activeOnLogin={props.activeOnLogin}>
			<FlexLink to={props.url}>
				<LogoContent>
					<LogoImage logoColor={props.logoColor} src={logo} />
					<LogoTitle>Saint Patrick</LogoTitle>
				</LogoContent>
			</FlexLink>
		</LogoContainer>
	);
};
