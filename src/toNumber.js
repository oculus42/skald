/**
 * Parses int or float or Infinity to numeric value
 * 
 * @func
 * @since 1.0.0
 * @param {*} value
 * @return {number}
 * @example
 * 
 *     toNumber('Infinity'); //=> Infinity
 *     toNumber('1.0'); //=> 1
 *     toNumber({}); //=> NaN
 */

import curry from './curry';
import equals from './equals';
import ternary from './ternary';

const STR_INFINITY = 'Infinity';
const NUM_INFINITY = Infinity;
const equalsInfinity = curry(equals, STR_INFINITY);
const toNumber = value => ternary(
    () => parseFloat(value),
    NUM_INFINITY,
    equalsInfinity(value),
);

export default toNumber;