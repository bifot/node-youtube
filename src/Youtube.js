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
          part: typeof part === 'object' ? part.join(',') : part
        },
        json: true
      })

      const [ item ] = body.items

      return item
    } catch (err) {
      throw err
    }
  }

  async getPlaylist (settings) {
    const { baseUrl, key } = this
    const { playlistId, part = 'id' } = settings

    try {
      const body = await rp({
        baseUrl,
        url: '/playlists',
        qs: {
          ...settings,
          key,
          id: playlistId,
          part: typeof part === 'object' ? part.join(',') : part
        },
        json: true
      })

      return body
    } catch (err) {
      throw err
    }
  }

  async getPlaylistItems (settings) {
    const { baseUrl, key } = this
    const { playlistId, part = 'id' } = settings

    try {
      const body = await rp({
        baseUrl,
        url: '/playlistItems',
        qs: {
          ...settings,
          key,
          playlistId,
          part: typeof part === 'object' ? part.join(',') : part
        },
        json: true
      })

      return body
    } catch (err) {
      throw err
    }
  }

  async getVideos (settings) {
    const { baseUrl, key } = this
    const { playlistId, part = 'id' } = settings

    try {
      const body = await rp({
        baseUrl,
        url: '/videos',
        qs: {
          ...settings,
          key,
          id: playlistId,
          part: typeof part === 'object' ? part.join(',') : part
        },
        json: true
      })

      return body
    } catch (err) {
      throw err
    }
  }
}

module.exports = Youtube
