import { h, Component } from 'preact';
import cx from 'classnames';
import Info from '../../assets/svgs/info.svg';
import styles from './style';

const data = [
    // { title: 'Implied network value', value: '$ 37,500,000' },
    { title: 'Token Sale', value: '40%' },
    // { title: 'Notional / Par valuation of token supply', value: '$ 37,500,000' },
    // { title: 'Valuation on a fully-diluted basis', value: '$ 37,500,000' },
    { title: 'Total token supply', value: '1,250,000,000', customClass: 'totalTokenSupply' },
    { title: 'Token Price', value: '$ 0.0300', moreInfo: '(USD/ETH rate locked 48 hours before the TGE)' },
    { title: 'Team Vesting', value: '24 months' },
    { title: 'Hard cap', value: '$ 15,000,000' },
    { title: 'Maximum token amount for sale', value: '500,000,000' }
];

class TokenStructure extends Component {
    constructor() {
        super();
        this.state.moreInfoVisible = [];
    }

    toggleMoreInfo = (index) => {
        const prevousState = {...this.state};
        const idx = prevousState.moreInfoVisible.indexOf(index);
        if (idx === -1) {
            prevousState.moreInfoVisible.push(index);
        } else {
            prevousState.moreInfoVisible.splice(idx, 1);
        }
        this.setState({...prevousState});
    }

    render() {
        return (
            <div className={styles.tokenStructure}>
                <p className={styles.title}>Token Structure</p>
                <div className={styles.figures}>
                    {
                        data.map((item, index) => (
                            <div
                                className={cx({
                                    [styles.item]: true,
                                    [styles[item.customClass]]: item.customClass
                                })}
                            >
                                <p className={styles.value}>{item.value}</p>
                                <p className={styles.description}>
                                    <span className={styles.primaryDescription}>{item.title}</span>
                                    {
                                        item.moreInfo &&
                                        <div className={styles.moreInfo}>
                                            <span
                                                className={cx(styles.icon, styles.invisibleOnMobile)}
                                                onMouseOver={() => { this.toggleMoreInfo(index)}}
                                                onMouseOut={() => { this.toggleMoreInfo(index)}}
                                            >
                                                <Info />
                                            </span>
                                            <div
                                                className={cx({
                                                    [styles.tooltip]: true,
                                                    [styles.visible]: this.state.moreInfoVisible.indexOf(index) !== -1
                                                })}
                                            >
                                                {item.moreInfo}
                                            </div>
                                        </div>
                                    }
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default TokenStructure;
