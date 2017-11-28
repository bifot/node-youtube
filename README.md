[![node-youtube](https://img.shields.io/npm/v/node-youtube.svg?style=flat-square)](https://www.npmjs.com/package/node-youtube/)

# node-youtube

Youtube class for API.

## Install

```sh
$ npm i node-youtube -S
```

## Tests

```sh
$ npm test
```

## Methods

* [constructor(key)](#constructorkey)
* [.getChannel(settings)](#getchannelsettings) ⇒ `[Promise]`
* [.getPlaylsit(settings)](#getplaylistsettings) ⇒ `[Promise]`
* ...

### constructor(key)

| Parameter | Type   | Required |
|:---------:|:------:|:--------:|
| key       | string | yes      |

```js
const Youtube = require('node-youtube')
const youtube = new Youtube(process.env.TOKEN)
```

### [.getChannel(settings)](https://developers.google.com/youtube/v3/docs/channels)

| Parameter | Type   | Required |
|:---------:|:------:|:--------:|
| settings  | object | yes      |
| settings.username | string | yes (without channelId) |
| settings.channelId | string |  yes (without username)  |
| ...settings   | ...  | no  |

Returns channel data by `username` or `channelId`.

```js
const channel = await youtube.getChannel({
  username: 'streetcap1',
  part: 'contentDetails'
})

// {
//   kind: 'youtube#channel',
//   etag: '"ld9biNPKjAjgjV7EZ4EKeEGrhao/aZiv9aPKFfsu2O4WeOfZMtZlbtk"',
//   id: 'UChMP5nRHcz0RxoMm0qRR2uw',
//   ...
// }
```

### [.getPlaylist(settings)](https://developers.google.com/youtube/v3/docs/playlists)

| Parameter | Type   | Required |
|:---------:|:------:|:--------:|
| settings  | object | yes      |
| settings.channelId | string | yes (without playlistId) |
| settings.playlistId | string |  yes (without channelId)  |
| ...settings   | ...  | no  |

Returns playlist by `channelId` or `playlistId`.

```js
const playlist = await youtube.getPlaylist({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  maxResults: 50,
  part: [ 'snippet', 'contentDetails' ]
})

// {
//   kind: 'youtube#playlistListResponse',
//   etag: '"ld9biNPKjAjgjV7EZ4EKeEGrhao/uG7wIWKX43lrDZXh3F5bjaoNCb4"',
//   nextPageToken: 'CDIQAA',
//   pageInfo: { totalResults: 363, resultsPerPage: 50 },
//   items: [ ... ],
//   ...
// }
```

## License

MIT.
