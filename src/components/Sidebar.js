import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap"
import Img from "gatsby-image"

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
  </div>
)

export default Sidebar
