import { h } from 'preact';
import styles from './style';

const Quote = () => (
	<div className={styles.quote}>
		<p className={styles.sentence}>You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.</p>
		<p className={styles.name}>- Buckminster Fuller</p>
	</div>
);

export default Quote;