import { h } from 'preact';
import Portal from 'preact-portal';
import cx from 'classnames';
import styles from './style';

const Modal = ({ open, closed, onDismiss, children }) => {
	if (open) {
		document.body.style.overflow = 'hidden';
	}

	if (closed) {
		document.body.style.overflow = 'auto';
	}

	return (
		<Portal into="body">
			<div
				className={cx({
					[styles.modal]: true,
					[styles.modalOpen]: open,
					[styles.modalClose]: closed
				})}
			>
				<div className={styles.backdrop} onClick={onDismiss} />
				<div className={styles.inner}>
					<div className={styles.closeBtnWrap}>
						<button onClick={onDismiss}>&times;</button>
					</div>
					{children}
				</div>
			</div>
		</Portal>
	);
};

export default Modal;