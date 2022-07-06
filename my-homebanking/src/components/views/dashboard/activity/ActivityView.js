import React, { useContext, useEffect, useState } from 'react';
import AccountContext from '../../../../context/accountContext/AccountContext';
import { primaryColor } from '../../../../theme/colors/colors';
// import { CircleLoader } from '../../../common/circleLoader/CircleLoader';
import { Loader } from '../../../common/loader/Loader';
import { ExistsActivity } from './existsActivity/ExistsActivity';
import { NonActivityMsg } from './nonActivityMsg/NonActivityMsg';
import { ActivityContainer } from './styleActivityView';

const ActivityView = ({ ...props }) => {
	const { tranferences } = useContext(AccountContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (tranferences !== null) {
			setLoading(false);
		}
	}, [tranferences]);

	return (
		<ActivityContainer desktopWidth={props.desktopWidth}>
			{loading && (
				<Loader marginForTransfList circleColor={primaryColor.primary500} />
			)}
			{tranferences &&
				(tranferences.length > 0 ? (
					<ExistsActivity transferenceData={tranferences} />
				) : (
					<NonActivityMsg />
				))}
		</ActivityContainer>
	);
};

export default ActivityView;
