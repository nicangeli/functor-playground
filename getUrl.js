const R = require('ramda')
const prop = R.prop
const path = R.path
const curry = R.curry
const Maybe = require('ramda-fantasy').Maybe

const indexUrls = {
  'en': 'http://en',
  'sp': 'http://sp',
  'jp': 'http://jp'
}

const nick = {
  name: 'Nick',
  email: 'nicangeli@gmail.com',
  prefs: {
    languages: {
      primary: 'fr'
    }
  }
}
const getUrlForUser = user => {
  return Maybe(user)
    .map(path(['prefs', 'languages', 'primary']))
    .chain(maybeGetUrl)
}

const maybeGetUrl = R.curry((urls, language) => {
  return Maybe(urls[language])
})(indexUrls)

const boot = (user, defaultUrl) => {
  console.log(getUrlForUser(user).getOrElse(defaultUrl))
}

boot(nick, 'http://foo.com')
