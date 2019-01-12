/**
 * 爬虫调度器
 */

class SpiderMan {
    constructor(manager: UrlManager, downloader: Downloader, parser: HtmlParser, store: BaseStore) {
        this._manager = manager
        this._downloader = downloader
        this._parser = parser
        this._store = store
    }

    async crawl(url) {
        this._manager.addNewUrl(url)
        while (this._manager.hasNewUrl() && this._manager.oldUrlSize() < 10) {
            const newUrl = this._manager.getNewUrl()
            const resp = await this._downloader.download(newUrl)
            const { newUrls, newData } = this._parser.parse(newUrl, resp.body)
            this._manager.addNewUrls(newUrls)
            this._store.add(newData)
            console.log(`已经抓取${this._manager.oldUrlSize()}个链接`)
        }
    }

    output() {
        const dataList = this._store.list()
        if (dataList && dataList.length > 0) {
            dataList.forEach(element => {
                console.log(element)
            });
        }
    }
}

export default SpiderMan