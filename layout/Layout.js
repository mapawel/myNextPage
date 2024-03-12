import styled from 'styled-components';
import Head from 'next/head';
import Menu from 'components/organisms/Menu';
import Footer from 'components/organisms/Footer';
import Mainconsents from 'components/molecules/MainConsents';
import useMainConsents from 'hooks/useMainConsents';
import { breakpoint } from '../breakpoints';

const footerHeight = '58rem';

const Wrapper = styled.div`
	min-height:calc(100vh - ${({footerHeight}) => footerHeight});
	overflow:hidden;
	position:relative;
	z-index:0;
	background-color:${({theme}) => theme.color.back};
	background-attachment:fixed;
`;

const StyledBckImg = styled.div`
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	z-index:-100;
	background-image:linear-gradient(
		90deg,
		rgba(255, 255, 255, 0) 20%,
		rgba(0, 0, 0, 0.9) 60%
	), url('/images/bck3.png');
	background-repeat:repeat;
	background-size:auto;

	@media screen and (min-width:${breakpoint.S}) {
		background-image:linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 20%,
			rgba(0, 0, 0, 0.9) 60%
		), url('/images/bck1.png');
	}
`;

const style = {
	overflow:       'hidden',
	position:       'relative',
	zIndex:         '0',
	minHeight:      '100vh',
	display:        'flex',
	flexDirection:  'column',
	justifyContent: 'flex-end',
};

const Layout = ({children}) => {
	const {handleAccept, isAccepted} = useMainConsents();

	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-32-32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-16-16b.png"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
			</Head>
			<div style={style}>
				<Menu/>

				<Wrapper footerHeight={footerHeight}>
					<StyledBckImg footerHeight={footerHeight}></StyledBckImg>
					{children}
				</Wrapper>
				<Footer footerHeight={footerHeight}/>
				<div/>

				{!isAccepted && <Mainconsents onClick={handleAccept}/>}
			</div>
		</>
	);
};

export default Layout;
