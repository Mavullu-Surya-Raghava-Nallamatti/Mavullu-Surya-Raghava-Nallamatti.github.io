function buildMailtoLink(email, subject, body) {
    const params = [];

    if (subject) {
        params.push(`subject=${encodeURIComponent(subject)}`);
    }

    if (body) {
        params.push(`body=${encodeURIComponent(body)}`);
    }

    const query = params.join('&');
    return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}

function buildGmailComposeUrl(email, subject, body) {
    const params = [];
    params.push('view=cm');
    params.push('fs=1');
    params.push(`to=${encodeURIComponent(email)}`);

    if (subject) {
        params.push(`su=${encodeURIComponent(subject)}`);
    }

    if (body) {
        params.push(`body=${encodeURIComponent(body)}`);
    }

    return `https://mail.google.com/mail/?${params.join('&')}`;
}

if (typeof module !== 'undefined') {
    module.exports = { buildMailtoLink, buildGmailComposeUrl };
}
