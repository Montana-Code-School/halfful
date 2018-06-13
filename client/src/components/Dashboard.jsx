import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Goals from './Goals.js';
import HistoryCal from './HistoryCal.jsx';

const Dashboard = ({ secretData, user, history }) => (
<div>
  <div>
    <Card style={{ width: "100%"}}  className="container">
      <CardTitle
        title="HalfFül"
        subtitle="Drink all the waters."
      />
    </Card>
  </div>
  <div style={{display: "flex", justifyContent: "space-around"}}>
    <Card className="container">
      <CardTitle

      />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br /></CardText>}
    <Goals
        waterGoal = {user.waterGoal}
        totalAmountConsumed = {user.totalAmountConsumed}
        userId = {user._id}
        history = {history}
     />
    </Card>
    <Card className="container">
      <CardTitle

      />
    </Card>

  </div>
  <HistoryCal />
</div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
