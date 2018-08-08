import React, { Component } from "react";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import Carousal from "../../components/Carousal";
// import Welcome from "../../components/Welcome";
// import Jumbotron from "../../components/Jumbotron";


class Homepage extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // };

  render() {
    return (
     <div>
        <Nav />
          <Carousal/>
      </div>
    );
  }
}

export default Homepage;
