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
    this.updateButton = this.updateButton.bind(this);
    this.goalInput = this.goalInput.bind(this);
    this.updateGoal = this.updateGoal.bind(this);
    this.amountConsumedInput = this.amountConsumedInput.bind(this);

  }

  submitButton(evt) {
    // fetch('/api/dashboard',{
    //   method: 'GET',
    //   headers: {
    //   Authorization: `bearer ${Auth.getToken()}`}})
    // .then ( ( res )  => {return res.json()})
    // .then (data => console.log(data));

    const obj = {
      id:this.props.userId,
      waterGoal: this.state.waterGoal,
      totalAmountConsumed: this.state.totalAmountConsumed
    }
         console.log("obj", JSON.stringify(obj));
    evt.preventDefault()
    fetch('/api/dashboard',{
      method: 'PUT',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      },
      body: obj
    })
    .then ( ( res )  => {return res.json()})
    .then (data => console.log(data))
};

  updateButton(e) {
      console.log(typeof this.props.totalAmountConsumed);
  }

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
      <RaisedButton onClick={this.submitButton} type="submit" label="Submit"/>
      <h3>How much water did you just drink?
      </h3>
      <form noValidate="noValidate" autoComplete="off">
        <TextField onChange={this.amountConsumedInput} id="updateWater" label="updateWater"/>
      </form>
      <RaisedButton onClick={this.updateButton} type="submit" label="Update" color= 'primary'/>
      <Button variant= "contained" color="primary" className = ''></Button>

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
