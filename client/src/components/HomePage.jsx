import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import radish from '../../../server/static/images/radish.jpg'

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div>
        <div style={style.back}>
          <Card className="container">
            <CardTitle style={{fontSize: '40px', color: '#6495ED'}} title="Welcome to HalfFül!" subtitle="The Web App that tracks your water intake" />
              {Auth.isUserAuthenticated() ? (
                <CardText style={{ fontSize: '40px', color: '#4169E1' }}>Welcome back!</CardText>
              ) : (
                <CardText style={{ fontSize: '23px', color: '#4169E1' }}>To start tracking your water goals simply log in!</CardText>
              )}
              <CardText style={{ fontSize: '20px', color: '#4169E1' }}>Don't have an account? Sign up now!</CardText>
            <img src={`js/${radish}`} alt="radish bunch" height="80px"/>
          </Card>
        </div>
      </div>
    )
  }
};

const style = {
  back: {
    height: "100%",
    width: "100%",
    backgroundColor: "#48D1CC",
  }
}
