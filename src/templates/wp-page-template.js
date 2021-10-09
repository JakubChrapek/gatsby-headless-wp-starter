import React from 'react'
import { graphql } from 'gatsby'
import Seo from 'gatsby-plugin-wpgraphql-seo'

const WpPageTemplate = ({ data: { wpPage } }) => {
  const { title, content } = wpPage

  return (
    <>
      <Seo post={wpPage} />
      <section>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
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
export default WpPageTemplate
