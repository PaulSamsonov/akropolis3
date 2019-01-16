import { h } from 'preact';
import styles from './style';

const OurVision = () => (
	<div className={styles.ourVisionContainer}>
		<div className={styles.titleContainer}>
			<p className={styles.title}>Our vision is to solve the <br /> world’s pension deficit problem</p>
		</div>

		<div className={styles.bar} />

		<p className={styles.mainText}>The Akropolis project aims to be the largest alternative pensions infrastructure in the world.
            We are creating decentralised pensions on the blockchain and a safer financial future for humanity, built by and for the people.</p>

		<div className={styles.features}>
			<div>
				<img src="" alt="" />
				<p>We use technology to bring about a more sustainable future and increase resilience in the face of major foreseeable risks</p>
			</div>
			<div>
				<img src="" alt="" />
				<p>We harness the blockchain and tokenization to create transparency and economic efficiency with minimum fee erosion</p>
			</div>
			<div>
				<img src="" alt="" />
				<p>We place control firmly in the hands and to the advantage of our users, over time removing the reliance on third parties</p>
			</div>
		</div>

	</div>
);

export default OurVision;
