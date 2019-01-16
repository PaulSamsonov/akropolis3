import { h } from 'preact';
import styles from './style.css';
import LinkButton from '../common/LinkButton';
import links from '../../helpers/links';
import Picture from '../common/Picture';

const downloadWhitepaper = (type) => {
	let lang = 'english';
	if (type === 'tech') {
		window.open(links.external.whitepapers.tech, '_blank');
	} else if (type === 'light') {
		const langSelectionEl = document.getElementById('lightPaperSelect');
		lang = langSelectionEl.value;
		window.open(links.external.whitepapers.light[lang]);
	}

	sendEvent(`${type}-${lang}`);
};

const sendEvent = (Label) => {
	window.dataLayer.push({
		Category: 'Info',
		Action: 'Click-Info-Package',
		Label,
		Value: 1
	});
};

const Whitepaper = () => (
	<div className={styles.whitepaper}>
		<div className={styles.informational}>
			<p className={styles.whitepaperTitle}>Interested in learning more about the future of saving?</p>
			<p className={styles.downloadDescription}>Download our informational package</p>
			<div className={styles.papers}>
				<div className={styles.paper}>
					<div className={styles.downloadSection}>
						<LinkButton size='medium' uppercase onClick={() => downloadWhitepaper('tech', 'english')} className={styles.btnDownloadTechPaper}>
							<span className={styles.downloadText}>Download</span>&nbsp;Tech Paper
						</LinkButton>
					</div>
				</div>
				{/* <div className={styles.paper}>
					<div className={styles.downloadSection}>
						<select id='lightPaperSelect' aria-label="lightPaperSelect">
							<option value={'english'}>ENGLISH</option>
							<option disabled value={'japanese'}>日本語 (近日公開)</option>
							<option disabled value={'korean'}>한국어 (곧 온다)</option>
							<option disabled value={'chinese'}>中文 (即将推出)</option>
						</select>
						<LinkButton size='medium' type='secondary' uppercase onClick={() => downloadWhitepaper('light')} className={styles.btnDownloadLightPaper}>
							<span className={styles.downloadText}>Download</span>&nbsp;Light Paper
						</LinkButton>
					</div>
				</div> */}
			</div>
		</div>
		<figure className={styles.whitepaperLogo}>
			<Picture
				path="../../assets/whitepapers"
				formats={['png','webp']}
				defaultFormat="png"
				enable2x
				alt="Whitepapers"
			/>
		</figure>
	</div>
);

export default Whitepaper;