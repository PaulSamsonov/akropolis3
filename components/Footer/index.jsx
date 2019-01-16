import { h } from 'preact';
import styles from './style';
import LogoWhite from '../../assets/svgs/logo-white.svg';
import links from '../../helpers/links';

const sendNavigationEvent = (Label) => {
    window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		Category: 'Navigation',
		Action: 'Click-Footer',
		Label,
		Value: 1
	});
};

const sendPrivacyEvent = () => {
	window.dataLayer.push({
		Category: 'Info',
		Action: 'Click-Policy',
		Label: 'Footer',
		Value: 1
	});
};

const sendTCEvent = () => {
	window.dataLayer.push({
		Category: 'Info',
		Action: 'Click-T&C',
		Label: 'Footer',
		Value: 1
	});
};


const Footer = () => (
	<div className={styles.footer}>
		<div className={styles.logo}>
			<a href="#">
				<LogoWhite />
			</a>
		</div>

		<div className={styles.container}>
			<div className={styles.text}>
				<p>Akropolis is a lightweight, universal protocol layer capable of being deployed on a variety of blockchains.</p>
			</div>

			<ul className={styles.navLeft}>
				<li><a href={links.external.whitepapers.tech} target="_blank" rel="noopener noreferrer" onClick={() => sendNavigationEvent('Whitepaper')}>Whitepaper</a></li>
				<li><a href={links.internal.solution} onClick={() => sendNavigationEvent('Solution')}>Solution</a></li>
				<li><a href={links.internal.tech} onClick={() => sendNavigationEvent('Tech')}>Tech</a></li>
				<li><a href={links.internal.team} onClick={() => sendNavigationEvent('Team')}>Team</a></li>
			</ul>

			<ul className={styles.navRight}>
                <li><a href={links.internal.faq} onClick={() => sendNavigationEvent('Faq')} >FAQ</a></li>
                <li><nofollow> <noindex><a href={links.internal.privacyPolicy} target="_blank" rel="noopener noreferrer" onClick={sendPrivacyEvent}>Privacy Policy</a></noindex></nofollow></li>
                <li><nofollow> <noindex><a href={links.internal.termsAndConditions} target="_blank" rel="noopener noreferrer" onClick={sendTCEvent}>Terms &amp; Conditions</a></noindex></nofollow></li>
			</ul>
		</div>
        {/*<div style={"margin: 30px auto 0; width: 100%; text-align: center;"}>*/}
            {/*<a className="twitter-timeline" data-width="600" data-height="600" data-theme="light"*/}
               {/*href="https://twitter.com/akropolisio?ref_src=twsrc%5Etfw">Tweets by akropolisio</a>*/}
            {/*<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
        {/*</div>*/}
	</div>
);

export default Footer;
