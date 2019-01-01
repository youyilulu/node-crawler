/**
 * 百度首页解析器
 */

import HtmlParser from '../lib/HtmlParser'
import override from '../core/decorators/override';

class BaiduHtmlParser extends HtmlParser {

    @override
    getNewUrls($): Array<String> {
        let urls = new Set()
        $('#u1 a').each(function () {
            urls.add($(this).attr('href'))
        })
        return urls
    }

    @override
    getNewData($) {
        return $('#su').val()
    }
}

export default BaiduHtmlParser