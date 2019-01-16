import { h } from 'preact';
import styles from './style.css';

const Switcher = ({ options, selected, size, selectOption }) => {
	return (
		<div className={styles.switcherContainer} style={{ width: (size+4) * options.length }}>
			<div className={styles.switcherMarker} style={{ width: size, transform: `translate3d(${selected * size}px, 0, 0)` }}></div>
			<ul className={ styles.switcherSelector }>
				{
					options.map((opt, i) => (
							<li style={{ width: size }} className={selected === i ? styles.selected : ''} onClick={() => selectOption(i)}>{opt}</li>
					))
				}
			</ul>
		</div>
	);
}

export default Switcher;