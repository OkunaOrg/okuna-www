const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

function getCurrentSubscriptions() {
  const store = fs.readFileSync(path.join(__dirname, '..', 'store', 'subscribers.json'));
  return Array.from(JSON.parse(store));
}

describe('beta signup', function () {
  it('should subscribe user', function () {
    browser.url('/');
    browser.waitForExist('.waitlist-container');

    const emailInputElement = browser.element('.waitlist-container input');
    emailInputElement.setValue('joe@joe.joe');

    expect(browser.click('.waitlist-container button'));

    browser.waitForExist('.success-message');

    expect(browser.getText('.success-message')).to.include('Hooray! You\'re number 1 on our waitlist.');

    const subscriptions = getCurrentSubscriptions();

    expect(subscriptions).to.have.length(1);
    expect(subscriptions[0]).to.eql('joe@joe.joe');
  });

  it('should update counter', function () {
    browser.url('/');
    browser.waitForExist('.waitlist-container');

    const emailInputElement = browser.element('.waitlist-container input');
    emailInputElement.setValue('katy@perry.ai');

    expect(browser.click('.waitlist-container button'));

    browser.waitForExist('.success-message');

    return expect(browser.getText('.success-message')).to.include('Hooray! You\'re number 2 on our waitlist.');
  });
});
