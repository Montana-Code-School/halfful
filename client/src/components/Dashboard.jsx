import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Goals from './Goals.js';
import HistoryCal from './HistoryCal.jsx';
// import styles from './Dashboard.css';

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
  <div>
    <Card className="container">
      <CardTitle/>
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br /></CardText>}
    <Goals
        waterGoal = {user.waterGoal}
        totalAmountConsumed = {user.totalAmountConsumed}
        userId = {user._id}
        history = {history}
     />
    </Card>
    <Card className="container">
      <CardTitle/>
    </Card>

  </div>
  <HistoryCal />
</div>
);

const style = {
  topheading: {
    backgroundColor: "lightblue",
    textAlign: "center",
    height: "30%",
    width: "75%",
    backgroundImage: "url(https://pixabay.com/photo-237489/)"
  }
}

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
