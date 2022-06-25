import React from 'react';
import { Loader } from '../loader/Loader';

export const ProcessingRequestButton = ({ state, textBeforeRequest }) => {
	return (
		<>{state ? <Loader circleColor='#fff' /> : textBeforeRequest}</>
	);
};
