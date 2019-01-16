import { h, Component } from 'preact';
import cx from 'classnames';
import Switcher from '../common/Switcher';
import roadMapData from './data';
import styles from './style.css';
import BulletFuture from '../../assets/svgs/BulletFuture.svg';
import BulletPast from '../../assets/svgs/BulletPast.svg';
import BulletPresent from '../../assets/svgs/BulletPresent.svg';

const quarterRange = {
	'Q1': {
		start: { day: 1, month: 1 },
		end: { day: 31, month: 3 }
	},
	'Q2': {
		start: { day: 1, month: 4 },
		end: { day: 30, month: 6 }
	},
	'Q3': {
		start: { day: 1, month: 7 },
		end: { day: 30, month: 9 }
	},
	'Q4': {
		start: { day: 1, month: 10 },
		end: { day: 31, month: 12 }
	}
}

const getEventStatus = (year, fromQuarter, toQuarter) => {
	const today = new Date().getTime();
	const fromDate = new Date(year, quarterRange[fromQuarter].start.month - 1, quarterRange[fromQuarter].start.day).getTime();
	const toDate = new Date(year, quarterRange[toQuarter].end.month - 1, quarterRange[toQuarter].end.day).getTime();

	if (today > toDate) {
		return 'PAST';
	} else if (today >= fromDate && today <= toDate) {
		return 'PRESENT';
	} else {
		return 'FUTURE';
	}
};

const Bullet = ({ type }) => {
	switch (type) {
		case 'PAST':
			return <BulletPast />;
		case 'PRESENT':
			return <BulletPresent />;
		case 'FUTURE':
		default:
			return <BulletFuture />;
	}
};

const RoadmapQuarterlyView = ({index, year, showNextYearIndicator, yearSelected}) => (
	<div
		className={cx({
			[styles.roadmapSlide]: true,
			[styles.visible]: yearSelected === index,
			[styles.moveRight]: yearSelected < index,
			[styles[`size${roadMapData[year].length}`]]: true
		})}
	>
		<div className={styles.timeline}></div>
		{
			roadMapData[year].map(({from, to, title, customYear, content, eventStatus=getEventStatus(year, from, to)}, idx) => (
				<div
					className={cx({
						[styles.roadmapContents]: true,
						[styles.odd]: idx % 2 !== 0,
						[styles[eventStatus.toLowerCase()]]: true
					})}
				>
					<div
						className={cx({
							[styles.bullet]: true,
							[styles[eventStatus.toLowerCase()]]: true,
							[styles.even]: idx % 2 !== 0
						})}
					>
						<Bullet type={eventStatus} />
					</div>
					<p className={styles.yearLabel}>{title}&nbsp;<span>{(customYear) ? customYear : year}</span></p>
					<p className={styles.roadmapInfo}>
						{
							content.map(item => (
								<p>{item}</p>
							))
						}
					</p>
				</div>
			))
		}
		{
			showNextYearIndicator &&
			<div className={cx([styles.roadmapContents, styles.nextYearFlag ])}>
				<div className={styles.bullet}>
					{ parseInt(year, 10) + 1 <= new Date().getFullYear() && <Bullet type={'PAST'} /> }
					{ parseInt(year, 10) + 1 > new Date().getFullYear() && <Bullet type={'FUTURE'} /> }
				</div>
				<p className={styles.yearLabel}>
					<span>{parseInt(year, 10) + 1}</span>
				</p>
			</div>
		}
	</div>
);

export default class Roadmap extends Component {
	constructor() {
		super();
		this.setState({ yearSelected: Object.keys(roadMapData).indexOf(new Date().getFullYear().toString()) });
	}

	render() {
		return (
			<div>
				<p className={styles.roadmapHeader}>ROAD MAP</p>
				<div className={styles.yearSelect}>
					<Switcher
						options={Object.keys(roadMapData)}
						size={100}
						selected={this.state.yearSelected}
						selectOption={(selected) => this.setState({ yearSelected: selected })}
					/>
				</div>
				<div className={styles.roadmapContainer}>

					{ Object.keys(roadMapData).map((year, index) => (
						<RoadmapQuarterlyView
							index={index}
							year={year}
							showNextYearIndicator={index !== Object.keys(roadMapData).length - 1}
							yearSelected={this.state.yearSelected}
						/>
					)) }
				</div>
			</div>
		);
	}
}