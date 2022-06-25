import React from 'react';
import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import {
	ParagraphMedium3,
	ParagraphSemibold3,
} from '../../../theme/paragraph/paragraph';
import {
	CloseIconNotification,
	InfoIconNotification,
	NotificationContainer,
	NotificationIconAndText,
	NotificationTexts,
} from './styleShowNotification';

/**
 *  Render a notification
 *
 * @param {*} text header text ()
 * @param {*} subtext sub text (option but if you want not use it,
 *  set the variable space as "" to avoid error )
 * @param {*} color set color of texts and icons
 * @param {boolean} changesToErrorMsgOfTransf set some changes in the style for error transference msg (default: false)
 */

export const showNotification = (text, subtext, color, changesToErrorMsgOfTransf) => {
	toast.dismiss();
	toast(
		t => (
			<NotificationContainer
				color={color}
				removeCenterItems={changesToErrorMsgOfTransf}
			>
				<NotificationIconAndText removeCenterItems={changesToErrorMsgOfTransf}>
					<InfoIconNotification
						needpadding={changesToErrorMsgOfTransf}
						icon={faCircleInfo}
						color={color}
					/>
					<NotificationTexts>
						<ParagraphSemibold3>{text}</ParagraphSemibold3>
						{subtext && <ParagraphMedium3>{subtext}</ParagraphMedium3>}
					</NotificationTexts>
				</NotificationIconAndText>
				<CloseIconNotification
					needpadding={changesToErrorMsgOfTransf}
					icon={faXmark}
					color={color}
					onClick={() => toast.dismiss(t.id)}
				/>
			</NotificationContainer>
		),
		{
			style: {
				minWidth: '200px',
				maxWidth: '100%',
			},
		},
		{
			duration: 2000,
		}
	);
};
