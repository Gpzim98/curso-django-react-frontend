import React from 'react';
import UserLists from './UserLists';

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: 'Test', password: 'CursoDjango'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }
    
      handleChange(event) {
        this.setState({username: event.target.value});
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        var url = 'http://51.143.150.114:8080/api-token-auth/';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                this.setState({token: data.token});
            });
        event.preventDefault();
      }

      logout(){
          localStorage.removeItem('token');
          this.setState({token: null});
      }
    
      render() {
        var token = localStorage.getItem('token');

        if(!token)
            return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.username} onChange={this.handleChange} />
                <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            );
        else
            return (
                <div>
                    <UserLists />
                    <button onClick={() => this.logout()}> Logout </button>
                </div>
            )
            
      }
}