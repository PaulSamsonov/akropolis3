import { h } from 'preact';
import links from '../../helpers/links';
import LinkButton from '../common/LinkButton';
import styles from './style';

const sendNavigationEvent = (Label) => {
	window.dataLayer.push({
		Category: 'Navigation',
		Action: 'Click-Header',
		Label,
		Value: 1
	});
};

const Intro = ({ joinWaitListHandler }) => (
	<div className={styles.introContainer}>
		<p className={styles.title}>Decentralised pensions and savings infrastructure</p>
		<p className={styles.strongTitle}>A trustless financial future for everyone</p>
		<p className={styles.aboveButtonText}>
			Akropolis is a lightweight, universal protocol layer capable of being deployed on a variety of blockchains
		</p>
        <LinkButton
            className={styles.joinCommunityButton}
            size="large"
            href={links.external.googleDoc}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendNavigationEvent('Join Comunity Quest')}
            uppercase
        >
            Important TGE announcement
        </LinkButton>

    </div>
);

export default Intro;
