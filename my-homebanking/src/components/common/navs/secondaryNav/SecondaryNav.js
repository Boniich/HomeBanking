import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ParagraphSemibold2 } from '../../../../theme/paragraph/paragraph';
import { Logo } from '../../logo/Logo';
import {
	ArrowContainer,
	ComeBackArrow,
	Nav,
	NavContent,
	Space,
} from './styleSecondaryNav';

/**
 * Secondary nav, used in transactions and config.
 * @param {String} shortNavText should be required to show at least one string
 * @param {String} largeNavText (opcional) change the short text by this at 744px
 */

export const SecondaryNav = ({
	shortNavText,
	largeNavText,
	spaceWidthInConfig,
}) => {
	const ref = useRef(false);
	const [navText, setNavText] = useState(shortNavText);
	const navigate = useNavigate();
	const switchTextsByWidth = () => {
		const width = ref.current.offsetWidth;
		if (width >= 744) {
			setNavText(largeNavText);
		}
	};

	const comeBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		largeNavText && switchTextsByWidth();
	}, []);

	return (
		<Nav ref={ref}>
			<NavContent>
				<ArrowContainer>
					<ComeBackArrow onClick={comeBack} icon={faArrowLeft} />
				</ArrowContainer>
				<ParagraphSemibold2>{navText}</ParagraphSemibold2>
			</NavContent>
			<Logo />
			{/* this space allow that logo will be center, it just a empty space */}
			<Space spaceWidthInConfig={spaceWidthInConfig}></Space>
		</Nav>
	);
};
