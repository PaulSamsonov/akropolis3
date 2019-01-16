import { h, Component } from 'preact';
import cx from 'classnames';
import styles from './style';

const faqItems = [
	{
		title: 'What is Akropolis?',
		descriptions: ['Akropolis is a technology platform designed to address deep-seated structural issues of the global pensions sector. It is designed to be a multi-jurisdictional platform for the delivery of pensions, social welfare and future benefits in a portable manner, that over time brings together individual end users and large institutional players in a new system of incentives.']
	},
	{
		title: 'What does Akropolis stand for?',
		descriptions: [
			'The greek word ‘acropolis’ refers to the “upper city”, the first known human urban fortification, first established in what is now modern day Syria, followed by Ancient Greece and Rome. It is the defensive core of the city, a city within a city.',
			'We chose to go with the Greek spelling. True to its name, Akropolis’ mission is to address the individual users’ needs - which are not addressed in the current pensions system with its misaligned incentives. We aim to re-dress them to incentivise distribution of the benefits of technology to the end users.'
		]
	},
	{
		title: 'What problems does Akropolis solve?',
		descriptions: [
			'The current pensions system is based on outdated assumptions, is rife with conflicts of interest and lacks transparency and accountability. We are addressing that by designing from the ground-up solution that meets peoples’ needs.',
			'The two aspects necessarily have to be brought together in a coherent protocol in order to create a future-proof solution that takes into account how we live, work and consume.'
		]
	},
	{
		title: 'Is Akropolis a pension fund?',
		descriptions: ['No, Akropolis is not a pension fund. Akropolis is a technology company dedicated to the delivery of the sector-specific protocol.']
	},
	{
		title: 'Who are the main marketplace participants in the Akropolis protocol?',
		descriptions: [
			'Consumers',
			'Institutions',
			'Developer community',
			'Sector advisors and service providers'
		]
	},
	{
		title: 'Is your project open source?',
		descriptions: ['Not at this time. However the project is intended to be open source over time.']
	}
];

const FaqItem = ({ title, descriptions, isOpened, onClickHandler }) => (
	<div className={cx({
			[styles.faqItemContainer]: true,
			[styles.isOpened]: isOpened
		})}
	>
		<div className={styles.faqItemTitle} onClick={onClickHandler}>
			<p>{title}</p>
			<span className={styles.arrow}></span>
		</div>
		<div className={styles.faqItemDescription}>
			<div className={styles.faqItemDescriptionContent}>
				{descriptions.map(content => (
					<p key={content}>{content}</p>
				))}
			</div>
		</div>
	</div>
);

class Faq extends Component {
    state = {
		openedItems: []
	}

	isFaqItemOpened = (index) => {
		return this.state.openedItems.includes(index);
	}

	toogleFaqItem = (index) => {
		let currentOpenedItems = this.state.openedItems.slice(0);
		if (this.isFaqItemOpened(index)) {
			currentOpenedItems = currentOpenedItems.filter(i => i !== index);
		} else {
			currentOpenedItems.push(index);
			this.sendEvent(index);
		}
		this.setState({openedItems: currentOpenedItems});
	}

	sendEvent = (Label) => {
        window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			Category: 'Info',
			Action: 'Click-Faq',
			Label,
			Value: 1
		});
	};

    render() {
    	return (
    		<div className={styles.faq}>
				<p className={styles.faqHeader}>FAQ</p>
				<div className={styles.faqBody}>
					{faqItems.map((item, index) => (
						<FaqItem
							key={item.title}
							title={item.title}
							descriptions={item.descriptions}
							onClickHandler={() => this.toogleFaqItem(index)}
							isOpened={this.isFaqItemOpened(index)}
						/>
					))}
				</div>
    		</div>
    	);
    }
}

export default Faq;
