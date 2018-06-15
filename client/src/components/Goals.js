import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from '../modules/Auth';
import Button from '@material-ui/core/Button';

export default class Goals extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  // componentDidMount() {
  //   fetch('/api/dashboard', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `bearer ${Auth.getToken()}`
  //     }})
  //   .then ( ( res )  => {return res.json()})
  //   .then (data => this.setState({
  //     waterGoal: data.user.waterGoal,
  //     totalAmountConsumed : data.user.totalAmountConsumed
  //   }));
  // }

  render() {
    return (
      <div>
        <h3>What is your water goal today?</h3>
        <form noValidate="noValidate" autoComplete="off">
          <TextField
            onChange={this.props.stateHandler.goalInput}
            id="waterGoals"
            label="waterGoals"
          />
        </form>
        <h3>How much water did you just drink?
        </h3>
        <form noValidate="noValidate" autoComplete="off">
          <TextField onChange={this.props.stateHandler.amountConsumedInput} id="updateWater" label="updateWater"/>
        </form>
        <RaisedButton onClick={this.props.stateHandler.submitButton} type="submit" label="Submit"/>
        <RaisedButton style = {style.delete} onClick={this.props.stateHandler.deleteButton} type="delete" label="Delete Account"/>
        <br></br>
      </div>
    )
  }
};

const style = {
  delete : {
    margin: "10px"
  }
}
