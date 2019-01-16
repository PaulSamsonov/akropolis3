function Page () {
	this.title = 'My Page';
}

Page.prototype.open = function (path) {
	browser.url(path);
};

// ANCHORS ---------

Page.prototype.solutionAnchor = function () {
	return '[href="#solution"]';
};

Page.prototype.resourcesAnchor = function () {
	return '[href="#resources"]';
};

Page.prototype.teamAnchor = function () {
	return '[href="#team"]';
};

Page.prototype.techAnchor = function () {
	return '[href="#tech"]';
};

Page.prototype.tokenSaleAnchor = function () {
	return '[href="#tokensale"]';
};

Page.prototype.baseURL = function () {
	return './';
};

Page.prototype.getYOffset = function () {
	return 'return window.pageYOffset;';
};

Page.prototype.joinButton = function () {
	return '[class*="joinButtonText"]';
};

Page.prototype.mandatoryEmailLabel = function () {
	return '[class*="emailInput"] span';
};

module.exports = new Page();