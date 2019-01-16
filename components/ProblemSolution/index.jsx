import { h, Component } from 'preact';
import cx from 'classnames';
import styles from './style';

export default class ProblemSolution extends Component {

	constructor() {
		super();
		this.setState({ showMoreProblem: false, showMoreSolution: false });
	}

	render() {
		return (
			<div className={styles.problemSolution}>
				<p className={styles.title}>Problem &amp; Solution</p>

				<p className={styles.subtitle}>Pensions: a US$400 Trillion problem</p>

				<div className={styles.abstract}>
					<div className={styles.abstractProblem}>
						<p className={styles.abstractProblemTitle}>Problem</p>
						<p className={styles.abstractProblemIntro}>
							The existing pensions infrastructure is broken. The system suffers from misaligned incentives, lack of
							accountability, and hidden fees.
							<span className={styles.elipsis} style={this.state.showMoreProblem ? { display: 'none' } : ''}> (...)</span>
						</p>
						<a className={styles.readMore} style={this.state.showMoreProblem ? { display: 'none' } : ''}
							 onClick={() => this.setState({ showMoreProblem: true })}>
							Read More
						</a>
						<p className={styles.moreInfoText} style={this.state.showMoreProblem ? { display: 'block' } : ''}>
							All this burden is passed onto individuals, who have no control over their money, especially when moving
							jobs or countries.
							Management fees can erode up to a third of the total amount. Millennials and Generation Z, do not trust
							or contribute to the system.
							Yet pensions are the largest segment of the global financial ecosystem, totalling more than US$36
							trillion in assets.
						</p>
						<p className={styles.moreInfoText} style={this.showMoreProblem ? 'display: block' : ''}>
							The World Economic Forum predicts that the worldwide savings gap will grow from 70 trillion today to
							US$400 trillion by 2050 - that's 5x the global GDP. It is already too late to fix the current pension
							system.
						</p>
					</div>

					<p className={styles.line}/>

					<div className={styles.abstractSolution}>
						<p className={styles.abstractSolutionTitle}>Solution</p>
						<p className={styles.abstractSolutionIntro}>
							Akropolis is building a new decentralised pensions infrastructure from the ground up. <br/>
							We aim to deliver secure, transparent and efficient savings to the pensions savers of the future by
							putting individuals in control of their data and funds.
							<span className={styles.elipsis} style={this.state.showMoreSolution ? { display: 'none' } : ''}> (...)</span>
						</p>
						<a className={styles.readMore} style={this.state.showMoreSolution ? { display: 'none' } : ''}
							 onClick={() => this.setState({ showMoreSolution: true })}>
							Read More
						</a>
						<p className={styles.moreInfoText} style={this.state.showMoreSolution ? 'display: block' : ''}>Our novel solution is building a new transparent system of record
							keeping and self-executing smart contracts through a decentralised platform, bringing together a
							blockchain protocol, user friendly mobile delivery and a community of advocates.</p>
					</div>
				</div>
			</div>
		);
	}
}