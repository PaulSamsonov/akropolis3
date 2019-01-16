import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import { debounce } from 'lodash';
import PageSection from './common/PageSection';
import Modal from './Modal';
import WaitlistForm from './WaitlistForm';
import JoinSuccess from './JoinSuccess';
import Header from './Header';
import HeaderBlog from './HeaderBlog';
import Intro from './Intro';
import { SocialMedia } from './SocialMedia';
import Quote from './Quote';
import Whitepaper from './Whitepaper';
import Partners from './Partners';
import Tech from './Tech';
import Team from './Team';
import BlogPost from './BlogPost';
import Advisors from './Advisors';
import Footer from './Footer';
import FooterLine from './FooterLine';
import ProblemSolution from './ProblemSolution';
import Perspective from './Perspective';
import TokenSale from './TokenSale';
import Roadmap from './Roadmap';
import Faq from './FAQ';
import MeetUs from './MeetUs';
import Cookies from './Cookies';
import JoinTheWaitList from './JoinTheWaitList';
// import TokenStructure from './TokenStructure';
import ErrorPage from './ErrorPage';
import styles from './style';
import Switcher from "./common/Switcher";

class Home extends Component {
    openJoinModal = (Label) => {
        this.setState({ openJoin: true });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            Category: 'Signup',
            Action: 'Click-Waitlist',
            Label,
            Value: 1
        });
    };
    closeJoinModal = () => {
        this.setState({ openJoin: false, closeJoin: true });
        setTimeout(() => this.setState({ openJoin: false, closeJoin: false }), 200);
    };

    render({ }, { openJoin, closeJoin, openSuccess, closeSuccess }) {
        return (
            <main>
                <Modal open={openJoin} closed={closeJoin} onDismiss={this.closeJoinModal} showClose={false}>
                    <WaitlistForm />
                </Modal>
                <Modal open={openSuccess} closed={closeSuccess} onDismiss={this.closeSuccessModal} showClose>
                    <JoinSuccess />
                </Modal>
                <Header joinWaitListHandler={() => this.openJoinModal('Top-Btn')} />

                <PageSection id="introSection" className={styles.introSection}>
                    <Intro joinWaitListHandler={() => this.openJoinModal('Top-Btn')} />
                </PageSection>

                <PageSection className={styles.partnersSection} nopadding>
                    <Quote />
                    <Partners />
                </PageSection>

                <PageSection id="solutionSection" className={styles.solutionSection} scrollableAnchorId={'solution'} nopadding>
                    <ProblemSolution />
                    <Perspective />
                </PageSection>

                <PageSection className={styles.teamSection} scrollableAnchorId={'team'}>
                    <Team />
                </PageSection>

                <PageSection className={styles.faqSection} id="faq" scrollableAnchorId={'faq'}>
                    <Faq />
                </PageSection>

                <PageSection className={styles.footerSection}>
                    <Footer />
                </PageSection>

                <PageSection className={styles.socialMediaSection}>
                    <SocialMedia />
                </PageSection>

                <FooterLine />
                <Cookies />
            </main>
        );
    }
}

export default class App extends Component {
	closeJoinModal = () => {
		this.setState({ openJoin: false, closeJoin: true });
		setTimeout(() => this.setState({ openJoin: false, closeJoin: false }), 200);
	};

	closeSuccessModal = () => {
		this.setState({ openSuccess: false, closeSuccess: true });
		setTimeout(() => this.setState({ openSuccess: false, closeSuccess: false }), 200);
	};

	openJoinModal = (Label) => {
		this.setState({ openJoin: true });
        window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			Category: 'Signup',
			Action: 'Click-Waitlist',
			Label,
			Value: 1
		});
	};

	openTeamModal = (Label) => {
		this.setState({ openJoin: true });
        window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			Category: 'Signup',
			Action: '',
			Label,
			Value: 1
		});
	};

	openSuccessModal = () => this.setState({ openSuccess: true });
	isElementInView = (element) => {
	    if (element){
            const bounding = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            if (bounding.top < viewportHeight && viewportHeight < bounding.bottom + viewportHeight) {
                return true;
            }
            return false;
        }
	}

	componentDidMount() {
		document.addEventListener('scroll', debounce(() => {
			const introEl = document.getElementById('introSection');

			if (this.isElementInView(introEl)) introEl.style.backgroundPositionY = `-${(window.scrollY / 100 - introEl.getBoundingClientRect().top / 10)}px`;
		}, 10));

		if (typeof window !== 'undefined' && window.KlaviyoSubscribe) {
			window.KlaviyoSubscribe.attachToForms('#email_signup', {
				hide_form_on_success: false,
				success: () => {
					this.closeJoinModal();
					this.openSuccessModal();
					function gtag() {
						 if (window.dataLayer) {
							 dataLayer.push(arguments);
						 }
					}
					gtag('event', 'form_submit', 'Klaviyo form');
				}
			});
		}
	}

	render({ }, { openJoin, closeJoin, openSuccess, closeSuccess }) {
		return (
            <Router>
				<Home exact path="/" />
                <ErrorPage default />
            </Router>
		);
	}
}
