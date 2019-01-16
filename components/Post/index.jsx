import { h, Component } from 'preact';
import cx from 'classnames';
import TeamCard from '../TeamCard';
import Modal from '../Modal';
import LinkedInIcon from '../../assets/svgs/Linkedin2.svg';
import Picture from '../common/Picture';
import GithubIcon from '../common/GithubIcon';
import LinkButton from '../common/LinkButton';
import styles from './style';

    const Post = (props) => (
			<div className={cx(styles.personContainer, props.className)} >
				<div className={styles.photo} >
                    <Picture
                        path={`../../assets/blog/${props.img}`}
                        formats={['png', 'webp']}
                        defaultFormat={'png'}
                        disable2x
                        className={styles.photoColor}
                        alt={props.name}
                    />
				</div>
				<div className={styles.personData}>
					<div className={styles.info} >
						<div className={styles.nameContainer}>
							<p className={styles.title}>{props.title}</p>
						</div>
						<a href={props.postLink} className={styles.btnRead} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        	Read More
						</a>
					</div>
				</div>
			</div>
		);
    export default Post;