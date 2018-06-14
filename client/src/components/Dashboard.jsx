import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Goals from './Goals.js';
import ProgressCard from './ProgressCard.jsx';

const Dashboard = ({ secretData, user }) => (
<div>  
  <div>
    <Card className="container">
      <CardTitle
        title="HalfFül"
        subtitle="Drink all the waters."
      />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br /></CardText>}
    <Goals
        waterGoal = {user.waterGoal}
        totalAmountConsumed = {user.totalAmountConsumed}
        userId = {user._id}
     />
    </Card>
  </div>
  <div>
    <Card>
      <ProgressCard />
    </Card>
  </div>
</div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
