import { h } from 'preact';
import styles from './style';
import Picture from '../common/Picture';

const Tech = () => (
	<div className={styles.techContainer}>
		<p className={styles.title}>Tech</p>

		<p className={styles.text}>
			The Akropolis platform architecture is based on on-chain and off-chain API gateway.
		</p>

		<div className={styles.techDiagram}>
			<Picture
				path={'../../assets/tech_stack'}
				formats={['png','webp']}
				defaultFormat={'png'}
				alt='Tech Stack'
				enable2x
                title='Tech Stack - Akropolis'
			/>
		</div>

		<div className={styles.techDiagramMobile}>
			<Picture
				path={'../../assets/tech_stack_mobile'}
				formats={['png','webp']}
				defaultFormat={'png'}
				alt='Tech Stack mobile'
				enable2x
                title='Tech Stack mobile - Akropolis'
			/>
		</div>

	</div>
);

export default Tech;
