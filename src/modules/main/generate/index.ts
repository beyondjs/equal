import array from './array.js';
import object from './object.js';

export default function generate(value: any): any {
	if (typeof value !== 'object') return value;

	const type = value instanceof Array ? 'array' : 'object';
	return type === 'array' ? array(value) : object(value);
}
