import { h } from 'preact';
import TeamPerson from '../TeamPerson';
import coreTeam from './data';
import styles from './style';

const Team = () => (
	<div className={styles.teamContainer}>
		<p className={styles.title}>FOUNDERS AND ADVISORS</p>

		<div className={styles.coreTeamContainer}>
			{/*<p className={styles.secondaryTitle}>FOUNDERS AND ADVISORS</p>*/}
			<p className={styles.description}>The passionate, dedicated Akropolis team is changing global finance forever. Get to know them.</p>
			<div className={styles.teamWrapper}>
				{
					coreTeam.map(person => (
						<TeamPerson
							photo={person.photo}
							name={person.name}
                            title={person.title}
							role={person.role}
							advisorGroup={null}
							linkedIn={person.linkedIn}
							cv={person.cv}
							focus={person.focus}
							experience={person.experience}
							about={person.about}
						/>
					))
				}
			</div>
			<div className={styles.linked_link}>
				<a href="https://www.linkedin.com/company/akropolisio/" target="_blank">
					<span>meet the entire team</span>
					<img  src="../../assets/media/arrow-icon.png" alt="Arrow Right" />
				</a>
            </div>
		</div>
	</div>
);

export default Team;
