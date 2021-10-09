import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo'
const PageLayout = ({ children }) => {
  const {
    allWpMenu: {
      nodes: {
        0: {
          menuItems: { nodes }
        }
      }
    },
    wp: { seo }
  } = useStaticQuery(graphql`
    {
      allWpMenu {
        nodes {
          menuItems {
            nodes {
              label
              url
            }
          }
        }
      }
      wp {
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <SEOContext.Provider value={{ global: seo }}>
      <header>
        <nav>
          <ul>
            {nodes.map((item, index) => {
              const { label, url } = item
              return (
                <li key={index}>
                  <Link to={url}>{label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </SEOContext.Provider>
  )
}
export default PageLayout
