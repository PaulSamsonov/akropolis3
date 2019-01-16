import { h } from 'preact';
import cx from 'classnames';
import styles from './style';

const TokenSale = () => (
	<div className={styles.tokenSection}>
		{/*<p className={styles.title}>Token Sale</p>*/}

		<div className={styles.chartsContainer}>

			<div className={cx(styles.chartContainer, styles.tokenDistribution)}>
				<div className={styles.chart}>
					<img  src="../../assets/svgs/Token-Chart.svg" alt="Token Distribution" title="Token Distribution - Akropolis" />
				</div>
				
				<p className={styles.secondaryTitle}>Token distribution</p>

				<ul className={styles.info}>
					<li>40% Сontributors</li>
					<li>20% Reserve fund partnership</li>
					<li>20% Team</li>
					<li>10% Marketing ecosystem development</li>
					<li>10% Advisors, early supporters</li>
				</ul>
			</div>

			<div className={cx(styles.chartContainer, styles.tokenProceeds)}>
				<div className={styles.chart}>
					<img  src="../../assets/svgs/Proceeds-Chart.svg" alt="Token Proceeds" title="Token Proceeds - Akropolis" />
				</div>
				
				<p className={styles.secondaryTitle}>Use of proceeds</p>

				<ul className={styles.info}>
					<li>50% Technology and talent</li>
					<li>15% Partnerships</li>
					<li>12.5% Legal and regulatory</li>
					<li>10% Marketing</li>
					<li>10% Operations</li>
					<li>2.5% Contingency</li>
				</ul>
			</div>

		</div>
	</div>
);

export default TokenSale;
