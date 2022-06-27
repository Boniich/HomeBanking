import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {
	ParagraphMedium2,
	ParagraphMedium3,
	ParagraphSemibold2,
	ParagraphSemibold3,
} from '../../../../theme/paragraph/paragraph';
import {
	AccountTypeLogo,
	LogoOnAccountTypeButton,
} from '../../accountCard/styleAccountCard';
import {
	AccountInfoCantainer,
	DropdownArrow,
	DropdownArrowContainer,
	DropdownItemList,
	DropdownList,
	HeaderContent,
	HeaderDropdown,
	WrapperDropdown,
} from '../Dropdown';
import logo from '../../../../assets/logo.svg';
export const DestinyAccountSelect = ({
	accountNumber,
	currency,
	allAccountsByUser,
	changeDestiny,
}) => {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	const accountNumberInStorage = sessionStorage.getItem('accNumber');

	const userAccounts = allAccountsByUser.filter(
		el =>
			el.accountNumber !== accountNumber &&
			el.accountNumber !== accountNumberInStorage
	);
	console.log(userAccounts);


	return (
		<WrapperDropdown>
			<HeaderDropdown
				tabIndex={0}
				role='button'
				onKeypress={() => toggle(!open)}
				onClick={() => toggle(!open)}
			>
				<HeaderContent>
					<AccountTypeLogo>
						<LogoOnAccountTypeButton src={logo} />
					</AccountTypeLogo>
					<AccountInfoCantainer>
						<ParagraphSemibold2>{currency}</ParagraphSemibold2>
						<ParagraphMedium3>{accountNumber}</ParagraphMedium3>
					</AccountInfoCantainer>
				</HeaderContent>
				<DropdownArrowContainer>
					{open ? (
						<DropdownArrow icon={faCaretUp} />
					) : (
						<DropdownArrow icon={faCaretDown} />
					)}
				</DropdownArrowContainer>
			</HeaderDropdown>
			{open && (
				<DropdownList>
					{userAccounts.length > 0 ? (
						userAccounts.map(el => (
							<DropdownItemList
								key={el.id}
								onClick={() => changeDestiny(
									el.currencyText,
									el.accountNumber,
									el.cciCode
								)}
							>
								<HeaderContent>
									<AccountTypeLogo>
										<LogoOnAccountTypeButton src={logo} />
									</AccountTypeLogo>
									<AccountInfoCantainer>
										<ParagraphSemibold3>{el.currencyText}</ParagraphSemibold3>
										<ParagraphMedium3>{el.accountNumber}</ParagraphMedium3>
									</AccountInfoCantainer>
								</HeaderContent>
							</DropdownItemList>
						))
					) : (
						<ParagraphMedium2>No dispones de otras cuentas</ParagraphMedium2>
					)}
				</DropdownList>
			)}
		</WrapperDropdown>
	);
};
