import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'material-ui/Card';
import Auth from '../modules/Auth';

export default class ProgressCard extends Component {
  constructor(props) {
    super(props);
  }

componentDidMount() {
  console.log("waterGoal :", this.props.waterGoal, "totalAmountConsumed :", this.props.totalAmountConsumed, "amountJustConsumed :", this.props.amountJustConsumed);
}
render() {
  return (
    <div>
      <h2>Today's Progress</h2>
        <h3>
          Your daily water goal is: {this.props.waterGoal} oz
        </h3>
        <h3>
          Water currently consumed: {this.props.totalAmountConsumed} oz
        </h3>
        <h3>
          Amount of water to go: {this.props.leftToGo} oz
        </h3>
        <img id="cup" src= "https://orig00.deviantart.net/bf53/f/2015/053/1/1/copinho_by_ninainlove-d8j5yty.png" alt="cute glass of water" height = "150px" width = "100px" style = {style.waterImg}/>
    </div>
      )
    }
  }

  const style = {
    waterImg: {
      align: "middle"
    }
  }
