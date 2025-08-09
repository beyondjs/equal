import generate from './generate';

export default function object(o1: Record<string, any>, o2: Record<string, any>) {
	return generate(o1) === generate(o2);
}
