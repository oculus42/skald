/**
 * Curry arguments to function and return new function
 *
 * @module curry
 * @func
 * @since 1.0.0
 * @param {function} fn
 * @param {...*} args
 * @return {function|*}
 * @example
 *
 *     const foo = (a, b, c) => a + b + c;
 *     curry(foo, 1, 2)(3); //=> 6
 *     curry(foo, 1)(3, 4); //=> 8
 *     curry(foo, 2)(3)(4); //=> 9
 *     curry(foo)(1)(1)(1); // => 3
 */

import define from './define';

const curry = (fn, ...args) => define(fn)(...args);

export default curry;
