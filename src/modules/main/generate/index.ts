import array from './array';
import object from './object';

export default function generate(value: any) {
	if (typeof value !== 'object') return value;

	const type = value instanceof Array ? 'array' : 'object';
	return type === 'array' ? array(value) : object(value);
}
