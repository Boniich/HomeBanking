import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import AccountContext from '../../../../context/accountContext/AccountContext';
import { HeadingSemiBold5 } from '../../../../theme/heading/heading';
import { ParagraphMedium2 } from '../../../../theme/paragraph/paragraph';
import { WelcomeUserContainer, WelcomeUserTexs } from './StyleWelcomeHeader';

const WelcomeHeader = () => {
	const { name } = useContext(AccountContext);

	return (
		<WelcomeUserContainer>
			<WelcomeUserTexs>
				<HeadingSemiBold5>Hola, {name}</HeadingSemiBold5>
				<ParagraphMedium2>Bienvenido a tu banca movil</ParagraphMedium2>
			</WelcomeUserTexs>
		</WelcomeUserContainer>
	);
};

export default WelcomeHeader;
