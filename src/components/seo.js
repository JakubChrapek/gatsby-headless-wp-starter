export const seoMetaTags = (
  title,
  appName,
  themeColor,
  description,
  image,
  url,
  twitterCreator
) => {
  return [
    {
      name: 'apple-mobile-web-app-title',
      content: title || 'AmbasadaV8'
    },
    {
      name: 'application-name',
      content: appName || 'AmbasadaV8'
    },
    {
      name: 'theme-color',
      content: themeColor || '#30BA78'
    },
    {
      name: 'description',
      content: description || 'Przykładowy opis w /seo.js'
    },
    {
      name: 'image',
      content: image || '/'
    },
    {
      name: 'url',
      content: url || 'url'
    },
    {
      name: 'twitterCreator',
      content: twitterCreator || null
    }
  ]
}
