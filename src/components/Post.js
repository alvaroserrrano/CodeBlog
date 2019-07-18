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

const Post = ({ title, author, path, date, body, fluid, tags }) => {
  return (
    <Card className="bg-dark">
      <Link to={path}>
        <Img className="card-image-top" fluid={fluid}></Img>
      </Link>
      <CardBody>
        <CardTitle style={{ color: "#41FF00" }}>
          <Link to={path} style={{ fontSize: "18px", color: "#fff" }}>
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
              <li>
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
          to={path}
        >
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
