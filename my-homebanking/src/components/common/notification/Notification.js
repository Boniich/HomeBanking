import React from 'react';
import { Toaster } from 'react-hot-toast';

export const Notification = ({ background,border }) => {
	return (
		<Toaster
			position='bottom-center'
			containerStyle={{
				bottom: 75,
			}}
			toastOptions={{
				style: {
					border,
					background,
					padding: '12px 20px',
				},
			}}
		/>
	);
};
