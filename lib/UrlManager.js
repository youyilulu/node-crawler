/**
 * URL 管理器
 */

class UrlManager {
    constructor() {
        this.newUrls = []
        this.oldUrls = []
    }

    hasNewUrl() {
        return newUrls.length > 0
    }

    getNewUrl() {
        const newUrl = this.newUrls.shift()
        this.oldUrls.push(newUrl)
        return newUrl
    }

    addNewUrls(urls: Array<String>) {
        urls.map(url => {
            this.addNewUrl(url)
        })
    }

    addNewUrl(url: String) {
        if (url && this.newUrls.indexOf(url) < 0) {
            this.newUrls.push(url)
        }
    }

    newUrlSize(): Integer {
        return this.newUrls.length
    }

    oldUrlSize() {
        return this.oldUrls.length
    }
}