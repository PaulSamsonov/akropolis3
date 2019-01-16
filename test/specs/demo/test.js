const expect = require('chai').expect;
const Page = require('../../pages/main');

let resourcesOffset = 120;
let solutionOffset = 2800;
// let teamOffset = 0; // No team section - to be altered in the future
let techOffset = 4900;

// describe('By hovering on the header sections', () => {
// 	it('should change the color of the label', () => {
// 		browser.moveToObject(Page.resourcesAnchor());
// 		let color = $(Page.resourcesAnchor()).getCssProperty('color').parsed.hex;
// 		console.log(color);
// 	});
// });

describe('By clicking on the various anchors', () => {
	it('should scroll to that section', () => {
		browser.url(Page.baseURL());
				
		// Resources
		browser.click(Page.resourcesAnchor());
		browser.pause(500);
		// browser.waitUntil(() => browser.execute('return window.pageYOffset;') === '2810', 1000, 'expected to scroll to offset 2810');

		let offset = browser.execute(Page.getYOffset());
		expect(offset.value).to.be.greaterThan(resourcesOffset);
		
		// Solution
		browser.click(Page.solutionAnchor());
		browser.pause(500);

		offset = browser.execute(Page.getYOffset());
		expect(offset.value).to.be.greaterThan(solutionOffset);

		// Team
		// browser.click(Page.teamAnchor());
		// browser.pause(500);

		// offset = browser.execute(Page.getYOffset());
		// expect(offset.value).to.be.greaterThan(teamOffset);

		// Tech
		browser.click(Page.techAnchor());
		browser.pause(500);

		offset = browser.execute(Page.getYOffset());
		expect(offset.value).to.be.greaterThan(techOffset);
	});
});

describe('By clicking on Join', () => {
	it('should open a modal with a email field input', () => {
		browser.click(Page.joinButton());
		browser.waitForVisible(Page.mandatoryEmailLabel(), 500);
		let label = browser.getText(Page.mandatoryEmailLabel());
		expect(label).to.equal('*The field is mandatory');
	});
});