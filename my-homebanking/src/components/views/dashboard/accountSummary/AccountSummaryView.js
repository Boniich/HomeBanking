import React, { useContext } from 'react';
import {
	infoColor,
	neutralColor,
	primaryColor,
} from '../../../../theme/colors/colors';
import { HeadingSemiBold3 } from '../../../../theme/heading/heading';
import {
	ParagraphMedium2,
	ParagraphMedium3,
	ParagraphSemibold3,
} from '../../../../theme/paragraph/paragraph';
import { CopyAccion } from '../../../common/copyAccion/CopyAccion';
import { Notification } from '../../../common/notification/Notification';
import { Popup } from '../../../common/popup/Popup';
import { SendButton } from '../../../common/sendButton/SendButton';
import {
	AccountSummary,
	AccountSummaryContent,
	NumberAccount,
	SavingType,
} from './styleAccountSummary';
import AccountContext from '../../../../context/accountContext/AccountContext';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AccountCard } from '../../../common/accountCard/AccountCard';
import {
	ActiveAccountIcon,
	BackgroundIconOfActiveAccoun,
} from '../../../common/accountCard/styleAccountCard';
import { Link } from 'react-router-dom';

export const AccountSummaryView = () => {
	const notificationText = 'Número de cuenta copiado';
	const notificationColor = infoColor.info900;
	const ref = React.createRef();
	const accNumber = sessionStorage.getItem('accNumber');

	const { accountNumber, balance, currency, allAccountsByUser } =
		useContext(AccountContext);

	return (
		<AccountSummary>
			<AccountSummaryContent>
				<SavingType>
					<ParagraphMedium3>{currency.currencyText}</ParagraphMedium3>
					<Popup
						action={
							<ParagraphSemibold3 ref={ref}>Cambiar cuenta</ParagraphSemibold3>
						}
						headerText='Cambiar Cuenta'
						height='auto'
						showHeader={true}
						closeIcon={true}
						tabletPadding='32px 32px 40px'
						thereIsAlingItem='center'
					>
						{allAccountsByUser.map(el => (
							<AccountCard
								key={el.id}
								typeSaving={el.currencyText}
								accountNumber={el.accountNumber}
							>
								{accNumber === el.accountNumber && (
									<BackgroundIconOfActiveAccoun>
										<ActiveAccountIcon icon={faCheck} />
									</BackgroundIconOfActiveAccoun>
								)}
							</AccountCard>
						))}
					</Popup>
				</SavingType>
				<HeadingSemiBold3>
					{currency.currencySymbol}
					{balance}
				</HeadingSemiBold3>
				<NumberAccount>
					<ParagraphMedium2>{accountNumber}</ParagraphMedium2>
					<CopyAccion
						numberAccount={accountNumber}
						notificationText={notificationText}
						notificationColor={notificationColor}
					/>
					<Notification background='#F0F9FF' border='1px solid #BAE6FD' />
				</NumberAccount>
				<Popup
					action={
						<SendButton
							ref={ref}
							text='Enviar Dinero'
							color={primaryColor.primary900}
						/>
					}
					headerText='Enviar Dinero'
					showHeader={true}
					closeIcon={true}
					tabletPadding='32px 32px 40px'
					thereIsAlingItem='center'
				>
					<Link to='make_transference_to_another_user/enter_number_account'>
						<SendButton
							text='A otra cuenta'
							extraText='San Patrick'
							color={neutralColor.neutral800}
							width='336px'
						/>
					</Link>

					<Link to='make_transference_to_my_account'>
						<SendButton
							text='A cuenta propia'
							color={neutralColor.neutral800}
							width='336px'
						/>
					</Link>
				</Popup>
			</AccountSummaryContent>
		</AccountSummary>
	);
};
