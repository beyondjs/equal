import generate from './generate';

export default function object(o1: object, o2: object) {
	return generate(o1) === generate(o2);
}
