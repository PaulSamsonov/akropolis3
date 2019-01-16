import { h, Component } from 'preact';
import cx from 'classnames';
import TeamCard from '../TeamCard';
import Modal from '../Modal';
import LinkedInIcon from '../../assets/svgs/Linkedin2.svg';
import Picture from '../common/Picture';
import GithubIcon from '../common/GithubIcon';
import styles from './style';

export default class TeamPerson extends Component {

	sendSocialEvent = (name) => {
		window.dataLayer.push({
			Category: 'Info',
			Action: 'Click-Team-Social',
			Label: `${name} LinkedIn`,
			Value: 1
		});
	};

	closeTeamModal = () => {
		this.setState({ openModal: false, closeModal: true });
		setTimeout(() => this.setState({ openModal: false, closeModal: false }), 200);
	}

	openTeamModal = (Label) => {
		this.setState({ openModal: true });
		window.dataLayer.push({
			Category: 'Info',
			Action: 'Click-Team-Picture',
			Label,
			Value: 1
		});
	}

	render({ }, { openModal, closeModal }) {
		return (
			<div className={cx(styles.personContainer, this.props.className)}>
				<div className={styles.photo} onClick={() => this.openTeamModal(this.props.name)}>
					<Picture
						path={`../../assets/team/${this.props.photo}`}
						formats={['png', 'webp']}
						defaultFormat={'png'}
						enable2x
						className={styles.photoColor}
						alt={this.props.name}
                        title={this.props.title}
					/>
				</div>
				<div className={styles.personData}>
					<div className={styles.info} onClick={() => this.openTeamModal(this.props.name)}>
						<div className={styles.nameContainer}>
							<p className={styles.name}>{this.props.name}</p>
                            <nofollow>
                                <noindex><a
                                    href={this.props.linkedIn}
                                    className={styles.linkedInIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    onClick={() => this.sendSocialEvent(this.props.name)}
                                >
                                    {this.props.linkedIn.indexOf('github') !== -1 &&
                                    <GithubIcon className={styles.personGithubIcon}/>}
                                    {this.props.linkedIn.indexOf('linkedin') !== -1 && <LinkedInIcon/>}
                                </a></noindex>
                            </nofollow>
						</div>
						
						<p className={styles.role}>{this.props.role}</p>
						{this.props.advisorGroup && <p className={styles.group}>{this.props.advisorGroup}</p>}
					</div>
					<div className={styles.cv}>
						{
							this.props.cv.map((val, index, arr) => (
								<span>
									{val.indexOf('\n') !== -1 && <br/>}
									{val.replace('\n', '')}
									{arr.length - 1 !== index && ' • '}
								</span>
							))
						}
					</div>
				</div>
				
				<Modal open={openModal} closed={closeModal} onDismiss={this.closeTeamModal}>
					<TeamCard
						photo={this.props.photo}
						name={this.props.name}
						role={this.props.role}
						advisorGroup={this.props.advisorGroup}
						experience={this.props.experience}
						focus={this.props.focus}
						linkedIn={this.props.linkedIn}
						about={this.props.about}
					/>
				</Modal>
			</div>
		);
	}
}