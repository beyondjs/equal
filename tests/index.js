require('colors');
const tests = require('./tests');

const BEE = require('@beyond-js/bee');
BEE('http://localhost:1110', { inspect: 4000 });

(async () => {
	const { equal } = await bimport('@beyond-js/equal/main');

	// The `Generate` method orders the properties, so the output must be { hello: 'world', world: 'hello' }
	for (const test of tests.generation) {
		const output = equal.generate(test);
		console.log(`Case: ${JSON.stringify(test)} => \n${output}\n`);
	}

	for (const test of tests.equality) {
		const [expected, value1, value2] = test;
		const ok = equal(value1, value2) === expected;

		const text = `Case: ${JSON.stringify(value1)} === ${JSON.stringify(value2)}`;
		console.log(ok ? text + ' => OK'.green : `${text} => FAIL`.red);
	}
})().catch(exc => console.error(exc.stack));
