import test from 'ava';
import m from '.';

test('match', t => {
	const fixtures = [
		':80',
		':223',
		':3000',
		':25123'
	];

	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('not match', t => {
	const fixtures = [
		':8',
		':asd12',
		':122222',
		'1234'
	];

	for (const x of fixtures) {
		t.false(m({exact: true}).test(x));
	}
});
