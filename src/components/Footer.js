import React from "react"

const Footer = () => (
  <div className="site-footer bg-dark">
    <h4 className="text-center" style={{ color: "#41FF00" }}>
      Code Blog
    </h4>
    <p className="text-center" style={{ color: "#41FF00" }}>
      Follow us on social media
    </p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-telegram-f fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/alvaroserrrano"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alvaro-serrano-rivas"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
