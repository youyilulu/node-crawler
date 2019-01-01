/**
 * 解析器
 * 
 * 解析下载的内容
 */
import cheerio from 'cheerio'

class HtmlParser {

    /**
     * 解析htmlContent
     * @param {String} pageUrl 
     * @param {String} htmlContent 
     */
    parse(pageUrl: String, htmlContent: String) {
        const $ = cheerio.load(htmlContent)
        const newUrls = this.getNewUrls($)
        const newData = this.getNewData($)
        return {
            newUrls,
            newData
        }
    }

    getNewUrls($): Array<String> {
        throw new Error('Parser.getNewUrls is not implemented')
    }

    getNewData($) {
        throw new Error('Parser.getNewData is not implemented')
    }
}

export default HtmlParser