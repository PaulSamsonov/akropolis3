import { h } from 'preact';
import cx from 'classnames';
import Picture from '../Picture';
import styles from './style';

const GithubIcon = ({ className, ...otherProps }) => (
    <div className={cx(styles.githubIcon, className)} {...otherProps}>
		<Picture
			path="../../assets/logos/github"
			formats={['png','webp']}
			defaultFormat={'png'}
			alt={'Github'}
		/>
	</div>
);

export default GithubIcon;