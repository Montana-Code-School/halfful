import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {},
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
}


  //   fetch("http://localhost:3002/api/test", {
  //     method: 'get',
  //     headers: {
  //       'accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': `bearer ${Auth.getToken()}`
  //     },
  //   })
  //   .then((res)=> { return res.json()})
  //     .then(data => console.log(data));
  // }


  /**
   * Render the component.
   */
  render() {
    return (
      <Dashboard
        secretData={this.state.secretData}
        user={this.state.user}
        history = {this.props.history}
      />
    );
  }

}

export default DashboardPage;
