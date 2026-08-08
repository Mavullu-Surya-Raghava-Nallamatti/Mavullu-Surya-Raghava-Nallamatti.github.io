const test = require('node:test');
const assert = require('node:assert/strict');
const { buildMailtoLink, buildGmailComposeUrl } = require('./contact-utils');

test('buildMailtoLink encodes subject and body', () => {
  const url = buildMailtoLink('person@example.com', 'Portfolio inquiry', 'Hello there');
  assert.equal(url, 'mailto:person@example.com?subject=Portfolio%20inquiry&body=Hello%20there');
});

test('buildMailtoLink omits empty values', () => {
  const url = buildMailtoLink('person@example.com', '', '');
  assert.equal(url, 'mailto:person@example.com');
});

test('buildGmailComposeUrl encodes the full draft payload', () => {
  const url = buildGmailComposeUrl('person@example.com', 'Portfolio inquiry', 'Hello there');
  assert.equal(url, 'https://mail.google.com/mail/?view=cm&fs=1&to=person%40example.com&su=Portfolio%20inquiry&body=Hello%20there');
});
