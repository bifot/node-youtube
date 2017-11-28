const rp = require('request-promise')

class Youtube {
  constructor (key) {
    this.baseUrl = 'https://www.googleapis.com/youtube/v3'
    this.key = key
  }

  async getChannel ({ username, channelId, part = 'id' }) {
    const { baseUrl, key } = this

    try {
      const body = await rp({
        baseUrl,
        url: '/channels',
        qs: {
          key,
          [ username ? 'forUsername' : 'id' ]: username ? username : channelId,
          part
        },
        json: true
      })

      const [ item ] = body.items

      return item
    } catch (err) {
      throw err
    }
  }
}

module.exports = Youtube
