import { h, Component } from 'preact';
import styles from './style';
import LinkButton from '../common/LinkButton';
import links from '../../helpers/links';
import Logo from '../../assets/svgs/Logo.svg';
import { mediaIcons } from '../SocialMedia';

export default class ErrorPage extends Component {

    render({ }, {  }) {
        return (
            <div className={styles.header}>
                <div className={styles.nav}>
                    <a href="#" className={styles.nameLogo}>
                        <Logo></Logo>
                    </a>
                </div>
                <div className={styles.error}>
                    <h1>Error 404</h1>
                    <h2>Page Not Found</h2>
                    <span>Go to <a href="/">Akropolis.io</a></span>
                </div>
            </div>
        );
    }
}
