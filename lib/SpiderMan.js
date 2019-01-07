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

    crawl(url) {
        this._manager.addNewUrl(url)
        if (this._manager.hasNewUrl()) {

        }
    }
}

export default SpiderMan