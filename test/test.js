const { expect } = require('chai')
const Youtube = require('../')

const youtube = new Youtube(process.env.TOKEN)

describe('test youtube', function () {
  this.timeout(5000)

  it('get channel data by usernmae', async () => {
    const channel = await youtube.getChannel({
      username: 'streetcap1',
      part: 'contentDetails'
    })

    const { id, contentDetails } = channel

    expect(channel)
      .to.be.a('object')
      .to.have.all.keys([ 'kind', 'etag', 'id', 'contentDetails' ])

    expect(id).eq('UChMP5nRHcz0RxoMm0qRR2uw')
  })

  it('get channel data by channelId', async () => {
    const channel = await youtube.getChannel({
      channelId: 'UChMP5nRHcz0RxoMm0qRR2uw',
      part: 'id' // default value
    })

    const { id } = channel

    expect(channel)
      .to.be.a('object')
      .to.have.all.keys([ 'kind', 'etag', 'id' ])

    expect(id).eq('UChMP5nRHcz0RxoMm0qRR2uw')
  })

  it('get playlist', async () => {
    const playlist = await youtube.getPlaylist({
      channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
      maxResults: 50,
      part: [ 'snippet', 'contentDetails' ]
    })

    expect(playlist)
      .to.be.a('object')
      .to.have.all.keys([ 'kind', 'etag', 'nextPageToken', 'pageInfo', 'items' ])
  })
})
