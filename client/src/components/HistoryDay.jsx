import React, { Component } from 'react';

export default class HistoryDay extends Component {
  render() {
    return(
      <div>
        <div style={style.day} className="historyDay">
          <strong className="historyDayTitle" data-day={this.props.day} data-meow="some string" data-isthing="true">{this.props.day} </strong><br/>
          {`Water Goal: ${this.props.goal} oz`}<br/>
          {`Consumed: ${this.props.consumed} oz`}<br/>
          {`Left To Go: ${parseInt(this.props.goal, 10) - parseInt(this.props.consumed, 10)} oz`}
        </div>
      </div>
    )
  }
}

const style = {
  day: {
    margin: "7px",
    padding: "10px",
    backgroundColor: "gray",
    textAlign: "center"
  }
}
