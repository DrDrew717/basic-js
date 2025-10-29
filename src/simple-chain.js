const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.links.push(`( ${String(value)} )`);
    } else {
      this.links.push(`(  )`);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.links.length) {
      this.links.splice(position - 1, 1);
      return this;
    } else {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    const result = this.links.join('~~');
    this.links = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
