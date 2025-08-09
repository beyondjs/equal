import type mgenerate from './';
declare const require: (module: string) => any;

export default function object(value: any) {
	// Avoid cyclic reference of generate as generate imports this module
	const generate = <typeof mgenerate>require('./');

	let ordered = Object.entries(value);
	ordered = ordered.sort((e0, e1) => (e0[0] > e1[0] ? 1 : -1));

	for (const property of ordered) {
		const value = property[1];
		property[1] = typeof value === 'object' ? generate(value) : value;
	}
	return JSON.stringify(ordered);
}
