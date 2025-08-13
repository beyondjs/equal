import type mgenerate from './';
declare const require: (module: string) => any;

/**
 * Generates a comparable array
 *
 * @param value {generate}
 * @returns {string}
 */
export default function array(value: Array<any>): string {
	// Avoid cyclic reference of generate as generate imports this module
	const generate = <typeof mgenerate>require('./');

	if (!(value instanceof Array)) throw new Error('Parameter must be an array');

	const output = value.map((item: any) => generate(item));
	return JSON.stringify(output.sort());
}
