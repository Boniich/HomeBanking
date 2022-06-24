import React, { useState } from 'react';
import styled from 'styled-components';
import { neutralColor, primaryColor } from '../../../theme/colors/colors';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { shadownMD } from '../../../theme/shadown/shadown';

export const WrapperDropdown = styled.div`
	display: flex;
	min-height: 78px;
	flex-wrap: wrap;
	position: relative;
`;

export const HeaderDropdown = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	width: 100%;
	background: ${primaryColor.primary50};
	border: 1px solid ${primaryColor.primary500};
	border-radius: 8px;
	padding: 0 20px;
`;

export const HeaderContent = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
`;
export const AccountInfoCantainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DropdownList = styled.ul`
	/* original width: 312px - 32px (16 + 16) of padding = 280px */
	width: 280px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: absolute;
	top: 70px;
	background: #fff;
	z-index: 100;
	box-shadow: ${shadownMD};
	padding: 16px;
	margin: 0;
	margin-top: 20px;
	border-radius: 8px;

	@media screen and (min-width: 744px) {
		/* original width: 404px - 48px (24 + 24) of padding = 356px */
		width: 356px;
		padding: 24px;
	}
`;

export const DropdownArrowContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 9px;

	${ParagraphSemibold3} {
		color: ${neutralColor.neutral800};
	}
`;

export const DropdownArrow = styled(FontAwesomeIcon)`
	width: 12px;
	height: 12px;
	color: ${neutralColor.neutral800};
`;

export const DropdownItemList = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${neutralColor.neutral100};
	padding: 16px;
	border: 1px solid ${neutralColor.neutral300};
	border-radius: 4px;
	cursor: pointer;
`;

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
	console.log(userAccounts);

	const changeAccount = number => {
		if (accountNumberInStorage !== number) {
			console.log('entra');
			console.log(number);
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
					<AccountInfoCantainer>
						<ParagraphSemibold2>{currency.currencyText}</ParagraphSemibold2>
						<ParagraphMedium3>{accountNumber}</ParagraphMedium3>
					</AccountInfoCantainer>
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
									<AccountInfoCantainer>
										<ParagraphSemibold3>{el.currencyText}</ParagraphSemibold3>
										<ParagraphMedium3>{el.accountNumber}</ParagraphMedium3>
									</AccountInfoCantainer>
								</HeaderContent>
								<ParagraphSemibold3>
									{el.currencySymbol}
									{el.balance}
								</ParagraphSemibold3>
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

export default Dropdown;
