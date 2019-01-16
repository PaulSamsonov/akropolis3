import { h, Component } from 'preact';
import cx from 'classnames';
import Switcher from '../common/Switcher';
import styles from './style';

export default class Perspective extends Component {
	options = ['Old World', 'New World'];

	constructor() {
		super();
		this.setState({ consumerSelected: 0, enterpriseSelected: 0 });
	}

	render() {
		return (
			<div className={styles.perspective}>
				<p className={styles.title}>Consumer Perspective</p>

				<div className={styles.comparisonHeader}>
					<span>Old World</span>
					<span>VS</span>
					<span>New World</span>
				</div>
				<div className={styles.comparisionSwitch}>
					<Switcher options={this.options} size={150} selected={this.state.consumerSelected}
										selectOption={(selected) => this.setState({ consumerSelected: selected })}
					/>
				</div>
				<div className={styles.comparisonListing}>
					<ul className={cx({
						[styles.comparisonListingLeft]: true,
						[styles.showComparisionLeft]: this.state.consumerSelected === 0
					})}>
						<li>No control over assets and data</li>
						<li>No visibility on fees</li>
						<li>No trust in the system</li>
						<li>No real control</li>
						<li>Confusion and complexity</li>
						<li>No accountability for misused fund</li>
						<li>No personalisation</li>
					</ul>
						<ul className={cx({
							[styles.comparisonListingRight]: true,
							[styles.showComparisionRight]: this.state.consumerSelected === 1
						})}>
						<li>Self sovereignty</li>
						<li>Transparency</li>
						<li>Trustless system</li>
						<li>Portability</li>
						<li>Simplicity</li>
						<li>Accountability and incentives</li>
						<li>Tailored plans</li>
					</ul>
				</div>

				<p className={styles.title}>Enterprise Perspective</p>

				<div className={styles.comparisonHeader}>
					<span>Old World</span>
					<span>VS</span>
					<span>New World</span>
				</div>

				<div className={styles.comparisionSwitch}>
					<Switcher options={this.options} size={150} selected={this.state.enterpriseSelected}
										selectOption={(selected) => this.setState({ enterpriseSelected: selected })}
					/>
				</div>

				<div className={styles.comparisonListing}>
					<ul className={cx({
						[styles.comparisonListingLeft]: true,
						[styles.showComparisionLeft]: this.state.enterpriseSelected === 0
					})}>
						<li>No interaction between savers and fund managers</li>
						<li>Inefficient legacy system</li>
						<li>No user behaviour data</li>
						<li>Interests misaligned between end users and trustee</li>
					</ul>
					<ul className={cx({
						[styles.comparisonListingRight]: true,
						[styles.showComparisionRight]: this.state.enterpriseSelected === 1
					})}>
						<li>Personalisation and direct access for consumers</li>
						<li>Technology enabled system, set up a virtual fund in seconds</li>
						<li>Users rewarded for sharing their data</li>
						<li>Few intermediaries, aligned interests</li>
					</ul>
				</div>
			</div>
		);
	}
}
