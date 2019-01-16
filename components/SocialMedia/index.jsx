import { h, Component } from 'preact';
import request from '../../helpers/request';
import links from '../../helpers/links';
import fbIcon from '../../assets/svgs/fb.svg';
import tgIcon from '../../assets/svgs/telegram.svg';
import twIcon from '../../assets/svgs/twitter.svg';
import meIcon from '../../assets/svgs/medium.svg';
import liIcon from '../../assets/svgs/linkedin.svg';
import ghIcon from '../../assets/svgs/github.svg';
import alIcon from '../../assets/svgs/angel_list.svg';
import Profile from '../../assets/svgs/Profile-Icon.svg';
import TelegramLoading from '../../assets/svgs/telegramLoading.svg';
import styles from './style';

const mediaIcons = [

	// {
	// 	name: 'TelegramCounter',
	// 	svg: tgIcon,
	// 	url: links.external.telegram
	// },
	// {
	// 	name: 'Facebook',
	// 	svg: fbIcon,
	// 	url: links.external.facebook
	// },
    {
        name: 'GitHub',
        svg: ghIcon,
        url: links.external.github
    },
	{
		name: 'Twitter',
		svg: twIcon,
		url: links.external.twitter
	},
    {
        name: 'Telegram',
        svg: tgIcon,
        url: links.external.telegram
    },
	{
		name: 'Medium',
		svg: meIcon,
		url: links.external.medium
	},
	{
		name: 'LinkedIn',
		svg: liIcon,
		url: links.external.linkedin
	},
    {
        name: 'AngelList',
        svg: alIcon,
        url: links.external.angel
    }
];

class SocialMedia extends Component {

	sendSocialEvent = (Label) => {
        window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			Category: 'Social',
			Action: 'Click',
			Label,
			Value: 1
		});
	};

	redirectToTelegram = (val) => {
		window.open(val.url, '_blank');
		this.sendSocialEvent(val.name);
	}

	botId = '621192775';
	botToken = 'AAELNDc7gt4FQdWGqo95KseRH4vHWGMdUWY';
	chatId = '-1001382366023';

	constructor() {
		super();
		this.setState({
			membersCount: '',
			telegramLoading: true
		});
	}

	componentDidMount() {
		const url = `https://api.telegram.org/bot${this.botId}:${this.botToken}/getChatMembersCount?chat_id=${this.chatId}`;
		const method = 'get';
		request({ url, method })
			.then((response) => {
				let membersCount = '';
				try {
					membersCount = JSON.parse(response).result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				} catch (e) {}

				this.setState({ membersCount, telegramLoading: false });
			});
	}

	render() {
		return (
			<ul className={styles.socialMedia}>
				{mediaIcons.map(val => (
					<li className={styles[val.name]}>
                        {/*{ val.name === 'TelegramCounter' ? (*/}
							{/*<div className={styles.telegramCounterBox} onClick={() => this.redirectToTelegram(val)}>*/}
								{/*<Profile />*/}
								{/*{ !this.state.telegramLoading && <span>{this.state.membersCount}</span> }*/}
								{/*{*/}
									{/*this.state.telegramLoading &&*/}
									{/*<div className={styles.telegramLoading}>*/}
										{/*<TelegramLoading />*/}
									{/*</div>*/}
								{/*}*/}
								{/*<val.svg />*/}
							{/*</div>*/}
						{/*) : (*/}
							<nofollow> <noindex><a
								href={val.url}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => this.sendSocialEvent(val.name)}
								aria-label={val.name}
							>
								<val.svg />
                            </a> </noindex>  </nofollow>
					</li>
				))}
			</ul>
		)
	}
}

export { mediaIcons, SocialMedia };
