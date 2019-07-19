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
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="google"
          >
            <i className="fab fa-google fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
