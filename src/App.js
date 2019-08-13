import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import { books } from "./common/data";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header />
        <BooksContainer {...books} /> */}
      </Fragment>
    );
  }
}

