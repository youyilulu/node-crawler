require('babel-register')

import should from 'should';
import override from "../core/decorators/override";

should();

/**
 * 测试装饰器
 */

class Base {
    foo(name: String, age: Number): String {
        throw new Error('not implement')
    }
}
describe('core.decorators', () => {

    /**
     * 测试override是否能识别参数不一致的情况
     */
    describe('@override', () => {
        try {
            class Child extends Base {
                @override
                foo(name: String, age: Number, extra: any) {
                    return `hello ${name}, you are ${age} years old`
                }
            }
        } catch (err) {
            err.message.should.equal('Child#foo(name, age, extra) does not properly override Base#foo(name, age)')
            return
        }

        should.equal(true, false, '@override does not worked')
    })
})