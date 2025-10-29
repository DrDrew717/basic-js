const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    let result = '';
    if (!message || !key) throw Error (`Incorrect arguments!`);
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;
    for (let i = 0; i < message.length; i += 1) {
      let messageLetterIndex = message.charCodeAt(i) - 65;
      let keyLetterIndex;
      if (messageLetterIndex >= 0 && messageLetterIndex < 26) {
        keyLetterIndex = key.charCodeAt(keyIndex % key.length) - 65;
        keyIndex += 1;
        let newLetterIndex = (messageLetterIndex + keyLetterIndex) % 26;
        let newLetter = String.fromCharCode(65 + newLetterIndex);
        result = result + newLetter;
      } else {
        result = result + message[i];
      }
    }
    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(message, key) {
    let result = '';
    if (!message || !key) throw Error (`Incorrect arguments!`);
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;
    for (let i = 0; i < message.length; i += 1) {
      let messageLetterIndex = message.charCodeAt(i) - 65;
      let keyLetterIndex;
      if (messageLetterIndex >= 0 && messageLetterIndex < 26) {
        keyLetterIndex = key.charCodeAt(keyIndex % key.length) - 65;
        keyIndex += 1;
        let newLetterIndex = (messageLetterIndex - keyLetterIndex + 26) % 26;
        let newLetter = String.fromCharCode(65 + newLetterIndex);
        result = result + newLetter;
      } else {
        result = result + message[i];
      }
    }
    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
