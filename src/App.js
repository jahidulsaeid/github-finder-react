import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
export class App extends Component {
  state = {
    users: [],
    loading: false,
    alert:null
  };

  // Show user
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  // Search user
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  //clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  //Set Alert
  setAlert = (msg,type)=> {
    this.setState({ alert: { msg,type }})
    setTimeout(()=> this.setState({alert:null}),5000)
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar icon="fab fa-github" title="Github Finder" />

        <div className="mt-5 col-md-9" style={{ margin: "auto" }}>
          <Alert alert={this.state.alert}/>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
        </div>
        <Users loading={loading} users={users} />
      </div>
    );
  }
}

export default App;
