import { LogoContainer, LogoContent, LogoImage, LogoTitle } from './styleLogo';
import logo from '../../../assets/logo.svg';
export const Logo = props => {
	return (
		<LogoContainer activeOnLogin={props.activeOnLogin}>
			<LogoContent>
				<LogoImage logoColor={props.logoColor} src={logo} />
				<LogoTitle>Saint Patrick</LogoTitle>
			</LogoContent>
		</LogoContainer>
	);
};
