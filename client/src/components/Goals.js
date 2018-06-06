import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Goals extends React.Component {
  constructor() {
    super();

    this.state = {
      waterGoal: 0,
      amountJustConsumed: 0,
      leftToGo: 0,
      totalAmountConsumed: 0
    }

    this.submitButton = this.submitButton.bind(this);
    this.updateButton = this.updateButton.bind(this);
    this.goalInput = this.goalInput.bind(this);
    this.updateGoal = this.updateGoal.bind(this);

  }

  submitButton(e) {
    
  }

  updateButton(e) {

  }

  goalInput(e) {
    this.setState({waterGoal: e.target.value})
  }

  updateGoal(e) {
    this.setState({amountJustConsumed: e.target.value})
  }
  render() {
    const newTotal = parseInt(this.state.totalAmountConsumed) + parseInt(this.state.amountJustConsumed);
    const amountLeft = parseInt(this.state.waterGoal) - newTotal;

    return (<div>
      <h3>What is your water goal today?</h3>
      <form noValidate="noValidate" autoComplete="off">
        <TextField onChange={this.goalInput} id="waterGoals" label="waterGoals" margin="normal"/>
      </form>
      <RaisedButton onClick={this.submitButton} type="submit" label="Submit" primary="primary"/>
      <h3>How much water did you just drink?
      </h3>
      <form noValidate="noValidate" autoComplete="off">
        <TextField onChange={this.updateGoal} id="updateWater" label="updateWater" margin="normal"/>
      </form>
      <RaisedButton onClick={this.updateButton} type="submit" label="Update" primary="primary"/>

      <h3>
        Your daily water goal is: {this.state.waterGoal}
        ounces</h3>
      <h3>
        Water currently consumed: {newTotal}
        ounces</h3>
      <h3>
        Amount of water to go: {amountLeft}
        ounces</h3>
      <br></br>
    </div>)
  }
};
export default Goals;
