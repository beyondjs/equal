const tests = {};
module.exports = tests;

tests.generation = [
	[1, 2, 3],
	[{ 1: 1 }][({ 1: 1 }, { 2: 2 }, { 3: 3 })],
	{ a: 1, b: 1 },
	{ b: 1, a: 1 },
	{ hello: 'world', world: 'hello' },
	{ world: 'hello', hello: 'world' },
	[{ a: { b: 1, c: 2 }, b: { c: 2, b: 1 } }, 'hello', 123],
	[{ b: { c: 2, b: 1 }, a: { b: 1, c: 2 } }, 'hello', 123],
	['hello', 123, { a: { b: 1, c: 2 }, b: [{ c: 2, b: 1 }, { c: { a: 1, b: 2 } }] }],
	123,
	'hello'
];

tests.equality = [];
tests.equality.push([true, [1, 2, 3], [2, 3, 1]]);
tests.equality.push([true, { a: 1, b: 1 }, { a: 1, b: 1 }]);
tests.equality.push([true, { a: 1, b: 1 }, { b: 1, a: 1 }]);
tests.equality.push([
	true,
	[{ a: { b: 1, c: 2 }, b: { c: 2, b: 1 } }, 'hello', 123],
	['hello', { b: { b: 1, c: 2 }, a: { b: 1, c: 2 } }, 123]
]);
tests.equality.push([false, { a: 1 }, { a: 1, b: 2 }]);
