import { h } from 'preact';
import Logo from '../../assets/svgs/Logo.svg';
import Telegram from '../../assets/svgs/telegram.svg';
import styles from './style';
import links from '../../helpers/links';

const JoinSuccess = () => (
		<div className={styles.joinSuccess}>
			<div className={styles.logo}>
				<Logo/>
			</div>
			<h3>Thanks for your application!</h3>

			<p>Check your email for a confirmation message.</p>

			<p>Have you joined our Telegram group yet?</p>
			<p>
				<a href={links.external.telegram}>{links.external.telegram}</a>
			</p>
			<p>Join more than 20,000 early adopters!</p>
			<a className={styles.telegram} href={links.external.telegram}>
				<Telegram />
			</a>
		</div>
);

export default JoinSuccess;