import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About">
    <SEO title="About" />

    <p>
      Hi! I am Alvaro Serrano Rivas and this is my personal blog where I will be
      posting about IT, ethical hacking, web development, databases, systems
      administration, programming practices... and much more!
    </p>
    <br />
    <p>
      If you want to learn more about my skills you can check out my temporary
      portfolio site:{" "}
      <a href="https://alvaro-serrano-rivas.netlify.com" target="_blank">
        Alvaro Serrano
      </a>
    </p>
    <br />
    <p>
      And also my Github Profile:{" "}
      <a href="https://github.com/alvaroserrrano" target="_blank">
        {" "}
        Alvaro Serrano
      </a>
    </p>
  </Layout>
)

export default AboutPage
