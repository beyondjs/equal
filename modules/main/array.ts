import generate from './generate';

/**
 * Compare if two arrays have the same content
 *
 * @param a {array}
 * @param b {array}
 * @returns {boolean} true if the elements of the both arrays are equal between each other
 */
const array = function (a: Array<any>, b: Array<any>): boolean {
	if (b && !(b instanceof Array)) throw new Error('Second parameter is not an array');

	if (a === b) return true;
	if ((!a && b) || (!b && a)) return false;
	if (a.length !== b.length) return false;

	return generate(a) === generate(b);
};

export default array;
