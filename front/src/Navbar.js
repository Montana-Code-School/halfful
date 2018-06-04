import React from 'react';

class Navbar extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">HalfFül</a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Email" aria-label="Search"/>
            <input class="form-control mr-sm-2" type="search" placeholder="Password" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
          </form>
      </nav>
    </div>

    )
  }
};
export default Navbar;
