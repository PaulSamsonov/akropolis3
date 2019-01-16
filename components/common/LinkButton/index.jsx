import { h } from 'preact';
import cx from 'classnames';
import styles from './style';

const configureType = type => {
    switch (type) {
        case 'secondary':
            return styles.linkBtnSecondary;
        default:
            return styles.linkBtnPrimary;
    }
};

const configureSize = size => {
    switch (size) {
        case 'large':
            return styles.linkBtnSizeLarge;
            case 'medium':
                return styles.linkBtnSizeMedium;
			case 'small':
                return styles.linkBtnSizeSmall;
			default:
            return styles.linkBtnSizeNormal;
    }
}

const LinkButton = ({ type, size, children, uppercase, className, submit, highlighted, nowrap, ...otherProps }) => {
    const btnClasses = cx({
			[className]: className || false,
			[styles.linkBtn]: true,
			[configureType(type)]: true,
			[configureSize(size)]: true,
            [styles.uppercase]: uppercase,
            [styles.highlighted]: highlighted,
            [styles.nowrap]: nowrap
		});

    return submit ? (
        <button
            type="submit"
            className={btnClasses}
            {...otherProps}
        >
            {children}
        </button>
    ) : (
        <a
            className={btnClasses}
            {...otherProps}
        >
            {children}
        </a>
    );
};

export default LinkButton;
