import { h } from 'preact';
import styles from './style.css';
import Picture from '../common/Picture';

const sendEvent = (Label) => {
	window.dataLayer.push({
		Category: 'Info',
		Action: 'Click-Press',
		Label,
		Value: 1
	});
};

const MediaLinks = ({title, link, description, image}) => (
    <nofollow>
        <noindex>
            <a href={link} target="_blank" rel="noopener noreferrer" onClick={() => sendEvent(image.alt)}>
                <div className={styles.mediaLink}>
                    <Picture
                        path={image.path}
                        formats={['png', 'webp']}
                        defaultFormat={'png'}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        title={image.title}
                    />
                    <div className={styles.titleSection}>
                        <p>{title}</p>
                    </div>
                </div>
            </a></noindex>
    </nofollow>
);

export default MediaLinks;