const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'spotify',
    url: 'https://www.spotify.com',
    description: 'spotify',
    rating: 8 },
  { id: uuid(),
    title: 'github',
    url: 'https://github.com',
    description: 'git hub',
    rating: 4 },
  { id: uuid(),
    title: 'NYT',
    url: 'https://www.nyt.com',
    description: 'the new york times',
    rating: 5 },
]

module.exports = { bookmarks }