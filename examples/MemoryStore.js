import BaseStore from "../lib/BaseStore";
import override from '../core/decorators/override'

const datas = []
/**
 * 内存存储
 */
class MemoryStore extends BaseStore {
    @override
    add(data: Object) {
        datas.push(data)
    }

    @override
    list() {
        return datas
    }
}