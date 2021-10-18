import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from 'gatsby-plugin-wpgraphql-seo'
import { seoMetaTags } from '../components/seo'

const IndexPage = ({ data: { wpPage } }) => {
  console.log(wpPage)
  return (
    <>
      <Seo post={wpPage} />
      <title>Home Page</title>
      <h1>{wpPage.homepage.heroSectionTitle}</h1>
    </>
  )
}

export const query = graphql`
  query HomePage {
    wpPage(id: { eq: "cG9zdDoyOQ==" }) {
      title
      content
      homepage {
        heroSectionTitle
        sekcjaPowitalnaTekstPrzycisku
      }
      nodeType
      uri
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
    }
  }
`

export default IndexPage
