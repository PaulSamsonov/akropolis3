import { h } from 'preact';
import styles from './style';
import Arrow from '../../../assets/arrow-up-solid.svg';
import cx from 'classnames';

const configureType = type => {
    switch (type) {
        case 'true':
            return styles.scrollupPos1;
        default:
            return styles.scrollupPos2;
    }
};

const LinkUp = ({ type }) => {
    const btnClasses = cx({
			[styles.scrollup]: true,
			[configureType(type)]: true
		});

    return ( <a href="#" className={btnClasses}><Arrow/></a> );
};

export default LinkUp;
