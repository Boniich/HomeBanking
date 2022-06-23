import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { ParagraphSemibold3 } from '../../../theme/paragraph/paragraph';
import {
	CloseIconNotification,
	InfoIconNotification,
	NotificationContainer,
	NotificationIconAndText,
} from './styleShowNotification';

export const showNotification = (text, color) => {
	toast.dismiss();
	toast(
		t => (
			<NotificationContainer paragraphColor={color}>
				<NotificationIconAndText>
					<InfoIconNotification icon={faCircleInfo} color={color} />
					<ParagraphSemibold3>{text}</ParagraphSemibold3>
				</NotificationIconAndText>
				<CloseIconNotification
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
