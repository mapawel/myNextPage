import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import Paragraph from 'components/atoms/Paragraph';
import { uiSubs } from 'assets/data/uiSubs';
import Button from 'components/atoms/Button';

const tl = gsap.timeline({delay: 0});

const StyledButton = styled(Button)`
	visibility:${({buttonVisible}) => buttonVisible
		? 'visible'
		: 'hidden'};
	margin:3rem;
	align-self:end;
`;

const StyledShadowWrapper = styled.div`
	position:fixed;
	width:100%;
	height:100%;
	top:0;
	left:0;
	z-index:1000;
	display:flex;
	justify-content:center;
	align-items:center;
	background-color:#000000f1;
	opacity:0;
`;

const StyledParagraph = styled(Paragraph)`
	display:block;
	width:80%;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%, -50%);
	text-align:center;
	color:${({theme, mailResponse}) =>
		mailResponse !== 'OK'
			? 'red'
			: theme.color.textPrimary};
	opacity:0;

	> span {
		display:block;
		font-size:${({theme}) => theme.fontSize.xxs};
		text-align:left;
		margin-top:2rem;
		line-height:1;
	}
`;

const StyledContainer = styled.div`
	position:relative;
	width:85%;
	max-width:600px;
	min-height:35rem;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	background-color:black;
	border:${({theme}) => `3rem solid ${theme.color.primary}`};
	/* overflow: hidden; */
`;

const StyledLetter = styled.div`
	z-index:10;
	left:1rem;
	position:relative;
	width:10rem;
	height:7rem;
	padding:1rem 2rem;
	background-color:${({theme}) => theme.color.textSecondary};
	display:flex;
	justify-content:flex-start;
	align-items:flex-end;
	transform:rotate(32deg);
	opacity:0;
`;

const StyledSpan = styled.div`
	width:2px;
	height:100%;
	background-color:black;
	margin-right:5px;

	:nth-child(2n) {
		height:80%;
	}

	:nth-child(2) {
		margin-right:1rem;
	}
`;

const StyledEnTop = styled.div`
	position:relative;
	z-index:5;
	width:0;
	height:0;
	border-left:6rem solid transparent;
	border-right:6rem solid transparent;
	border-bottom:5.5rem solid #999999;
	transform-origin:bottom;
	opacity:1;
`;

const StyledEnTop2 = styled.div`
	position:relative;
	z-index:20;
	top:5.5rem;
	width:0;
	height:0;
	border-left:6rem solid transparent;
	border-right:6rem solid transparent;
	border-bottom:5.5rem solid #dddddd;
	transform:rotateX(90deg);
	transform-origin:bottom;
	opacity:0;
`;

const StyledEnInside = styled.div`
	position:relative;
	z-index:5;
	width:0;
	height:0;
	border-left:6rem solid transparent;
	border-right:6rem solid transparent;
	border-top:5rem solid #939393;
`;

const StyledEnMain = styled.div`
	position:relative;
	z-index:20;
	top:-5rem;
	width:0;
	height:0;
	border-left:6rem solid #cccccc;
	border-right:6rem solid #cccccc;
	border-top:5rem solid transparent;
`;

const StyledEnBottom = styled.div`
	position:relative;
	top:-5rem;
	z-index:20;
	width:12rem;
	height:3rem;
	background-color:#cccccc;
`;

const StyledGap = styled.div`
	position:relative;
	height:0rem;
`;

const StyledBox = styled.div`
	position:relative;
	opacity:0;
`;

const SentMailPopUp = ({togglePopup, mailResponse}) => {
	const {locale} = useRouter();
	const letterRef = useRef(null);
	const envelopeTopRef = useRef(null);
	const envelopeTop2Ref = useRef(null);
	const envelopeRef = useRef(null);
	const paragraphRef = useRef(null);
	const wrapperRef = useRef(null);
	const [buttonVisible, setButtonVisible] = useState(false);

	const resetAnim = () => {
		setButtonVisible(false);
		tl.clear();
		togglePopup(null);
	};

	useEffect(() => {
		const isBackAnim = (mailResponse) => {
			const animTarget = {
				duration: 1,
				x:        '0',
				y:        '0',
				scale:    0.6,
				opacity:  0.4,
				rotate:   -30,
			};
			const animBlank = {};
			if (mailResponse?.status !== 'OK') {
				return animTarget;
			}
			return animBlank;
		};
		tl.to(wrapperRef.current, {duration: 0.5, opacity: 1})
			.to(envelopeRef.current, {duration: 0.5, opacity: 1})
			.to(letterRef.current, {duration: 0.3, opacity: 1})
			.to(letterRef.current, {duration: 0.2, rotation: 50})
			.to(letterRef.current, {duration: 0.5, y: '+=185', rotation: 0})
			.to(envelopeTopRef.current, {duration: 0.2, rotationX: 90})
			.to(envelopeTopRef.current, {duration: 0, opacity: 0})
			.to(envelopeTop2Ref.current, {duration: 0, opacity: 1})
			.to(envelopeTop2Ref.current, {duration: 0.2, rotationX: 180})
			.to(envelopeTop2Ref.current, {duration: 0.3, rotationX: 180})
			.to(envelopeRef.current, {
				duration: 1,
				x:        '+=100',
				y:        '-=100',
				scale:    0.1,
				opacity:  0,
				rotate:   720,
			})
			.to(envelopeRef.current, isBackAnim(mailResponse))
			.to(paragraphRef.current, {
				duration:   0.5,
				opacity:    1,
				onComplete: () => setButtonVisible(true),
			})
			.to(paragraphRef.current, {
				duration: mailResponse?.status !== 'OK'
					          ? 10
					          : 2,
				opacity:  1,
			})
			.to(wrapperRef.current, {
				duration:   0.5,
				opacity:    0,
				onComplete: resetAnim,
			});
	});

	return (
		<StyledShadowWrapper ref={wrapperRef}>
			<StyledContainer>
				<StyledParagraph mailResponse={mailResponse?.status} ref={paragraphRef}>
					{mailResponse?.status === 'OK'
						? (
							`${uiSubs?.mailSent?.[locale]}`
						)
						: (
							<>
								{uiSubs?.mailNotSent?.[locale]}
								<span>{mailResponse?.message}</span>
							</>
						)}
				</StyledParagraph>
				<StyledBox ref={envelopeRef}>
					<StyledLetter ref={letterRef}>
						<StyledSpan/>
						<StyledSpan/>
						<StyledSpan/>
						<StyledSpan/>
						<StyledSpan/>
						<StyledSpan/>
						<StyledSpan/>
					</StyledLetter>
					<StyledGap/>
					<StyledEnTop2 ref={envelopeTop2Ref}/>
					<StyledEnTop ref={envelopeTopRef}/>
					<StyledEnInside/>
					<StyledEnMain/>
					<StyledEnBottom/>
				</StyledBox>
				<StyledButton
					buttonVisible={buttonVisible}
					variant="noborder"
					onClick={resetAnim}
				>
					OK
				</StyledButton>
			</StyledContainer>
		</StyledShadowWrapper>
	);
};

SentMailPopUp.propTypes = {
	togglePopup:  PropTypes.func.isRequired,
	mailResponse: PropTypes.object.isRequired,
};

export default SentMailPopUp;
