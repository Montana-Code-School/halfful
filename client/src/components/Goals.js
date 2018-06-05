import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Goals extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
    <div>
      <h3>What is your water goal today?</h3>
        <form noValidate autoComplete="off">
          <TextField
            id="waterGoals"
            label="Name"
            margin="normal"
          />
        </form>
        <RaisedButton type="submit" label="Submit" primary />
       <h3>How much water did you just drink? </h3>
       <form noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          margin="normal"
        />
      </form>
      <RaisedButton type="submit" label="Update" primary />

      <h3> Water currently consumed: </h3>
      <h3> Amount of water to go: </h3>
      <br></br>
    </div>

    )
  }
};
export default Goals;
