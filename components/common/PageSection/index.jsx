import { h } from 'preact';
import cx from 'classnames';
import styles from './style';
import ScrollableAnchor from 'react-scrollable-anchor';

const ScrollablePageSection = ({ scrollableAnchorId, ...otherProps}) => (
    <ScrollableAnchor id={scrollableAnchorId}>
        <PurePageSection {...otherProps} />
    </ScrollableAnchor>
);

const PurePageSection = ({ children, className, nopadding, ...otherProps }) => (
    <section
        className={cx({
            [className]: className || false,
            [styles.pageSection]: true
        })}
        {...otherProps}
    >
        <div className={cx({
          [styles.contentContainer]: true,
          [styles.nopadding]: nopadding
        })}>
            {children}
        </div>
    </section>
);

const PageSection = (props) => {
    return (props.scrollableAnchorId) ? <ScrollablePageSection {...props} /> : <PurePageSection {...props} />;
};

export default PageSection;
