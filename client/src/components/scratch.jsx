{value={this.props.waterGoal !== 0 || this.props.waterGoal !== '' ? "You need to input a Water Goal" : this.props.waterGoal}}


fetch('/api/dashboard',{
  method: 'GET',
  headers: {
  Authorization: `bearer ${Auth.getToken()}`}})
.then ( ( res )  => {return res.json()})
.then (data => console.log(data));


blue button  {/* <Button variant= "contained" color="primary" className = ''></Button> */}

background-image: url("https://pixabay.com/photo-237489/");


<CardTitle style={style.topHeader}
