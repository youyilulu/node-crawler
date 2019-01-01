

import should from 'should';
import Downloader from '../lib/Downloader';
import BaiduHtmlParser from '../examples/BaiduHtmlParser'

should()

describe('HtmlParser', () => {
    it('BaiduHtmlParser', (done) => {
        const destUrl = 'https://www.baidu.com'
        const downloader = new Downloader()
        downloader.download(destUrl)
            .then(resp => {
                const baiduParser = new BaiduHtmlParser()
                const { newUrls, newData } = baiduParser.parse(destUrl, resp.body)
                newUrls.size.should.equal(8)
                newData.should.equal('百度一下')
            })
            .finally(done)
    })
})