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
      waterGoal: 0,
      totalAmountConsumed:0,
      leftToGo:0,
      amountJustConsumed:0
    };
    this.submitButton = this.submitButton.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.goalInput = this.goalInput.bind(this);
    this.amountConsumedInput = this.amountConsumedInput.bind(this);
  }

  // const newTotal = ;
  // const amountLeft = ;

  submitButton(evt) {
    evt.preventDefault();
    const obj = {
      waterGoal: parseInt(this.state.waterGoal),
      amountJustConsumed: parseInt(this.state.amountJustConsumed)
    }
    fetch('/api/dashboard',{
      method: 'PUT',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      },
      body: JSON.stringify(obj)
    })
    .then ( ( res )  => {return res.json()})
    .then (( data ) => {
      console.log(data)
      document.getElementById("cup").classList.add("cup")
    })
};

deleteButton(evt) {
  evt.preventDefault();
  let userDeleted = 0;

  fetch('/api/dashboard',{
    method: 'DELETE',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      }
   })
    .then ( ( res )  => {
      if(res.status === 200){
          Auth.deauthenticateUser();
          this.props.history.push('/');
      } else {
        console.log("you can check in, but you can never check out!!");
      }
    })
  };

  goalInput(e) {
    this.setState({waterGoal: e.target.value})
    console.log("waterGoal",this.state.waterGoal);
  }

  amountConsumedInput(e) {
    this.setState({amountJustConsumed: e.target.value})
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
          user: xhr.response.user,
          waterGoal: xhr.response.user.waterGoal,
          totalAmountConsumed : xhr.response.user.totalAmountConsumed
        });
      }
    });
    xhr.send();
  }

  render() {
    return (
      <Dashboard
        secretData= { this.state.secretData }
        user= { this.state.user }
        history = { this.props.history }
        stateHandler = {{
          submitButton: this.submitButton,
          deleteButton: this.deleteButton,
          goalInput: this.goalInput,
          amountConsumedInput: this.amountConsumedInput
        }}
        waterObject = {{
          waterGoal: this.state.waterGoal,
          totalAmountConsumed: this.state.totalAmountConsumed,
          leftToGo: this.state.leftToGo,
          amountJustConsumed: this.state.amountJustConsumed
        }}
      />
    );
  }
}

export default DashboardPage;
