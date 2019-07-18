import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: "#41FF00" }}>Home page</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
              ></Post>
            ))}
          </div>
        )
      }}
    ></StaticQuery>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            path
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
