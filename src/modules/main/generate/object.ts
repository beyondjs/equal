import generate from '.';

export default function object(value) {
	let ordered = Object.entries(value);
	ordered = ordered.sort((e0, e1) => (e0[0] > e1[0] ? 1 : -1));

	for (const property of ordered) {
		const value = property[1];
		property[1] = typeof value === 'object' ? generate(value) : value;
	}
	return JSON.stringify(ordered);
}
