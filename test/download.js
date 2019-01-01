
import should from 'should';
import Downloader from '../lib/Downloader';
should()


describe('download', () => {
    it('https://www.baidu.com', (done) => {
        const downloader = new Downloader()
        downloader.download('https://www.baidu.com')
            .then(resp => {
                should.equal(true, !!resp.body, 'resp.body not found')
                done()
            })
    })
})