import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';


class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (

<div style={style.back}>
<div >
<img src="https://cdn.pixabay.com/photo/2012/04/18/04/32/whale-36828_1280.png" alt="Cartoon Whale" height="250" width="400">
  </img>
      <Card className="container">
        <CardTitle style={{fontSize: '40px', color: '#6495ED'}} title="Welcome to HalfFül!" subtitle="The Web App that tracks your water intake" />
          {Auth.isUserAuthenticated() ? (
            <CardText style={{ fontSize: '40px', color: '#4169E1' }}>Welcome back!</CardText>
          ) : (
            <CardText style={{ fontSize: '23px', color: '#4169E1' }}>To start tracking your water goals simply log in!</CardText>
          )}
          <CardText style={{ fontSize: '20px', color: '#4169E1' }}>dont have an acount? Sign Up now!</CardText>
          <img src="https://cdn.pixabay.com/photo/2016/07/23/17/10/radish-1537141_1280.jpg" alt="A bundle of radishes" height="300" width="300">
       </img>
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
    // margin: "7px",
    // padding: "10px",
    backgroundImage: "url('https://cdn.pixabay.com/photo/2016/09/13/19/31/texture-1668079_1280.jpg')",
    // backgroundColor: "#48D1CC",

    // textAlign: "center"
  }
}


export default HomePage;
