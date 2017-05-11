import React from "react";
import axios from "axios";
import Pin from "./Pin";
import Nav from "./Nav";
import List from "./List";
import AuthService from "./utils/AuthService";

const auth = new AuthService(
  "7ahU6Olf4SuRFf3B3lDGVuY6DGP0hj5T",
  "dhsiao89.auth0.com"
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeData: {
        name: "Kevin",
        password: "qwerty",
        urls: [
          {
            name: "www.craiglist.com/deal",
            pins: ["Great Deal", "Greater Deal"]
          },

          {
            name: "www.craiglist.com/job",
            pins: ["Great KEVIN", "Greater Job"]
          }
        ]
      }
    };
  }

  fetch() {
    axios
      .get("/users")
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    //this.fetch();
  }

  // getPins(query) {

  // }

  // onPinClick(pin) {

  // }

  render() {
    return (
      <div className="container">
        <Nav auth={auth} />
        {this.state.fakeData.urls.map((list, index) => (
          <List data={list} key={index} />
        ))}
      </div>
    );
  }
}

export default App;
