let urls = {}

export const getUrl = url => {
  if (!urls.hasOwnProperty(url)) {
    throw Error(`You need to define a url for ${url} before calling it.`)
  }

  return urls[url]
}

export const apiConnectConfig = _urls => {
  const { api, marketplace, user } = _urls

  urls = _urls

  return {
    api,
    marketplace,
    user
  }
}
