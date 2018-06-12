import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from '../modules/Auth';
import Button from '@material-ui/core/Button';

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
    this.deleteButton = this.deleteButton.bind(this);
    this.goalInput = this.goalInput.bind(this);
    this.updateGoal = this.updateGoal.bind(this);
    this.amountConsumedInput = this.amountConsumedInput.bind(this);

  }
  componentDidMount() {
    fetch('/api/dashboard',{
      method: 'GET',
      headers: {
      Authorization: `bearer ${Auth.getToken()}`}})
    .then ( ( res )  => {return res.json()})
    .then (data => this.setState({
      waterGoal: data.user.waterGoal,
      totalAmountConsumed : data.user.totalAmountConsumed
    }));
  }


  submitButton(evt) {
    evt.preventDefault();
    const obj = {
      waterGoal: parseInt(this.state.waterGoal),
      totalAmountConsumed: parseInt(this.state.totalAmountConsumed)
    }
    fetch('/api/dashboard',{
      method: 'PUT',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(obj)
    })
    .then ( ( res )  => {return res.json()})
    .then (data => console.log(data))
};

deleteButton(evt) {
  evt.preventDefault();

  fetch('/api/dashboard',{
    method: 'DELETE',
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      Authorization: `bearer ${Auth.getToken()}`
    }
  })
  .then ( ( res )  => {return res.json()})
  .then (data => console.log(data))
};

  goalInput(e) {
    this.setState({waterGoal: e.target.value})
    console.log("waterGoal",this.state.waterGoal);
  }

  amountConsumedInput(e) {
    this.setState({totalAmountConsumed: e.target.value})
    console.log("totalAmountConsumed", this.state.totalAmountConsumed);
  }

  updateGoal(e) {

    this.setState({amountJustConsumed: e.target.value})
  }

  render() {
    const newTotal = this.state.totalAmountConsumed + this.state.amountJustConsumed;
    const amountLeft = this.state.waterGoal - this.state.totalAmountConsumed;

    return (<div>
      <h3>What is your water goal today?</h3>
      <form noValidate="noValidate" autoComplete="off">
        <TextField
          onChange={this.goalInput}
          id="waterGoals"
          label="waterGoals"
        />
      </form>
      <h3>How much water did you just drink?
      </h3>
      <form noValidate="noValidate" autoComplete="off">
        <TextField onChange={this.amountConsumedInput} id="updateWater" label="updateWater"/>
      </form>
      <RaisedButton onClick={this.submitButton} type="submit" label="Submit"/>
      <RaisedButton onClick={this.deleteButton} type="delete" label="Delete Account"/>
      <h3>
        Your daily water goal is: {this.state.waterGoal} ounces</h3>
      <h3>
        Water currently consumed: {this.state.totalAmountConsumed} ounces</h3>
      <h3>
        Amount of water to go: {amountLeft} ounces</h3>
      <br></br>
    </div>)
  }
};
export default Goals;
