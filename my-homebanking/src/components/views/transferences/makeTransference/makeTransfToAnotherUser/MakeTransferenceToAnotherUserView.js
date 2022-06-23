import { useContext } from 'react';
import AccountContext from '../../../../../context/accountContext/AccountContext';
import { TransferenceForm } from '../commonTransferenceComponents/TransferenceForm/TransferenceForm';
import { UserResult } from '../commonTransferenceComponents/userResult/UserResult';

export const MakeTransferenceToAnotherUserView = () => {
	const shortNavText = 'A otro usuario';
	const largeNavText = 'Transferencia a otro usuario';

	const {
		searchUserAccNUmber,
		searchUserName,
		searchUserLastName,
		searchUserImage,
	} = useContext(AccountContext);

	return (
		<TransferenceForm shortNavText={shortNavText} largeNavText={largeNavText}>
			<UserResult
				removeBorder={true}
				removePadding={true}
				disableicon={true}
				name={searchUserName}
				lastName={searchUserLastName}
				userImage={searchUserImage}
				accountNumber={searchUserAccNUmber}
			/>
		</TransferenceForm>
	);
};
