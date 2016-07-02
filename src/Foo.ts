import { assign } from 'lodash';

import Bar from './Bar';

export default class Foo {

	private config: {};

	private bar: Bar;

	constructor(config: {}) {
		this.bar = new Bar;
		this.config = assign({}, config);
	}

}
