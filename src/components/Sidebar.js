import React from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import Img from "gatsby-image"
import { graphql, StaticQuery, Link } from "gatsby"
const Sidebar = () => (
  <div>
    <Card className="bg-dark">
      <CardBody>
        <CardTitle
          className="text-center text-uppercase mb-3"
          style={{ color: "#41FF00" }}
        >
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email address.."
            />
          </FormGroup>
          <button
            className="btn btn-outline-success text-uppercase"
            style={{ color: "#41FF00" }}
          >
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card className="bg-dark">
      <CardBody>
        <CardTitle
          className="text-center text-uppercase"
          style={{ color: "#41FF00" }}
        >
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
    <Card className="bg-dark">
      <CardBody>
        <CardTitle className="text-center text--uppercase mb-3">
          Recent posts
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id} className="bg-dark">
                  <Link to={node.frontmatter.path}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    ></Img>
                  </Link>
                  <CardBody>
                    <CardTitle>
                      {" "}
                      <Link
                        to={node.frontmatter.path}
                        style={{ color: "#fff" }}
                      >
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        ></StaticQuery>
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Sidebar
