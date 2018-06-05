import React from 'react';

class Goals extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
    <div>
      <h3>What is your water goal today?</h3>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="watergoal" placeholder="Enter your water goal" aria-label="Water Goal"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
      </form>
      <h3> Water goal: </h3>
      <h3> Water currently consumed: </h3>
      <h3> Amount of water to go: </h3>
    </div>

    )
  }
};
export default Goals;
