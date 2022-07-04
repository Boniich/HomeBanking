import { primaryColor } from '../../../../../../theme/colors/colors';
import { HeadingSemiBold5 } from '../../../../../../theme/heading/heading';
import { ParagraphMedium3 } from '../../../../../../theme/paragraph/paragraph';
import { SecondaryNav } from '../../../../../common/navs/secondaryNav/SecondaryNav';
import { UserResult } from '../../commonTransferenceComponents/userResult/UserResult';
import { Input } from '../../../../../../theme/inputs/input';
import { InputContainer } from '../../../../../../theme/inputs/inputContainer/inputContainer';
import React, { useContext, useEffect, useState } from 'react';
import AccountContext from '../../../../../../context/accountContext/AccountContext';
import { Loader } from '../../../../../common/loader/Loader';
import { Link } from 'react-router-dom';
import {
	EnterNumberContainer,
	EnterNumberContent,
	EnterNumberSection,
	ResultsContainer,
	UserNotFoundContainer,
} from './styleEnterNumberAccount';
import { ErrorMsgBeforeTransf } from '../../commonTransferenceComponents/errorMsgBeforeTransf/ErrorMsgBeforeTransf';

export const EnterNumberAccountView = () => {
	const [accNumber, setAccNumber] = useState({ accNumber: '' });
	const [makeCallToApi, setMakeCallToApi] = useState(false);
	const shortNavText = 'A otro usuario';
	const largeNavText = 'Transferencia a otro usuario';
	const errorMsg = 'No puedes transferir a una misma cuenta';
	const number = sessionStorage.getItem('accNumber');

	const {
		searchAccountUser,
		searchUserAccNUmber,
		searchUserName,
		searchUserLastName,
		searchUserImage,
		searchUserLoader,
		searchUserFound,
		searchUserNotFound,
		resetSearchUser,
		setIsTheSameAccount,
		isTheSameAccount,
	} = useContext(AccountContext);

	useEffect(() => {
		makeCallToApi && searchAccountUser(accNumber.accNumber);
	}, [makeCallToApi]);

	const handleChange = e => {
		setMakeCallToApi(false);
		const length = e.target.value.length;

		setAccNumber({ ...accNumber, [e.target.name]: e.target.value });

		if (length === 16 || length === 0) {
			resetSearchUser();
			setIsTheSameAccount(false);
		}

		if (length === 17) {
			if (e.target.value === number) {
				setIsTheSameAccount(true);
			} else {
				setMakeCallToApi(true);
			}
		}
	};

	return (
		<>
			<SecondaryNav shortNavText={shortNavText} largeNavText={largeNavText} />
			<EnterNumberSection>
				<EnterNumberContainer>
					<EnterNumberContent>
						<HeadingSemiBold5>Enviar Dinero</HeadingSemiBold5>
						<InputContainer>
							<ParagraphMedium3>Numero de cuenta</ParagraphMedium3>
							<Input
								type='search'
								name='accNumber'
								value={accNumber.accNumber}
								placeholder='000-000000000-000'
								onChange={handleChange}
							/>

							{searchUserLoader && (
								<Loader thereIsMargin circleColor={primaryColor.primary500} />
							)}

							{searchUserFound && (
								<ResultsContainer>
									<ParagraphMedium3>Numero de cuenta</ParagraphMedium3>
									<Link to='/make_transference_to_another_user/make_transference'>
										<UserResult
											name={searchUserName}
											lastName={searchUserLastName}
											userImage={searchUserImage}
											accountNumber={searchUserAccNUmber}
										/>
									</Link>
								</ResultsContainer>
							)}

							{searchUserNotFound && (
								<UserNotFoundContainer>
									<ParagraphMedium3>
										El número de cuenta no pertenece a ningun usuario
									</ParagraphMedium3>
								</UserNotFoundContainer>
							)}

							<ErrorMsgBeforeTransf
								errorState={isTheSameAccount}
								errorMsg={errorMsg}
							/>
						</InputContainer>
					</EnterNumberContent>
				</EnterNumberContainer>
			</EnterNumberSection>
		</>
	);
};
