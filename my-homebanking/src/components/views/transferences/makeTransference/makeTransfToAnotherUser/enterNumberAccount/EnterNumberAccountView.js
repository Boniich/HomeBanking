import styled from 'styled-components';
import {
	neutralColor,
	primaryColor,
} from '../../../../../../theme/colors/colors';
import { HeadingSemiBold5 } from '../../../../../../theme/heading/heading';
import { ParagraphMedium3 } from '../../../../../../theme/paragraph/paragraph';
import { shadownMD, shadownXS } from '../../../../../../theme/shadown/shadown';
import { SecondaryNav } from '../../../../../common/navs/secondaryNav/SecondaryNav';
import { UserResult } from '../../commonTransferenceComponents/userResult/UserResult';
import { Input } from '../../../../../../theme/inputs/input';
import { InputContainer } from '../../../../../../theme/inputs/inputContainer/inputContainer';
import React, { useContext, useEffect, useState } from 'react';
import AccountContext from '../../../../../../context/accountContext/AccountContext';
import { Loader } from '../../../../../common/loader/Loader';
import { Link } from 'react-router-dom';
const EnterNumberSection = styled.section`
	display: flex;
	justify-content: center;
`;

const EnterNumberContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px 24px 40px;
	gap: 24px;

	${HeadingSemiBold5} {
		color: ${neutralColor.neutral600};
		font-weight: 600;
	}
`;

// const EnterNumberInputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;

//   ${ParagraphMedium3} {
//     color: ${neutralColor.neutral700};
//     padding-left: 4px;
//   }
// `;

const UserNotFoundContainer = styled.div`
	padding: 16px;
	background: ${neutralColor.neutral100};
	border-radius: 8px;

	${ParagraphMedium3} {
		color: ${neutralColor.neutral800};
	}
`;

const EnterNumberContainer = styled.div`
	width: 312px;
	height: auto;
	background: #fff;
	box-shadow: ${shadownXS};
	border-radius: 16px;
	margin-top: 40px;

	@media screen and (min-width: 744px) {
		width: 402px;
		margin-top: 64px;
		box-shadow: ${shadownMD};

		${EnterNumberContent} {
			padding: 32px 32px 40px;
			gap: 32px;
		}
	}
`;

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	${ParagraphMedium3} {
		color: ${neutralColor.neutral500};
	}
`;

export const EnterNumberAccountView = () => {
	const [accNumber, setAccNumber] = useState({ accNumber: '' });
	const [makeCallToApi, setMakeCallToApi] = useState(false);
	const shortNavText = 'A otro usuario';
	const largeNavText = 'Transferencia a otro usuario';
	console.log('valor', accNumber);

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
		}

		if (length === 17) {
			setMakeCallToApi(true);
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
						</InputContainer>

						{/* Get a result */}
						{searchUserLoader && (
							<Loader circleColor={primaryColor.primary500} />
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
					</EnterNumberContent>
				</EnterNumberContainer>
			</EnterNumberSection>
		</>
	);
};
