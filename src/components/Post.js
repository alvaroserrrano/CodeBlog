import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, author, slug, date, body, fluid, tags }) => (
  <Card className="bg-dark">
    <Link to={slug}>
      <Img className="card-image-top" fluid={fluid}></Img>
    </Link>
    <CardBody>
      <CardTitle>
        <Link to={slug} style={{ fontSize: "18px", color: "#41FF00" }}>
          {title}
        </Link>
      </CardTitle>
      <CardSubtitle>
        <span className="text-info">{date}</span> by{" "}
        <span className="text-infor">{author}</span>
      </CardSubtitle>
      <CardText>{body}</CardText>
      <ul className="post-tags">
        {tags.map(tag => {
          return (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="text--uppercase">
                  {tags}
                </Badge>
              </Link>
            </li>
          )
        })}
      </ul>
      <Link
        className="btn btn-outline-primary float-right"
        style={{ backgroundColor: "#458394", color: "#fff" }}
        to={slug}
      >
        Read more
      </Link>
    </CardBody>
  </Card>
)

export default Post
