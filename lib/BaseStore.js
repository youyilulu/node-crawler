/**
 * 数据仓库
 */

class BaseStore {
    add(data: Object) {
        throw new Error('abstract method [add] is not implemented')
    }

    list() {
        throw new Error('abstract method [list] is not implemented')
    }
}

export default BaseStore