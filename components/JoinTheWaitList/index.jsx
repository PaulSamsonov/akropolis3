import { h } from 'preact';
import styles from './style';
import LinkButton from '../common/LinkButton';

const JoinTheWaitList = ({ joinWaitListHandler }) => (
    <div className={styles.container}>
        <p>Join the waitlist for our token generation event</p>
        <LinkButton size="large" onClick={joinWaitListHandler} data-id="klaviyo-modal" uppercase>subscribe for updates</LinkButton>
    </div>
);

export default JoinTheWaitList;