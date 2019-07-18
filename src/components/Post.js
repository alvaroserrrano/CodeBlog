import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardBody, CardSubtitle, CardText } from "reactstrap"

const Post = ({ title, author, path, date, body }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
          <span className="text-infor">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <Link className="btn btn-outline-primary float-right" to={path}>
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
