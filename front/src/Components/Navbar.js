import React from 'react';

class Navbar extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">HalfFül</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Email" aria-label="Search"/>
            <input className="form-control mr-sm-2" type="search" placeholder="Password" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
          </form>
      </nav>
    </div>

    )
  }
};
export default Navbar;
