import { h } from 'preact';
import cx from 'classnames';
import MediaLinks from '../MediaLinks';
import Picture from '../common/Picture';
import advisors from './advisors';
import backers from './backers';
import memberships from './memberships';
import articles from './articles';
import styles from './style';

const sendEvent = (Label) => {
	window.dataLayer.push({
		Category: 'Info',
		Action: 'Click-Partner',
		Label,
		Value: 1
	});
};

const Partners = () => (
	<div className={styles.partners}>
        <p className={styles.title}>ADVISORS, PARTNERS AND EARLY BACKERS</p>
		<div className={styles.advisorsBackersContainer}>
            <div className={styles.logosContainer}>
                {
                    advisors.map(({ title, link, image }) => (
                        <a href={link} target="_blank" rel="noopener noreferrer" onClick={() => sendEvent(title)}>
                            <Picture
                                path={image.path}
                                formats={['png','webp']}
                                defaultFormat={'png'}
                                alt={title}
                                width={image.width}
                                height={image.height}
                                enable2x
                                title={image.title}
                            />
                        </a>
                    ))
                }
            </div>
		</div>

		<p className={styles.title}>Professional Memberships</p>
		<div className={styles.logosContainer}>
			{
				memberships.map(({ title, link, image, description }) => (
					<div className={styles.professionalMembership}>
						<div className={styles.membershiplogo}>
                            <nofollow> <noindex><a href={link} target="_blank" rel="noopener noreferrer" onClick={() => sendEvent(title)}>
								<Picture
									path={image.path}
									formats={['png','webp']}
									defaultFormat={'png'}
									alt={title}
									width={image.width}
									height={image.height}
									enable2x
                                    title={image.title}
								/>
                            </a></noindex></nofollow>
						</div>
						<div className={styles.membershipText}>
							<p>{description}</p>
						</div>
					</div>
				))
			}
		</div>

		<p className={styles.title}>Media</p>
		<div className={styles.mediaContainer}>
			<div className={styles.mediaItems}>
			{
				articles.map(({ title, description, link, image}, index) => (
					index < 10 && <div className={styles.mediaLink}>
						<MediaLinks
							title={title}
							link={link}
							description={description}
							image={image}
						/>
					</div>
				))
			}
			</div>
		</div>
	</div>
);

export default Partners;
