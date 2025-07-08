import array from './array';
import object from './object';
import generate from './generate';

export /*bundle*/ const equal = function (v1, v2) {
	if (typeof v1 !== typeof v2) return false;
	if (typeof v1 !== 'object') return v1 === v2;

	if (v1 instanceof Array || v2 instanceof Array) {
		// The two values must be arrays
		if (!(v1 instanceof Array) || !(v2 instanceof Array)) return false;

		// Compare the two arrays
		return array(v1, v2);
	} else {
		// Compare the two objects
		return object(v1, v2);
	}
};

equal.generate = generate;
