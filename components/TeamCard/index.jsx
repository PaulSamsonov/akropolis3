import { h } from 'preact';
import styles from './style';
import LinkedinIcon from '../../assets/svgs/Linkedin2.svg';
import GithubIcon from '../common/GithubIcon';
import Picture from '../common/Picture';


const sendEvent = (name) => {
	
	window.dataLayer.push({
		Category: 'Info',
		Action: 'Click-Team-Social',
		Label: `${name} LinkedIn`,
		Value: 1
	});
};

const TeamCard = (props) => (
	<div className={styles.card}>
		<div className={styles.presentation}>
			<div className={styles.cardHeader}>
				<div className={styles.photo}>
					<Picture
						path={`../../assets/team/${props.photo}`}
						formats={['png','webp']}
						defaultFormat={'png'}
						enable2x
						alt={props.name}
					/>
				</div>
				<div className={styles.personalInfo}>
					<div className={styles.nameContainer}>
                        <p>{props.name}</p>
                        <nofollow>
                            <noindex><a
                                href={props.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIcon}
                                aria-label="LinkedIn"
                                onClick={() => sendEvent(props.name)}>
                                {props.linkedIn.indexOf('github') !== -1 && <GithubIcon/>}
                                {props.linkedIn.indexOf('linkedin') !== -1 && <LinkedinIcon/>}
                            </a></noindex>
                        </nofollow>
                    </div>
					<p className={styles.role}>{props.role}</p>
					<i>{props.advisorGroup}</i>
				</div>
			</div>
			<div className={styles.infoSlot}>
				<p><strong>Experience</strong></p>
				<p className={styles.cardHeaderInfo}>{props.experience}</p>
			</div>
			<div className={styles.infoSlot}>
				<p><strong>Focus</strong></p>
				<p className={styles.cardHeaderInfo}>{props.focus}</p>
			</div>
		</div>
		<div className={styles.about}>
			<h4>About</h4>
			{
				props.about.map(paragraph => <p>{paragraph}</p>)
			}
		</div>
	</div>
);

export default TeamCard;
