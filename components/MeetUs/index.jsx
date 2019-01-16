import { h, Component } from 'preact';
import cx from 'classnames';
import { goToAnchor, removeHash } from 'react-scrollable-anchor';
import LinkButton from '../common/LinkButton';
import styles from './style';

const slides = [
    {
		title: 'Beyond Blocks',
		city: 'Bangkok',
		date: ['2018-11-26', '2018-11-27'],
		url: 'https://beyondblocks.com/summit/bangkok/'
	},
    {
        title: 'Devcon 4',
        city: 'Prague',
        date: ['2018-10-30','2018-11-02'],
        url: 'https://devcon4.ethereum.org'
    },
    {
        title: 'Web3 Summit',
        city: 'Berlin',
        date: ['2018-10-22', '2018-10-24'],
        url: 'https://web3summit.com/'
    },
	{
		title: 'Blockchain Week',
		city: 'Berlin',
		date: ['2018-09-05', '2018-09-11'],
		url: 'https://blockchainweek.berlin/'
	},
	{
		title: 'Akropolis & Cindicator Meetup: Future of Digital Fund',
		city: 'Berlin',
		date: ['2018-07-25'],
		url: 'https://www.eventbrite.com/e/the-future-of-finance-decentralization-digital-assets-and-new-economy-tickets-47917331027#'
	},
	{
		title: 'Dappcon',
		city: 'Berlin',
		date: ['2018-07-19'],
		url: 'https://www.dappcon.io/'
	},
	{
		title: 'Beyond Blocks, Korea Blockchain Week ',
		city: 'Seoul',
		date: ['2018-07-16'],
		url: 'https://beyondblocks.com/summit/seoul/'
	},
	{
		title: 'TechCrunch Sessions Blockchain',
		city: 'Berlin',
		date: ['2018-06-06'],
		url: 'https://techcrunch.com/events/tc-sessions-blockchain-2018/'
	},
	{
		title: 'Pathfounder',
		city: 'London',
		date: ['2018-06-22'],
		url: 'https://fintech-blockchain.thepathfounder.com/'
	},
	{
		title: 'Token Summit',
		city: 'New York',
		date: ['2018-05-17'],
		url: 'http://tokensummit.com/'
	},
	{
		title: 'Consensus Summit',
		city: 'New York',
		date: ['2017-05-15','2018-05-16'],
		url: 'https://www.coindesk.com/events/consensus-2018/'
	},
	{
		title: 'EdCon',
		city: 'Toronto',
		date: ['2018-05-03','2018-05-05'],
		url: 'https://edcon.io/'
	},
	{
		title: 'United Nations Blockchain Conference ',
		city: 'Geneva',
		date: ['2018-04-26'],
		url: 'https://www.unece.org/31stuncefactforum_blockchain.html'
	},
	{
		title: 'Dapp Dev Conference',
		city: 'Kiev',
		date: ['2018-04-16'],
		url: 'http://dappdev.org/conference/#main'
	},
	{
		title: 'Beyond Blocks, Japan Blockchain Week',
		city: 'Tokyo',
		date: ['2018-04-04','2018-04-05'],
		url: 'https://beyondblocks.com/summit/tokyo/'
	},
	{
		title: 'Token 2049',
		city: 'Hong Kong',
		date: ['2018-03-20','2018-03-21'],
		url: 'https://www.token2049.com/'
	}
];

const openEvent = (url, Label) => {
	if (url) {
		window.open(url, '_blank');
	}
	window.dataLayer.push({
		Category: 'Info',
		Action: 'Click-Conference',
		Label,
		Value: 1
	});
};

const isPastEvent = (dates) => {
	const date = new Date(dates[0]);
	const curDate = new Date();

	return date.getTime() < curDate.getTime();
};

const getDay = (dates) => {
	const date = new Date(dates[0]);
	const date2 = dates[1] ? new Date(dates[1]) : null;
	let day1 = date.getDate();
	let day2 = date2 ? date2.getDate() : '';
	day1 = day1 < 10 ? `0${day1}` : day1;
	if (date2) {
		day2 = day2 < 10 ? `-0${day2}` : `-${day2}`;
	}

	return `${day1}${day2}`;
};

const getMonth = (dates) => {
	const months = [
		'Jan',
		'Feb',
		'March',
		'April',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec'
	];

	let res = [];

	for (let i in dates) {
	    let m = (new Date(dates[i])).getMonth();
        if (res.indexOf(months[m]) === -1) {
	        res.push(months[m]);
        }
    }

    return res;
};

class MeetUs extends Component {
	state = {
		expanded: false
	};

	toggleExpandList = () => {
		let prevState = {...this.state};
		this.setState({expanded: !prevState.expanded});

		if (prevState.expanded) {
			removeHash();
			goToAnchor('meetus');
		}
	}

	render() {
		return (
			<div className={styles.outContainer}>
				<p className={styles.title}>Where to meet us</p>
				<div className={styles.container}>
					{slides.map((slide, index) => (
						<div
							className={cx({
								[styles.card]: true,
								[styles.past]: isPastEvent(slide.date),
								[styles.hideOnMobile]: !this.state.expanded && index >= 3,
								[styles.hideEvents]: !this.state.expanded && index >= 6
							})}
							onClick={() => openEvent(slide.url, slide.title)}
						>
							<div className={styles.date}>
								<span className={slide.date.length > 1 ? styles.smaller : ''}>{getDay(slide.date)}</span>
                                <span>{getMonth(slide.date).map(m => (
                                    <p>{m}</p>
                                ))}</span>
                            </div>
							<div className={styles.info}>
								<span>{slide.city}</span>
								<p>{slide.title}</p>
							</div>
						</div>
					))}
				</div>
				<LinkButton type="secondary" className={styles.viewMore} uppercase onClick={this.toggleExpandList}>
					{!this.state.expanded && 'View more'}
					{this.state.expanded && 'View less'}
				</LinkButton>
			</div>
		);
	}
}

export default MeetUs;