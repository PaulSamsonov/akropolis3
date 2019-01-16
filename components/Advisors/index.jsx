import { h, Component } from 'preact';
import cx from 'classnames';
import { goToAnchor, removeHash } from 'react-scrollable-anchor';
import TeamPerson from '../TeamPerson';
import advisors from './data';
import styles from '../Team/style';
import LinkButton from '../common/LinkButton';
import advisorStyles from './style';

class Advisors extends Component {
	state = { expanded: false };

	toggleExpandList = () => {
		let prevState = {...this.state};
		this.setState({expanded: !prevState.expanded});

		if (prevState.expanded) {
			removeHash();
			goToAnchor('advisors');
		}
	}

	render() {
		return (
			<div>
				<p className={styles.secondaryTitle}>Advisors</p>
				<p className={styles.description}>The passionate, dedicated Akropolis team is changing global finance forever. Get to know them.</p>
				<div className={advisorStyles.advisorWrapper}>
					<div className={advisorStyles.teamWrapper}>
						{
							advisors.map((advisor, index) => (
								<TeamPerson
									className={cx({[advisorStyles.hideOnMobile]: !this.state.expanded && index >= 4})}
									photo={advisor.photo}
									name={advisor.name}
									role={advisor.role}
									advisorGroup={advisor.advisorsGroup}
									linkedIn={advisor.linkedIn}
									cv={advisor.cv}
									focus={advisor.focus}
									experience={advisor.experience}
									about={advisor.about}
								/>
							))
						}
					</div>
					<LinkButton type='secondary' uppercase highlighted onClick={this.toggleExpandList} className={advisorStyles.viewMore}>
						{!this.state.expanded && 'View more'}
						{this.state.expanded && 'View less'}
					</LinkButton>
				</div>
			</div>
		);
	}
}

export default Advisors;
