import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends React.Component {
  renderContent() {
    console.log("this.props.auth", this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Link to="/auth/google">Login with Google</Link>;
      default:
        return [
          <li key="payments">
            <Payments />
          </li>,
          <li key="logout">
            <Link to="/api/logout">Logout</Link>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
