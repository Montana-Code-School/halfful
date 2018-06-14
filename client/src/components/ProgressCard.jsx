import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'material-ui/Card';
import Auth from '../modules/Auth';



class ProgressCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waterGoal: 0,
      amountJustConsumed: 0,
      leftToGo: 0,
      totalAmountConsumed: 0
    }
  }

  componentDidMount() {
    fetch('/api/dashboard',{
      method: 'GET',
      headers: {
      Authorization: `bearer ${Auth.getToken()}`}})
    .then ( ( res )  => {return res.json()})
    .then (data =>
      this.setState({
      waterGoal: data.user.waterGoal,
      totalAmountConsumed : data.user.totalAmountConsumed
    }));
  }

render() {
  const newTotal = parseInt(this.state.totalAmountConsumed, 10) + parseInt(this.state.amountJustConsumed, 10);
  const amountLeft = this.state.waterGoal - this.state.totalAmountConsumed;
  return (
    <div>
      <h2>Today's Progress</h2>
        <h3>
          Your daily water goal is: {this.state.waterGoal} oz
        </h3>
        <h3>
          Water currently consumed: {newTotal} oz
        </h3>
        <h3>
          Amount of water to go: {amountLeft} oz
        </h3>
        <img src= "https://orig00.deviantart.net/bf53/f/2015/053/1/1/copinho_by_ninainlove-d8j5yty.png" alt="cute glass of water" height = "150px" width = "100px" style = {style.waterImg}/>
    </div>
      )
    }
  }

  const style = {
    waterImg: {
      
      align: "middle"
    }
  }



export default ProgressCard;
