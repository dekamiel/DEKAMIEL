function decryptMailto() {
    // replace 'your-email@example.com' with your email address
    var email = 'send@dekamiel.com';
    // replace 'subject' with the desired email subject
    var subject = 'Thanks for reaching out to us!';
    // replace 'body' with the desired email body
    var body = 'Dear Kamiel,';

    // create the encrypted mailto link
    var encryptedMailtoLink = 'mailto:' + encodeEmail(email) + '?subject=' + encodeText(subject) + '&body=' + encodeText(body);

    // replace the encrypted email address with the plain text version
    var decryptedMailtoLink = encryptedMailtoLink.replace(encodeEmail(email), email);

    // set the href attribute of the link to the decrypted mailto link
    document.getElementById('encrypted-mailto-link').setAttribute('href', decryptedMailtoLink);
}

// function to encode email address
function encodeEmail(email) {
    var encodedEmail = '';
    for (var i = 0; i < email.length; i++) {
        encodedEmail += '&#' + email.charCodeAt(i) + ';';
    }
    return encodedEmail;
}

// function to encode text
function encodeText(text) {
    var encodedText = '';
    for (var i = 0; i < text.length; i++) {
        encodedText += '%' + text.charCodeAt(i).toString(16);
    }
    return encodedText;
}