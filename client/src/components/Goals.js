import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from '../modules/Auth';



class Goals extends React.Component {
  constructor(props) {
    super(props);

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

  submitButton(evt) {
    evt.preventDefault()
    fetch('/api/dashboard',{
      method: 'GET',
      headers: {
      Authorization: `bearer ${Auth.getToken()}`}})
    .then ( ( res )  => {return res.json()})
    .then (data => console.log(data));
  }

  updateButton(e) {
      console.log(typeof this.props.totalAmountConsumed);
  }

  goalInput(e) {
    this.setState({waterGoal: e.target.value})
  }

  updateGoal(e) {

    this.setState({amountJustConsumed: e.target.value})
  }
  render() {
    const newTotal = this.state.totalAmountConsumed + this.state.amountJustConsumed;
    const amountLeft = this.props.waterGoal - this.props.totalAmountConsumed;

    return (<div>
      <h3>What is your water goal today?</h3>
      <form noValidate="noValidate" autoComplete="off">
        <TextField
          onChange={this.goalInput}
          id="waterGoals"
          label="waterGoals"
        />
      </form>
      <RaisedButton onClick={this.submitButton} type="submit" label="Submit"/>
      <h3>How much water did you just drink?
      </h3>
      <form noValidate="noValidate" autoComplete="off">
        <TextField onChange={this.updateGoal} id="updateWater" label="updateWater"/>
      </form>
      <RaisedButton onClick={this.updateButton} type="submit" label="Update"/>

      <h3>
        Your daily water goal is: {this.props.waterGoal} ounces</h3>
      <h3>
        Water currently consumed: {this.props.totalAmountConsumed} ounces</h3>
      <h3>
        Amount of water to go: {amountLeft} ounces</h3>
      <br></br>
    </div>)
  }
};
export default Goals;
