import * as React from 'react'
import Seo from 'gatsby-plugin-wpgraphql-seo'
import { seoMetaTags } from '../components/seo'

const IndexPage = () => {
  console.log(seoMetaTags)
  return (
    <>
      <Seo
        title='xD'
        meta={seoMetaTags(
          'AmbasadaV8',
          'AppName',
          'red',
          'Description, że hoho',
          'http://ambasadav8.adamchrapek.pl/wp-content/uploads/2021/10/luca-david-HjXbVnnITvE-unsplash-1.jpg',
          'https://ambasadav8.pl',
          '@ambasadav8'
        )}
      />
      <title>Home Page</title>
      <h1>Home</h1>
    </>
  )
}

export default IndexPage
