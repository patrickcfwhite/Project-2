import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <nav className="navbar is-primary">
        <div className="container">
          {/* <div className="navbar-brand"> */}
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
          </div>
          {/* <a href=""> */}
          {/* <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
          {/* </div> */}
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to='/search'>Search</Link>
            </div>
            <div className="navbar-item">
              <Link to='/birthday'>Birthday Playlist</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar)