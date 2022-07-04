import React, { useState } from 'react';
import {
	AccountTypeLogo,
	LogoOnAccountTypeButton,
} from '../accountCard/styleAccountCard';
import logo from '../../../assets/logo.svg';
import {
	ParagraphMedium2,
	ParagraphMedium3,
	ParagraphSemibold2,
	ParagraphSemibold3,
} from '../../../theme/paragraph/paragraph';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import {
	AccountInfoContainer,
	AmountInOthersAccounts,
	DropdownArrow,
	DropdownArrowContainer,
	DropdownItemList,
	DropdownList,
	HeaderContent,
	HeaderDropdown,
	NoOtherAccountMsgContainer,
	WrapperDropdown,
} from './styleDropdown';

const Dropdown = ({
	accountNumber,
	currency,
	balance,
	allAccountsByUser,
	bringCurrentAccount,
}) => {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	const accountNumberInStorage = sessionStorage.getItem('accNumber');

	const userAccounts = allAccountsByUser.filter(
		el => el.accountNumber !== accountNumberInStorage
	);

	const changeAccount = number => {
		if (accountNumberInStorage !== number) {
			bringCurrentAccount(number);
			sessionStorage.setItem('accNumber', number);
			setOpen(false);
		}
	};

	return (
		<WrapperDropdown className='dd-wrapper'>
			<HeaderDropdown
				tabIndex={0}
				className='dd-header'
				role='button'
				onKeypress={() => toggle(!open)}
				onClick={() => toggle(!open)}
			>
				<HeaderContent>
					<AccountTypeLogo>
						<LogoOnAccountTypeButton src={logo} />
					</AccountTypeLogo>
					<AccountInfoContainer>
						<ParagraphSemibold2>{currency.currencyText}</ParagraphSemibold2>
						<ParagraphMedium3>{accountNumber}</ParagraphMedium3>
					</AccountInfoContainer>
				</HeaderContent>
				<DropdownArrowContainer>
					<ParagraphSemibold3>
						{currency.currencySymbol}
						{balance}
					</ParagraphSemibold3>
					{open ? (
						<DropdownArrow icon={faCaretUp} />
					) : (
						<DropdownArrow icon={faCaretDown} />
					)}
				</DropdownArrowContainer>
			</HeaderDropdown>
			{/*  */}

			{open && (
				<DropdownList>
					{userAccounts.length > 0 ? (
						userAccounts.map(el => (
							<DropdownItemList
								key={el.id}
								onClick={() => changeAccount(el.accountNumber)}
							>
								<HeaderContent>
									<AccountTypeLogo>
										<LogoOnAccountTypeButton src={logo} />
									</AccountTypeLogo>
									<AccountInfoContainer>
										<ParagraphSemibold3>{el.currencyText}</ParagraphSemibold3>
										<ParagraphMedium3>{el.accountNumber}</ParagraphMedium3>
									</AccountInfoContainer>
								</HeaderContent>
								<AmountInOthersAccounts>
									<ParagraphSemibold3>
										{el.currencySymbol}
										{el.balance}
									</ParagraphSemibold3>
								</AmountInOthersAccounts>
							</DropdownItemList>
						))
					) : (
						<NoOtherAccountMsgContainer>
							<ParagraphMedium2>No dispones de otras cuentas</ParagraphMedium2>
						</NoOtherAccountMsgContainer>
					)}
				</DropdownList>
			)}
		</WrapperDropdown>
	);
};

export default Dropdown;
