import { h, Component } from 'preact';
import styles from './style';
import LinkButton from '../common/LinkButton';
import links from '../../helpers/links';
import Logo from '../../assets/svgs/Logo.svg';
import { mediaIcons } from '../SocialMedia';

export default class Header extends Component {
	switchMenu = (link) => {
		document.body.style.overflow = this.state.menuOpened ? 'auto': 'hidden';
		document.body.style.position = this.state.menuOpened ? 'initial': 'fixed';
		this.setState({ menuOpened: !this.state.menuOpened });
		if (link)
			this.sendNavigationEvent(link);
	};

	sendNavigationEvent = (Label) => {
        window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			Category: 'Navigation',
			Action: 'Click-Header',
			Label,
			Value: 1
		});
	};

	sendSocialEvent = (Label) => {
        window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			Category: 'Social',
			Action: 'Click',
			Label,
			Value: 1
		});
	};

	constructor() {
		super();
		this.setState({ menuOpened: false });
	}

	render({ joinWaitListHandler }, { menuOpened }) {
		return (
			<header>
                <h1 style="display: none;">Akropolis</h1>
				<div className={styles.nav}>
					<a href="#" className={styles.nameLogo}>
						<Logo></Logo>
					</a>
					<nav className={styles.navBar}>
						<a href={links.external.whitepapers.tech} target="_blank" rel="noopener noreferrer" onClick={() => this.sendNavigationEvent('Whitepaper')}>Technical Whitepaper</a>
						<a href={links.internal.solution} onClick={() => this.sendNavigationEvent('Solution')}>Solution</a>
						<a href={links.internal.team} onClick={() => this.sendNavigationEvent('Team')}>Team</a>
						<a href={links.internal.faq} onClick={() => this.sendNavigationEvent('FAQ')}>FAQ</a>
						<a href={links.external.medium} rel="noopener noreferrer" onClick={() => this.sendNavigationEvent('Blog')}>Blog</a>
                        {/*<a href={links.external.community} rel="noopener noreferrer" onClick={() => this.sendNavigationEvent('Blog')}>Community Quest</a>*/}
					</nav>
					<div className={styles.menuToggle}>
						<input type="checkbox" checked={menuOpened} onChange={() => this.switchMenu()} aria-label="Toggle Menu" />
						<span />
						<span />
						<span />
						<ul className={styles.menu}>
							<li>
								<a href={links.external.whitepapers.tech} onClick={() => this.switchMenu('Whitepaper')}>Whitepaper</a>
							</li>
							<li>
								<a href={links.internal.solution} onClick={() => this.switchMenu('Solution')}>Solution</a>
							</li>
							<li>
								<a href={links.internal.team} onClick={() => this.switchMenu('Team')}>Team</a>
							</li>
							<li>
								<a href={links.internal.faq} onClick={() => this.switchMenu('FAQ')}>FAQ</a>
							</li>
							<li>
								<a href={links.external.medium} target="_blank" rel="noopener noreferrer" onClick={() => this.sendNavigationEvent('Blog')}>Blog</a>
							</li>
                            {/*<li>*/}
                                {/*<a href={links.external.community} target="_blank" rel="noopener noreferrer" onClick={() => this.sendNavigationEvent('Quest')}>Community Quest</a>*/}
                            {/*</li>*/}
							<li>
								<ul className={styles.socialMedia}>
									{mediaIcons.map(val => (
										<li>
											<a href={val.url} target="_blank" rel="noopener noreferrer" onClick={() => this.sendSocialEvent(val.name)} aria-label={val.name}><val.svg /></a>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}