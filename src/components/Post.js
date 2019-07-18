import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardBody, CardSubtitle, CardText } from "reactstrap"
import Img from "gatsby-image"

const Post = ({ title, author, path, date, body, fluid }) => {
  return (
    <Card className="navbar-dark bg-dark">
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
