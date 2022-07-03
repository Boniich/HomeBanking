import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { ParagraphSemibold2 } from '../../../theme/paragraph/paragraph';
import { NotFoundArrowIcon } from '../../../theme/styledIcon/styledIcon';
import {
	ButtonContainer,
	ComeBackToSite,
	Heading,
	InsideButtonContent,
	NoFoundPageContainer,
	NoFoundPageContent,
	NoFoundPageTexts,
} from './styleNoFoundPage';
import { Link } from 'react-router-dom';

export const NoFoundPage = () => {
	return (
		<NoFoundPageContainer>
			<NoFoundPageContent>
				<NoFoundPageTexts>
					<Heading>404</Heading>
					<ParagraphSemibold2>
						No pudimos encontrar la pagina que estás buscando
					</ParagraphSemibold2>
				</NoFoundPageTexts>
				<ButtonContainer>
					<Link to='/'>
						<ComeBackToSite>
							<InsideButtonContent>
								<NotFoundArrowIcon icon={faAngleLeft} />
								Regresar al inicio
							</InsideButtonContent>
						</ComeBackToSite>
					</Link>
				</ButtonContainer>
			</NoFoundPageContent>
		</NoFoundPageContainer>
	);
};
