import generate from '.';

/**
 * Generates a comparable array
 *
 * @param value {generate}
 * @returns {string}
 */
export default function array(value: any): string {
	if (!(value instanceof Array)) throw new Error('Parameter must be an array');

	const output = value.map((item: any) => generate(item));
	return JSON.stringify(output.sort());
}
