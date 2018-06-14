import React, { Component } from 'react';
import HistoryDay from './HistoryDay.jsx';

export default class HistoryCal extends Component {
  componentDidMount () {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = new Date();
    let dayOfWeek = days[today.getDay()];
    let mikey = document.getElementsByClassName("historyDayTitle");
    for (var i = 0; i < mikey.length; i++) {
      if(mikey[i].dataset.day === dayOfWeek) {
        mikey[i].parentElement.style.backgroundColor = "00bcd4";
      }
    }
  }

  render() {
    const dayComponents = [
      <HistoryDay day={'Monday'} goal={'20'} consumed={'14'} togo={'6'} />,
      <HistoryDay day={'Tuesday'} goal={'20'} consumed={'14'} togo={'6'} />,
      <HistoryDay day={'Wednesday'} goal={'20'} consumed={'14'} togo={'6'} />,
      <HistoryDay day={'Thursday'} goal={'20'} consumed={'14'} togo={'6'} />,
      <HistoryDay day={'Friday'} goal={'20'} consumed={'14'} togo={'6'} />,
      <HistoryDay day={'Saturday'} goal={'20'} consumed={'14'} togo={'6'} />
    ]
    return(
      <div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} >
            {dayComponents}
        </div>
      </div>
    )
  }
}
