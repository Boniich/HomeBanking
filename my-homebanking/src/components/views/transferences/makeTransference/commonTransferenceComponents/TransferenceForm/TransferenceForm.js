import React, { createRef, useContext, useState } from 'react';
import AccountContext from '../../../../../../context/accountContext/AccountContext';
import { Button } from '../../../../../../theme/buttons/buttons';
import {
	ParagraphMedium3,
	ParagraphSemibold2,
} from '../../../../../../theme/paragraph/paragraph';
import Dropdown from '../../../../../common/dropdown/Dropdown';
import { SecondaryNav } from '../../../../../common/navs/secondaryNav/SecondaryNav';
import { Notification } from '../../../../../common/notification/Notification';
import { TransferencePopup } from '../../../../../common/popup/transferencePopup/TransferencePopup';
import { ProcessingRequestButton } from '../../../../../common/processingRequestButtton/ProcessingRequestButton';
import { ErrorMsgBeforeTransf } from '../errorMsgBeforeTransf/ErrorMsgBeforeTransf';
import {
	AccountContainer,
	AccountContent,
	AmountBox,
	AmountContent,
	AmountInput,
	TransactionContent,
	TransactionForm,
	DropdownContent,
} from './styleTransferenceForm';

export const TransferenceForm = ({ children, shortNavText, largeNavText }) => {
	const [amount, setAmount] = useState({ amount: '' });
	const [notEnoughBalanceError, setNotEnoughBalanceError] = useState(false);
	const [buttonIsDisable, setButtonIsDisable] = useState(true);
	const ref = createRef();
	const errorMsgNotEnoughBalance = 'No cuentas con saldo suficiente';
	const {
		accountNumber,
		currency,
		balance,
		bringCurrentAccount,
		allAccountsByUser,
		makeTransference,
		transferenceLoader,
		searchUserName,
		searchUserLastName,
		successTransference,
		isTheSameAccount,
	} = useContext(AccountContext);

	const handleKeyUp = () => {
		amount.amount.length !== 0 && !isTheSameAccount
			? setButtonIsDisable(false)
			: setButtonIsDisable(true);

		if (amount.amount > balance) {
			setButtonIsDisable(true);
			setNotEnoughBalanceError(true);
		} else {
			setNotEnoughBalanceError(false);
		}
	};

	const handleChange = e => {
		const value = e.target.value;
		const reg = /([0-9][.]{0,1})$/g;

		const test = reg.test(value);

		e.target.value === '' && setAmount({ amount: '' });

		test && setAmount({ ...amount, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (
			amount.amount.length !== 0 &&
			amount.amount < balance &&
			!isTheSameAccount
		) {
			makeTransference(amount.amount);
		}
	};

	return (
		<>
			<SecondaryNav shortNavText={shortNavText} largeNavText={largeNavText} />
			<TransactionForm onSubmit={handleSubmit}>
				<TransactionContent>
					<AmountBox>
						<AmountContent>
							<AmountInput
								type='text'
								name='amount'
								autoComplete='off'
								placeholder='$00.00'
								value={amount.amount}
								onChange={handleChange}
								onKeyUp={handleKeyUp}
							/>

							<ParagraphMedium3>Monto a enviar</ParagraphMedium3>
						</AmountContent>
					</AmountBox>
					<AccountContainer>
						<AccountContent>
							{/* change name of dropdown component */}
							<DropdownContent>
								<ParagraphSemibold2>Cuenta de cargo</ParagraphSemibold2>
								<Dropdown
									accountNumber={accountNumber}
									currency={currency}
									balance={balance}
									allAccountsByUser={allAccountsByUser}
									bringCurrentAccount={bringCurrentAccount}
								/>
							</DropdownContent>
							<ErrorMsgBeforeTransf
								errorState={notEnoughBalanceError}
								errorMsg={errorMsgNotEnoughBalance}
							/>
						</AccountContent>
						<AccountContent>
							<DropdownContent>
								<ParagraphSemibold2>Cuenta de destino</ParagraphSemibold2>
								{children}
							</DropdownContent>
						</AccountContent>
					</AccountContainer>
					<Button
						ref={ref}
						className={`${buttonIsDisable === true ? 'disable' : ''}`}
						disabled={buttonIsDisable}
						type='submit'
					>
						<ProcessingRequestButton
							state={transferenceLoader}
							textBeforeRequest='Confirmar transferencia'
						/>
					</Button>
					<TransferencePopup
						open={successTransference}
						amount={amount.amount}
						name={searchUserName}
						lastName={searchUserLastName}
						currency={currency}
					></TransferencePopup>
				</TransactionContent>
			</TransactionForm>
			<Notification background='#FFF7ED' border='#FFF7ED' />
		</>
	);
};
