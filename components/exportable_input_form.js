/** @format */

export function inputForm() {
	return `<h1>Let's talk</h1>
			<div class="input-form">
				<div class="nameTags">
					<div class="first-name">
						<label for="name">First name *</label>
						<input class="input-tag" type="text" name="name" id="f-name" />
					</div>
					<div class="last-name">
						<label for="name">Last name *</label>
						<input class="input-tag" type="text" name="name" id="l-name" />
					</div>
				</div>
				<div class="emailTags">
					<div class="email">
						<label for="name">Email *</label>
						<input class="input-tag" type="text" name="name" id="email" />
					</div>
					<div class="company-name">
						<label for="name">Company name *</label>
						<input
							class="input-tag"
							type="text"
							name="name"
							id="company-name"
						/>
					</div>
				</div>
				<div class="phoneTags">
					<div class="phone">
						<label for="name">Phone number *</label>
						<input class="input-tag" type="text" name="phone" id="phone" />
					</div>
					<div class="Job-title">
						<label for="name">Job title</label>
						<input type="text" name="job-title" id="job-title" />
					</div>
				</div>
				<div class="interestTags">
					<div class="intrest">
						<label for="name">I'm interested in...(optional)</label>
						<select name="interest" id="interest-in">
							<option value="">Choose...</option>
							<option value="Customer">Customer satisfaction</option>
							<option value="integrating">
								Integrating data with other apps
							</option>
							<option value="feedback">Customer feedback</option>
							<option value="get-feedback">GetFeedback</option>
						</select>
					</div>
					<div class="county">
						<label for="country">Country *</label>
						<select name="country" id="country">
							<option value="us">USA</option>
							<option value="in">India</option>
							<option value="ch">China</option>
							<option value="ja">Japan</option>
						</select>
					</div>
				</div>
			</div>
			<div class="comment">
				<label for="">Tell us more about what you need (optional)</label>
				<input type="text" name="" id="tell-us-more" />
			</div>
			<div class="checkbox-and-info">
				<input type="checkbox" name="" id="checkbox" />
				<div class="checkbox-next-text">
					<p>
						I wish to receive other information about Momentive like product
						updates, news, information, and special promotions. Visit the
						Privacy Notice for information on how we use your information. You
						can unsubscribe anytime using a link at the bottom of our
						communications.
					</p>
					<p>
						⁣⁢By clicking 'Submit', I agree to use of my details to contact me
						about my specific request or inquiry.⁫
					</p>
				</div>
			</div>
			<input class="submit-button" type="submit" value="Submit" />`;
}
