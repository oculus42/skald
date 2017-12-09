import curry from './curry';
import equals from './equals';
import ternary from './ternary';
import toBoolean from './toBoolean';

const INT_ONE = 1;
const INT_ZERO = 0;
const equalsOne = equals(INT_ONE);
const allTrue = curry(arr => arr.some(toBoolean));

const or = (...args) => ternary(
    () => allTrue(args),
    () => or(...args[INT_ZERO]),
    equalsOne(args.length),
);

export default or;
