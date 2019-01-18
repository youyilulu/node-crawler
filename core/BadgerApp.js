/**
 * Badger App
 * 继承Koa Application
 */
const assert = require('assert')
const KoaApplication = require('koa').KoaApplication

export default class BadgerApp extends KoaApplication {
    constructor(options = {}) {
        super();
    }

    /**
     * 初始化
     * @param {String} baseDir 
     */
    init(baseDir) {

    }

    loadConfig() {

    }

    load
}