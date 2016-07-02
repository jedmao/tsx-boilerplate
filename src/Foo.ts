import { assign } from 'lodash';
import Bar from './Bar';

export default class Foo {

	private config: any;

	private bar: Bar;

	constructor(config:any) {
		this.bar = new Bar;
		this.config = assign({}, config);
	}

}
