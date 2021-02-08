import React, { Component } from "react";
import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";
import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/core";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { fetchSmurfs } from "./actions";
import { connect } from "react-redux";

const color = "#007bff";
const override = css`
  margin: 0 auto;
  text-align: center;
  display: block;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <button className="navbar-brand">Smurf Village Database</button>
        </nav>
        <main>
          <AddForm />
          {this.props.isLoading ? (
            <SyncLoader
              color={color}
              size="15px"
              margin="10px"
              css={override}
            />
          ) : (
            <SmurfDisplay />
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfsReducer.smurfs,
    error: state.smurfsReducer.error,
    isLoading: state.smurfsReducer.isLoading,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application. ✔️
