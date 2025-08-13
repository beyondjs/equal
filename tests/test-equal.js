const { join } = require('path');

const BEE = require('@beyond-js/bee');
BEE('http://localhost:1110', { inspect: 4000 });

(async () => {
	const { equal } = await bimport('@beyond-js/equal/main');

	// The `Generate` method orders the properties, so the output must be { hello: 'world', world: 'hello' }
	console.log('generate json:', equal.generate({ world: 'hello', hello: 'world' }));
})().catch(exc => console.error(exc.stack));
