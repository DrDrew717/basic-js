const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS ** STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const string = String(str);
  const addition = (options.addition !== undefined) ? String(options.addition) : '';
  const separator = (options.separator != null) ? options.separator : '+';
  const additionSeparator = (options.additionSeparator != null) ? options.additionSeparator : '|';
  const repeatTimes = (options.repeatTimes) ? options.repeatTimes : 1;
  const additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  const additions = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return Array(repeatTimes).fill(string + additions).join(separator);
}

module.exports = {
  repeater
};
