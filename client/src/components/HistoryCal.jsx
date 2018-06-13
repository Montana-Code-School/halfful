import React, { Component } from 'react';
import HistoryDay from './HistoryDay.jsx';

export default class HistoryCal extends Component {
  render() {
    return(
      <div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} >
            <HistoryDay day={'Monday'} goal={'20'} consumed={'14'} togo={'6'} />
            <HistoryDay day={'Tuesday'} goal={'20'} consumed={'14'} togo={'6'} />
            <HistoryDay day={'Wednesday'} goal={'20'} consumed={'14'} togo={'6'} />
            <HistoryDay day={'Thursday'} goal={'20'} consumed={'14'} togo={'6'} />
            <HistoryDay day={'Friday'} goal={'20'} consumed={'14'} togo={'6'} />
            <HistoryDay day={'Saturday'} goal={'20'} consumed={'14'} togo={'6'} />
            <HistoryDay day={'Sunday'} goal={'20'} consumed={'14'} togo={'6'} />
        </div>
      </div>
    )
  }
}
