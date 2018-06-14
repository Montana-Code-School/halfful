import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

export default class HomePage extends React.Component {

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
              <CardText style={{ fontSize: '20px', color: '#4169E1' }}>dont have an acount? Sign Up now!</CardText>
              <img src="https://cdn.pixabay.com/photo/2016/07/23/17/10/radish-1537141_1280.jpg" alt="Smiley face" height="42" width="42"/>
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
