import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout pageTitle="CodeBlog">
    <SEO title="Home" />
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                slug={node.fields.slug}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              ></Post>
            ))}
          </div>
        )
      }}
    ></StaticQuery>
  </Layout>
)

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
