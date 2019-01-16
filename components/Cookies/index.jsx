import { h, Component } from 'preact';
import cx from 'classnames';
import styles from './style';
import LinkButton from '../common/LinkButton';
import LinkUp from '../common/LinkUp';
import links from '../../helpers/links';

export default class Cookies extends Component {
	hideCookies = () => {
		this.setState({ visible: false });
		window.localStorage.setItem('acceptCookies', true);
	};

	constructor() {
		super();
		this.setState({ visible: false });
	}
	componentDidMount() {
		if (!this.state.visible && window && !window.localStorage.getItem('acceptCookies')) {
			setTimeout(() => {
				this.setState({ visible: true });
			}, 1000);
		}
	}

	render() {
		return (
			<div
				className={cx({
					[styles.cookiesDisclaimer]: true,
					[styles.visible]: this.state.visible
				})}
			>
				<p>This website uses cookies to ensure you get the best experience on our website.
					<a href={links.external.learnCookies} target="_blank" rel="noopener noreferrer">&nbsp;Learn more about cookies</a>
				</p>
				<LinkButton type="secondary" size="small" onClick={this.hideCookies}>OK</LinkButton>
                <LinkUp type={this.state.visible}></LinkUp>
			</div>
		);
	}
}