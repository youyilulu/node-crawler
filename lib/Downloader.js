/**
 * URL 下载器
 */
import util from 'util';
import request from 'request'

class Downloader {

    constructor() {
        this.httpGet = util.promisify(request.get)
        this.httpPost = util.promisify(request.post)
    }
    /**
     * 下载url指向的内容
     * @param {String} url 
     */
    async download(url: String): String {
        //TODO: download url content and return
        const resp = await this.httpGet(url)
        return resp
    }
}

export default Downloader