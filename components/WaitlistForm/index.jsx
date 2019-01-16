import { h } from 'preact';
import LinkButton from '../common/LinkButton';
import styles from './style';

const sendSignupEvent = () => {
	window.dataLayer.push({
		Category: 'Signup',
		Action: 'Form-Submitted-Waitlist',
		Value: 1
	});
};

const WaitlistForm = () => (
	<div className={styles.joinWaitlistModal}>
        {/*<h1 className={styles.formTitle}>Join Akropolis Waitlist</h1>*/}
        {/*<p>The official Whitelist for our pre-sale is currently closed. <br />*/}
        {/*Join the Waitlist to be the first in line for our Token Generation Event.</p>*/}
        {/*<form id="email_signup"
			class="inner-list-item klaviyo-modal-form klaviyo_condensed_styling klaviyo_condensed_float klaviyo_condensed_embed_LejNDZ"
			action="//manage.kmail-lists.com/subscriptions/subscribe"
			data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe" method="GET" target="_blank"
			novalidate="novalidate"
		>
			<input type="hidden" name="g" value="LejNDZ" />
			<input type="hidden" name="$fields" value="Telegram,Twitter,LinkedIn,Desired,Interested" />

			{/*<div className={styles.inputGroup}>*/}
				{/*<input id="klaviyo_form_first_name" type="text" name="first_name" placeholder="First Name" />*/}
				{/*<input id="klaviyo_form_last_name" type="text" name="last_name" placeholder="Last Name" />*/}
			{/*</div>*/}
        {/*
			<div className={styles.emailInput}>
				<input type="email" id="k_id_modal_$email" name="email" placeholder="Email address" required />
				<span>*The field is mandatory</span>
			</div>
            
			{/*<input id="Telegram" type="text" name="Telegram" placeholder="Telegram account" />*/}

			{/*<div className={styles.inputGroup}>*/}
				{/*<input id="Twitter" type="text" name="Twitter" placeholder="Twitter account (URL)" />*/}
				{/*<input id="LinkedIn" type="text" name="LinkedIn" placeholder="Linkedin profile (URL)" />*/}
			{/*</div>*/}

			{/*<input id="Desired" name="Desired" type="text" placeholder="Potencial Contribution (in ETH)" />*/}
			{/*<input id="Interested" name="Interested" type="text" className={styles.fewWordsInput} placeholder="Describe in a few words why you are interested in Akropolis" />*/}

        {/*<div className={styles.formEnd}>
				<div class="klaviyo_messages">
					<div class="error_message" style="display:none;" />
				</div>
				<div class="klaviyo_form_actions">
					<LinkButton size="large" onClick={sendSignupEvent} uppercase submit style="margin: 0 auto">SUBSCRIBE</LinkButton>
				</div>
			</div>


		</form> */}
        <div className="klaviyo-form-MuBcVz"></div>
	</div>
);

export default WaitlistForm;