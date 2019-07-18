import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" expand="sm" className="navbar-dark bg-dark">
          <div className="container">
            <NavbarBrand style={{ color: "#41FF00" }} href="/">
              {this.props.siteTitle}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink style={{ color: "#41FF00" }} href="/team/">
                    Team
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ color: "#41FF00" }} href="/tags/">
                    Tags
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ color: "#41FF00" }} href="/about/">
                    About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
