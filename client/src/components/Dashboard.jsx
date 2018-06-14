import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Goals from './Goals.js';
import HistoryCal from './HistoryCal.jsx';
import ProgressCard from './ProgressCard.jsx'

const Dashboard = ({ secretData, user, history }) => (
  <div>
    <div style={style.topheading} className="topHeading">
      <Card>
        <CardTitle
          title="HalfFül"
          subtitle="Drink all the waters."
        />
      </Card>
    </div>
    <div style= {style.firstCardDiv}>
      <Card className="container" style = {style.goalCard}>
      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br /></CardText>}
        <Goals
          waterGoal = {user.waterGoal}
          totalAmountConsumed = {user.totalAmountConsumed}
          userId = {user._id}
          history = {history}
        />
      </Card>
      <Card className="container" style = {style.progressCard}>
        <ProgressCard />
      </Card>
    </div>
    <div style = {style.historyDiv}>
      <HistoryCal />
    </div>
  </div>
);

const style = {
  topheading: {
    backgroundColor: "lightblue",
    textAlign: "center",
    backgroundImage: "url(https://pixabay.com/photo-237489/)"
  },
  firstCardDiv:{
    display: "flex",
    justifyContent: "space-evenly"
  },
  goalCard: {
    margin: '10px',
    padding: '12px 12px 12px 12px'
  },
  progressCard: {
    margin:'10px',
    padding: '12px 12px 12px 12px'
  },
  historyDiv:{
    justifyContent: "center"
  }
}

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
