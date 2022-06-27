import React from 'react';
import { ParagraphMedium3 } from '../../../../../../theme/paragraph/paragraph';
import { MsgErrorContainer } from './styleErrorMsgBeforeTransf';

export const ErrorMsgBeforeTransf = ({ errorState, errorMsg }) => {
	return (
		<>
			{errorState && (
				<MsgErrorContainer>
					<ParagraphMedium3>{errorMsg}</ParagraphMedium3>
				</MsgErrorContainer>
			)}
		</>
	);
};
