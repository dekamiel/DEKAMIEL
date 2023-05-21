/*function decryptPhone() {
    // replace '1234567890' with your phone number
    var phone = '+32499739161';
    
    // create the encrypted phone number
    var encryptedPhone = encryptPhone(phone);
    
    // replace the link text with the decrypted phone number
    document.getElementById('phone-link').textContent = encryptedPhone;
  }
  
  function encryptPhone(phone) {
    // replace this with your own encryption algorithm
    var encryptedPhone = '+32499739161';
    return encryptedPhone;
  }*/

function decodePhoneNumber(encodedPhoneNumber) {
  var decodedPhoneNumber = atob(encodedPhoneNumber);
  window.location.href = 'tel:' + decodedPhoneNumber;
}